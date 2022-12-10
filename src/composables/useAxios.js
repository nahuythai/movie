import axios from "axios";
import { start, done } from "nprogress";

const http = axios.create({
  baseURL: import.meta.env.MOVIE_BASE_URL,
});

export const useAxios = async (url, method, params = undefined) => {
  start();
  const res = await http({
    method,
    url,
    params,
  });
  done();
  return res;
};
