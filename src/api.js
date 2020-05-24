import axios from "axios";

const api = axios.create({
  method: "GET",
  headers: {
    "content-type": "application/octet-stream",
    "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
    "x-rapidapi-key": "f9bd29d4a8msh3fddfa988e505f4p1d264ejsn7918b1dc8583",
  },
  baseURL: "https://rawg-video-games-database.p.rapidapi.com/",
});

export const GamesApi = {
  gameLists: () => api.get(`games`),
  gameDetails: (id) => api.get(`games/${id}`),
};

export const PlatformsApi = {
  platformLists: () => api.get(`platforms`),
  platformDetails: (id) => api.get(`platforms/${id}`),
};

export const GenresApi = {
  genreLists: () => api.get(`genres`),
  genreDetails: (id) => api.get(`genres/${id}`),
};

export const TagApi = {
  tagLists: () => api.get(`tags`),
  tagDetails: (id) => api.get(`tags/${id}`),
};

export const StoreApi = {
  storeLists: () => api.get(`stores`),
  storeDetails: (id) => api.get(`stores/${id}`),
};

export const PublisherApi = {
  publisherLists: () => api.get(`publishers`),
  publisherDetails: (id) => api.get(`publishers/${id}`),
};
