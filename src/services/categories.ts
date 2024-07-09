import axios from "axios";


export const categoriesUrl = `http://localhost:8080/api/categories`;

export const getCategories = () => axios.get(categoriesUrl)
;