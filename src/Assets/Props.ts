/** @format */

export type RowProps = {
	name: string;
	title?: string;
	height: string;
	mass: string;
	hair_color: string;
	skin_color: string;
	birth_year: string;
	eye_color: string;
	gender: string;
	homeworld: string;
	films: string[];
	species: string[];
	vehicles: string[];
	starships: string[];
	created: string;
	edited: string;
	url: string;
};

export type InputProps = {
	search: string;
	setSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type QueryProps = {
	title: string;
	page: number;
	expand: boolean;
	search?: boolean;
	term?: string;
};

export type TitleProps = {
	title: string;
	page: number;
};

export type optionProps = {
	options: string[];
};

export type RowProp = {
	name: string;
	height: string;
	mass: string;
	hair_color: string;
	skin_color: string;
	birth_year: string;
	eye_color: string;
	gender: string;
	homeworld: string;
	films: string[];
	species: string[];
	vehicles: string[];
	starships: string[];
	created: string;
	edited: string;
	url: string;
};

