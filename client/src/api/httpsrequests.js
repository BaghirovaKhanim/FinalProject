import { BASE_URL } from "./base_url";
import axios from "axios";

//Get All Services
export const getAllServices = async (name) => {
  let globalData;
  let URL;
  if (!name) {
    URL = BASE_URL + "/services";
  } else {
    URL = BASE_URL + "/services" + `?name=${name}`;
  }
  await axios.get(URL).then((res) => {
    globalData = res.data;
  });
  return globalData;
};

//Get Service By Id
export const getServiceByID = async (id) => {
  let globalData;
  await axios.get(`${BASE_URL}/services/${id}`).then((res) => {
    globalData = res.data;
  });
  return globalData;
};

//delete
export const deleteService = async (id) => {
  await axios.delete(`${BASE_URL}/services/${id}`);
};

//post
export const postService = async (payload) => {
  await axios.post(`${BASE_URL}/services`, payload);
};

//put
export const putService = async (id, payload) => {
  await axios.put(`${BASE_URL}/services/${id}`, payload);
};
