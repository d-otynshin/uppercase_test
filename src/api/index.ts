import axios from "axios";

const API_KEY = "8523cbb8";
const VALID_IMDB_ID = "tt3896198";
const BASE_URL = "https://www.omdbapi.com";

const api = axios.create({
  baseURL: BASE_URL,
});

export const getMovies = async (query: string, page: number) => {
  const { data } = await api.get("", {
    params: { i: VALID_IMDB_ID, apiKey: API_KEY, s: query, page },
  });

  return data;
};
