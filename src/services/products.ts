import axios from "axios";


export const productsUrl = `http://localhost:8080/api/products`;

export const getProducts = () => {
  console.log(productsUrl)
  return axios.get(productsUrl)
};