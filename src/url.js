import { ApiKey } from "./components/Mainpage/constant";

export const originals = `/discover/tv?api_key=${ApiKey}&with_networks=213`;
export const RomanceMovies = `/discover/movie?api_key=${ApiKey}&with_genres=10749`;
export const ActionMovies = `/discover/movie?api_key=${ApiKey}&with_genres=28`;
export const ComedyMovies = `/discover/movie?api_key=${ApiKey}&with_genres=35`;
export const HorrorMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&with_genres=27`;
export const trending = `https://api.themoviedb.org/3/trending/all/week?api_key=${ApiKey}&language=en-US`;
export const Documentaries=`https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&with_genres=99`
