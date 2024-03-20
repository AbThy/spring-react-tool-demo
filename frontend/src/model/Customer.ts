export type CustomerData = {
  name: string;
  dateOfBirth: string;
  placeOfBirth: string;
  taj: string;
  taxId: string;
  phoneNumbers: string[];
  addresses: Address[];
};

export type Address = {
  postalCode: number;
  city: string;
  street: string;
  houseNumber: number;
  other: string;
};
