import { Customer, CustomerData } from "model/Customer";
import { api } from "./axiosInstance";

const BASE_URL = "/customer";

export const saveCustomer = async (
  customerDto: CustomerData
): Promise<Customer> => {
  return await api.post(`${BASE_URL}/save`, customerDto);
};
