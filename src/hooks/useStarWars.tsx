/** @format */
//useQuery hooks

import { useQuery } from "react-query";
import starwars from "../APIs/starwars";
import { QueryProps } from "../Assets/Props";


export const useStarWars = (props: QueryProps) => {

	return useQuery(
		[`/${props.title}`, props.page],
		() => {
			if(props.search && props.term){
				return starwars.searchStarWars(props.title, props.term);
			}
            if(props.expand){
				switch (props.title || props.search) {
					case "people":
						console.log("im in people")
						return starwars.getPeople(props.page);
					case "planets":
						console.log("I've selected planets");
						return starwars.getPlanets(props.page);
					case "starships":
						console.log("I've selected starships");
						return starwars.getStarships(props.page);
					case "films":
						console.log("I've selected films");
						return starwars.getFilms(props.page);
					case "vehicles":
						return starwars.getVehicles(props.page);
					case "starships":
						return starwars.getStarships(props.page);
					case "species":
						console.log("I've selected species");
						return starwars.getSpecies(props.page);
					case "residents":
						console.log("I've selected residents", props.page);
						return starwars.getResident(props.page);
					case "pilots":
						console.log("I've selected pilots", props.page);
						return starwars.getResident(props.page);
					case "characters":
						console.log("I've selected pilots", props.page);
						return starwars.getResident(props.page);
				}
			}
            return starwars.getStarWarsList(props.title, props.page);
        },
		{
			keepPreviousData: true,
		}
	);
};


