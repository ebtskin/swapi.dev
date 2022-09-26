/** @format */

import axios from "axios";


export const axiosPrivate = axios.create({
	baseURL: "https://swapi.dev/api",
});

const starwars = {
	getStarWarsList: async (title: string, pageParam = 1) => {
		try {
			const response = await axiosPrivate.get(
				`/${title}/?page=${pageParam}`
			);
			return response.data;
		} catch (error) {
			return error;
		}
	},
	getPlanets: async (pageParam: number) => {
		try {
			const response = await axiosPrivate.get(`/planets/${pageParam}`);
			return response.data;
		} catch (error) {
			return error;
		}
	},
	getPeople: async (pageParam: number) => {
		try {
			const response = await axiosPrivate.get(`/people/${pageParam}`);
			return response.data;
		} catch (error) {
			return error;
		}
	},
	getStarships: async (pageParam: number) => {
		try {
			const response = await axiosPrivate.get(`/starships/${pageParam}/`);
			return response.data;
		} catch (error) {
			return error;
		}
	},
	getCharacters: async (pageParam: number) => {
		try {
			const response = await axiosPrivate.get(
				`/characters/${pageParam}/`
			);
			return response.data;
		} catch (error) {
			return error;
		}
	},
	getFilms: async (pageParam: number) => {
		try {
			const response = await axiosPrivate.get(`/films/${pageParam}/`);
			return response.data;
		} catch (error) {
			return error;
		}
	},
	getVehicles: async (pageParam: number) => {
		try {
			const response = await axiosPrivate.get(`/vehicles/${pageParam}/`);
			return response.data;
		} catch (error) {
			return error;
		}
	},
	getSpecies: async (pageParam: number) => {
		try {
			const response = await axiosPrivate.get(`/species/${pageParam}/`);
			return response.data;
		} catch (error) {
			return error;
		}
	},
	getResident: async (pageParam: number) => {
		try {
			const response = await axiosPrivate.get(`/people/${pageParam}/`);
			return response.data;
		} catch (error) {
			return error;
		}
	},
	getPilots: async (pageParam: number) => {
		try {
			const response = await axiosPrivate.get(`/pilots/${pageParam}/`);
			return response.data;
		} catch (error) {
			return error;
		}
	},
	searchStarWars: async (title: string, term: string) => {
		try {
			const response = await axiosPrivate.get(
				`/${title}/?search=${term}`
			);
			return response.data;
		} catch (error) {
			return error;
		}
	},
};

export default starwars;
