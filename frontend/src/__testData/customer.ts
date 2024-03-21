import { Address, Customer, PhoneNumber } from "model/Customer";

export const testPhoneNumber: PhoneNumber = {
  number: "+36305555555",
};

export const testAddress: Address = {
  postalCode: 1111,
  city: "Budapest",
  street: "Bartók Béla út",
  houseNumber: 54,
  other: "none",
};

export const testCustomer: Customer = {
  id: 1,
  name: "test name",
  email: "test mail",
  mother: "gaia",
  dateOfBirth: "1967-08-30",
  placeOfBirth: "Rome",
  taj: "111",
  taxId: "111",
  phoneNumbers: [testPhoneNumber],
  addresses: [testAddress],
};
