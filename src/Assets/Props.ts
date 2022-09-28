/** @format */

export type IHeading = {
	heading: string[];
};

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

export type ViewProps = 'list' | 'module'

export interface ToggleProps {
	view: ViewProps;
	onToggleView: (nextView: ViewProps) => void;
	title: string;
	setTitle: React.Dispatch<React.SetStateAction<string>>;
};

export type InputProps = {
	search: string;
	setSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleSort: () => void;
};

export type SortProps = {
	handleSort: () => void;
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


export type IPeople = {
	name: string;
	title?:string;
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

export type IDropDown = {
	residents: string[];
}


export type IPlanet = {
	title?:string;
	name: string;
	rotation_period: number;
	orbital_period: number;
	diameter: number;
	climate: string;
	gravity: string;
	terrain: string;
	surface_water: number;
	population: number;
	residents: IDropDown;
	films: IDropDown;
	created: string;
	edited: string;
	url: string;
};
export type IStarship = {
	title?:string;
	name: string;
	model: string;
	manufacturer: string;
	cost_in_credits: number;
	length: number;
	max_atmosphering_speed: number;
	crew: number;
	passengers: number;
	cargo_capacity: number;
	consumables: string;
	hyperdrive_rating: number;
	MGLT: Number;
	starship_class: string;
	pilots: string;
	films: IDropDown;
	created: string;
	edited: string;
	url: string;
};
export type IFilm = {
	name?: string;
	title: string;
	episode_id: number;
	opening_crawl: string;
	director: string;
	producer: string;
	release_date: string;
	characters: IDropDown;
	planets: IDropDown;
	starships: IDropDown;
	vehicles: IDropDown;
	species: IDropDown;
	created: string;
	edited: string;
	url: string;
};
export type IVehicle = {
	title?: string;
	name: string;
	model: string;
	manufacturer: string;
	cost_in_credits: number;
	length: number;
	max_atmosphering_speed: number;
	crew: number;
	passengers: number;
	cargo_capacity: number;
	consumables: string;
	vehicle_class: string;
	pilots: string;
	films: IDropDown;
	created: string;
	edited: string;
	url: string;
};
export type ISpecie = {
	title?: string;
	name: string;
	classification: string;
	designation: string;
	average_height: number;
	skin_colors: string;
	hair_colors: string;
	eye_colors: string;
	average_lifespan: string;
	homeworld: IDropDown;
	language: string;
	people: IDropDown;
	films: IDropDown;
	created: string;
	edited: string;
	url: string;
};

export type IStartWar = IPeople | IFilm | IPlanet | IStarship | ISpecie;