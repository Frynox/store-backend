import axios from "axios";
import { API_BASE_URL } from "../data/endpoints.js";

export const getProductsByCategory = async (categoryId) => {
  const response = await axios.get(`${API_BASE_URL}/productosPorCategoria/${categoryId}`);
  return response.data;
};


export const createOrder = async (orderData) => {
  const response = await axios.post(
    `${API_BASE_URL}/ordenDetalleReal`, 
    orderData, // Ya contiene "productos"
    { headers: { "Content-Type": "application/json" } }
  );
  return response.data;
};
