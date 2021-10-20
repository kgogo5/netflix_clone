import axios from "axios";

const url = "https://api.rawg.io/api/",
  key = "4c320f20d4584965ba9e95d8a507f2e3";

const HomeGamesApi = {
  gameLists: () => axios.get(`${url}games?key=${key}&page=20`),
  gameDetails: (id) => axios.get(`${url}games/${id}?key=${key}`),
};

const GamesApi = {
  gameLists: () => axios.get(`${url}games?key=${key}`),
  gameDetails: (id) => axios.get(`${url}games/${id}?key=${key}`),
};

const StoreApi = {
  storeLists: () => axios.get(`${url}stores?key=${key}`),
  storeDetails: (id) => axios.get(`${url}stores/${id}?key=${key}`),
};

const PlatformsApi = {
  platformLists: () => axios.get(`${url}platforms?key=${key}`),
  platformDetails: (id) => axios.get(`${url}platforms/${id}?key=${key}`),
};

const GenresApi = {
  genreLists: () => axios.get(`${url}genres?key=${key}`),
  genreDetails: (id) => axios.get(`${url}genres/${id}?key=${key}`),
};

const TagApi = {
  tagLists: () => axios.get(`${url}tags?key=${key}`),
  tagDetails: (id) => axios.get(`${url}tags/${id}?key=${key}`),
};

const PublisherApi = {
  publisherLists: () => axios.get(`${url}publishers?key=${key}`),
  publisherDetails: (id) => axios.get(`${url}publishers/${id}?key=${key}`),
};

export {
  HomeGamesApi,
  GamesApi,
  StoreApi,
  PlatformsApi,
  GenresApi,
  TagApi,
  PublisherApi,
};
