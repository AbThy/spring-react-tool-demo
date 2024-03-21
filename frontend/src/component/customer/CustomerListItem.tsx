import { Customer } from "model/Customer";
import React, { useState } from "react";
import styled from "styled-components";

const CustomerListItem = ({
  customer,
  updateCustomer,
  deleteCustomer,
}: {
  customer: Customer;
  updateCustomer: (customer: Customer) => void;
  deleteCustomer: (id: number) => void;
}) => {
  const [data, setData] = useState<Customer>({
    ...customer,
    dateOfBirth: customer?.dateOfBirth?.split("T")?.[0],
  });

  const handleBasicDetailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Container>
      <ListInput
        type="text"
        id="name"
        name="name"
        value={data.name}
        onChange={handleBasicDetailChange}
        placeholder="John Doe"
        required
      />
      <ListInput
        type="text"
        id="email"
        name="email"
        value={data.email}
        onChange={handleBasicDetailChange}
        placeholder="johndoe42@hogwarts.com"
        required
      />
      <ListInput
        type="date"
        id="dateOfBirth"
        name="dateOfBirth"
        value={data.dateOfBirth}
        onChange={handleBasicDetailChange}
        required
      />
      <ListInput
        type="text"
        id="placeOfBirth"
        name="placeOfBirth"
        value={data.placeOfBirth}
        onChange={handleBasicDetailChange}
        placeholder="Budapest"
        required
      />
      <ListInput
        type="text"
        id="mother"
        name="mother"
        value={data.mother}
        onChange={handleBasicDetailChange}
        placeholder="Don Joe"
        required
      />
      <ListInput
        type="text"
        id="taj"
        name="taj"
        value={data.taj}
        onChange={handleBasicDetailChange}
        placeholder="123-456-789"
        required
      />
      <ListInput
        type="text"
        id="taxId"
        name="taxId"
        value={data.taxId}
        onChange={handleBasicDetailChange}
        placeholder="12345789-1-23"
        required
      />
      <Button onClick={() => updateCustomer(data)}>Save</Button>
      {customer?.email === "deleted" ? (
        <Button disabled={true}>Already deleted</Button>
      ) : (
        <Button onClick={() => deleteCustomer(data?.id)}>
          Delete GDPR data
        </Button>
      )}
    </Container>
  );
};
export default CustomerListItem;

const Container = styled.div`
  display: flex;
  flex-wrap: none;
  margin: 10px 0;
`;

const ListInput = styled.input`
  height: 30px;
  width: 140px;
`;

const Button = styled.button`
  margin: 0 5px;
`;
