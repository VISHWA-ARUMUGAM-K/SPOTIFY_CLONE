import axios from "axios";

const authEndpoint = process.env.REACT_APP_AUTH_ENDPOINT;
const clientId = process.env.REACT_APP_CLIENT_ID;
const redirectUri = "http://localhost:3000";
const scopes = ["user-library-read", "playlist-read-private"];
export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const apiclient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
  apiclient.interceptors.request.use(async (config) => {
    config.headers.Authorization = "Bearer " + token;
    return config;
  });
};

export default apiclient;
