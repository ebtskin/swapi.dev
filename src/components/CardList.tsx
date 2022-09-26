/** @format */

import { useCallback, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import starwars from "../APIs/starwars";
import Card from "./Card";
import Loading from "./Loading";

export function CardList({ title }: { title: string }) {
	const [items, setItems] = useState<any>([]);
	const [page, setPage] = useState(0);

	const [fetching, setFetching] = useState(false);

	const fetchItems = useCallback(async () => {
		if (fetching) {
			return;
		}

		if (page === -1) {
			return;
		}

		setFetching(true);

		try {
			const data = await starwars.getStarWarsList(title, page + 1);

			const results = data ? data.results : [];

            console.log("data", data)

			setItems([...items, ...results]);

			if (data && data.next) {
				setPage(page + 1);
			} else {
				setPage(-1);
			}
		} finally {
			setFetching(false);
		}
	}, [items, page, fetching, title]);

	const hasMoreItems = page !== -1;

	const loader = (
		<div key="loader" className="loader">
			<Loading size="5rem" />
		</div>
	);

	return (
		<InfiniteScroll
			loadMore={fetchItems}
			hasMore={hasMoreItems}
			loader={loader}
		>
			{items.map((item : any) => {
				const cardProps = {
					title,
					name: item.name,
					created: item.created,
					url: item.url,
				};

				return <Card key={item.name} {...cardProps} />;
			})}
		</InfiniteScroll>
	);
}
