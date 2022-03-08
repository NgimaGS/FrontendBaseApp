import axios from "axios";
import { getCookie } from "../utils/cookies";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/",
});

axiosInstance.interceptors.request.use(function (config) {
  const data = getCookie("Auth");
  const token = data?.token;
  if (token) {
    config.headers["Authorization"] = token;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    // if (
    //   (error.response && error.response.data.message === "token_not_valid") ||
    //   (error.response && error.response.data.message === "user_disabled")
    // ) {
    //   localStorage.removeItem("accessToken");
    //   window.location.replace("/login");
    // } else
    if (error.response && error.response.data) {
      if (error.response.data.message) {
        const message = error.response.data.message;
        return Promise.reject({ message });
      } else return Promise.reject(error.response.data);
    } else {
      return Promise.reject({
        message: "This is obviously not working.",
      });
    }
  }
);
