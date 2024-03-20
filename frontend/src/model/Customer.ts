export type CustomerData = {
  name: string;
  email: string;
  dateOfBirth: string;
  placeOfBirth: string;
  taj: string;
  taxId: string;
  phoneNumbers: PhoneNumber[];
  addresses: Address[];
};

export type Customer = CustomerData & { id: number };

export type Address = {
  postalCode: number;
  city: string;
  street: string;
  houseNumber: number;
  other: string;
};

export type PhoneNumber = {
  number: string;
};
