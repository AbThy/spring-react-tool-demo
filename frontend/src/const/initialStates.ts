import { Address, CustomerData } from "model/Customer";

export const initialCustomerState: Partial<CustomerData> = {
  name: "",
  dateOfBirth: "",
  placeOfBirth: "",
  taj: "",
  taxId: "",
};

export const initialAddress: Address = {
  postalCode: 0,
  city: "",
  street: "",
  houseNumber: 0,
  other: "",
};
