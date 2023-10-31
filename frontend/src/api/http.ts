import axios from "axios";
import { baseURL } from "./path";

function httpClientBuilder() {
  const client = axios.create({ baseURL })

  //TODO added access token
  client.interceptors.request.use((config) => {
    const token = localStorage.getItem('@access_token');
    if (token) {
      config.headers["Authorization"] = `Beares ${token}`;
    }
    return config;
  })

  return client;
}

const http = httpClientBuilder();

export { http };

