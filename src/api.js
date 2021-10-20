import axios from "axios";

const api = axios.create({
  method: "GET",
  headers: {
    // "content-type": "application/octet-stream",
    // "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
    dates: "2021-10-21,2021-11-21",
    key: "4c320f20d4584965ba9e95d8a507f2e3",
  },
  baseURL: "https://api.rawg.io/api/",
});

export const GamesApi = {
  gameLists: () => api.get(`games`),
  gameDetails: (id) => api.get(`games/${id}`),
};

export const StoreApi = {
  storeLists: () => api.get(`stores`),
  storeDetails: (id) => api.get(`stores/${id}`),
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

export const PublisherApi = {
  publisherLists: () => api.get(`publishers`),
  publisherDetails: (id) => api.get(`publishers/${id}`),
};

// let clientId = "";
// let clientSecret = "";
// axios
//   .post(
//     "https://id.twitch.tv/oauth2/token?client_id=wo6tsz00rsazaltvncf796hwk1hjvy&client_secret=sz2o0ttuurpriin4cq18k26nwtpgyi&grant_type=client_credentials"
//   )
//   .then((data) => {
//     clientId = data.access_token;
//   });

// const api = axios.create({
//   method: "GET",
//   headers: {
//     "Client-ID": "dqwwk9bgrdjz4kzmsmfyv0l26vkx93",
//     Authorization: "sz2o0ttuurpriin4cq18k26nwtpgyi",
//   },
//   baseURL: "https://api.igdb.com/v4",
// });

// export const GamesApi = {
//   gameLists: () => api.get(`games`),
//   gameDetails: (id) => api.get(`games/${id}`),
// };

// export const StoreApi = {
//   storeLists: () => api.get(`stores`),
//   storeDetails: (id) => api.get(`stores/${id}`),
// };

// export const PlatformsApi = {
//   platformLists: () => api.get(`platforms`),
//   platformDetails: (id) => api.get(`platforms/${id}`),
// };

// export const GenresApi = {
//   genreLists: () => api.get(`genres`),
//   genreDetails: (id) => api.get(`genres/${id}`),
// };

// export const TagApi = {
//   tagLists: () => api.get(`tags`),
//   tagDetails: (id) => api.get(`tags/${id}`),
// };

// export const PublisherApi = {
//   publisherLists: () => api.get(`publishers`),
//   publisherDetails: (id) => api.get(`publishers/${id}`),
// };
