import { axiosInstance } from "../services";
import { Errors } from "../utils";

export const postRequest = async (url, payload, config) => {
  try {
    let data = await axiosInstance.post(url, payload, config);
    return data;
  } catch (error) {
    Errors(error);
  }
};

export const getRequest = async (url, config) => {
  try {
    let data = await axiosInstance.get(url, config);
    return data;
  } catch (error) {
    Errors(error);
  }
};

export const deleteRequest = async (url) => {
  try {
    let data = await axiosInstance.delete(url);
    return data;
  } catch (error) {
    Errors(error);
  }
};
