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

export const CreatorsApi = {
  creatorLists: () => api.get(`creators`),
  creatorDetails: (id) => api.get(`creators/${id}`),
};

export const GenresApi = {
  genreLists: () => api.get(`genres`),
  genreDetails: (id) => api.get(`genres/${id}`),
};

export const TagApi = {
  tagLists: () => api.get(`tag`),
  tagDetails: (id) => api.get(`tag/${id}`),
};

export const StoreApi = {
  storeLists: () => api.get(`store`),
  storeDetails: (id) => api.get(`store/${id}`),
};

export const PublisherApi = {
  publisherLists: () => api.get(`publisher`),
  publisherDetails: (id) => api.get(`publisher/${id}`),
};
