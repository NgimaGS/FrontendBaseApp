import { axiosInstance } from "../../app/api/axiosinstance";

export const postLogin = async (values) => {
  const { data } = await axiosInstance.post(`/user/login`, values);
  return data;
};

export const registerUser = async (values) => {
  const { data } = await axiosInstance.post(`/user/register`, values);
  return data;
};
