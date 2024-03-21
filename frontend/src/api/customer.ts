import { Customer, CustomerData } from "model/Customer";
import { api } from "./axiosInstance";

const BASE_URL = "/customer";

export const saveCustomer = async (
  customerDto: CustomerData
): Promise<Customer> => {
  return await api.post(`${BASE_URL}/save`, customerDto);
};

export const getCustomers = async (): Promise<Customer[]> => {
  const response = await api.get(`${BASE_URL}/get-all`);
  return response?.data;
};

export const updateCustomer = async (
  updatedCustomer: Customer
): Promise<Customer> => {
  const response = await api.put(`${BASE_URL}/update`, updatedCustomer);
  return response?.data;
};

export const deleteCustomer = async (id: number): Promise<Customer> => {
  const response = await api.delete(`${BASE_URL}/delete?customerId=${id}`);
  return response?.data;
};
