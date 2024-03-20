import React, { useState } from "react";
import styled from "styled-components";

import { Address, CustomerData } from "model/Customer";
import { initialAddress, initialCustomerState } from "const/initialStates";
import AddressForm from "./AddressForm";
import { FormRow, TextButton } from "const/styles";
import CustomPhoneInput from "./CustomPhoneInput";

const CustomerForm = () => {
  const [formData, setFormData] =
    useState<Partial<CustomerData>>(initialCustomerState);
  const [phoneNumbers, setPhoneNumbers] = useState<string[]>([""]);
  const [addresses, setAddresses] = useState<Address[]>([initialAddress]);

  const handleBasicDetailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  /**
   * Validates and send the customer
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //TODO: validate, send
    console.log(formData);

    setFormData(initialCustomerState);
    setPhoneNumbers([""]);
    setAddresses([initialAddress]);
  };

  /**
   * Adds a new empty phone number to the phone number list
   */
  const addPhoneNumber = () => {
    if (phoneNumbers[phoneNumbers.length - 1] === "") {
      alert("Please enter the previous phone number first!");
      return;
    }

    const editedNumbers = [...phoneNumbers];
    editedNumbers.push("");
    setPhoneNumbers(editedNumbers);
  };

  /**
   * Removes a phone number from the list
   */
  const removePhoneNumber = (phoneNum: string) =>
    setPhoneNumbers(phoneNumbers.filter((num) => num !== phoneNum));

  /**
   * Sets a phone number in the list
   * @param number The new phone number
   * @param index The index to modify
   */
  const setPhoneNumber = (number: string, index: number) => {
    const editedNumbers = [...phoneNumbers];
    editedNumbers[index] = number;
    setPhoneNumbers(editedNumbers);
  };

  /**
   * Adds a new empty address to the list
   */
  const addAddress = () => {
    const newAddresses = [...addresses];
    newAddresses.push(initialAddress);
    setAddresses(newAddresses);
  };

  /**
   * Updates an address by index in the list
   */
  const updateAddress = (index: number, address: Address) => {
    const editedAddresses = [...addresses];
    editedAddresses.splice(index, 1, address);
    setAddresses(editedAddresses);
  };

  /**
   * Removes an address from the list
   */
  const removeAddress = (index: number) => {
    if (addresses?.length === 1) {
      alert("Please edit the last remaining address instead of deleting it!");
      return;
    }

    const editedAddresses = [...addresses];
    editedAddresses.splice(index, 1);
    setAddresses(editedAddresses);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <FormColumns>
          <div>
            <h3>Basic details</h3>
            <FormRow>
              <Label htmlFor="name">Name:</Label>
              <FormInput
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleBasicDetailChange}
                placeholder="John Doe"
                required
              />
            </FormRow>
            <FormRow>
              <Label htmlFor="dateOfBirth">Date of birth:</Label>
              <FormInput
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleBasicDetailChange}
                required
              />
            </FormRow>
            <FormRow>
              <Label htmlFor="placeOfBirth">Place of birth:</Label>
              <FormInput
                type="text"
                id="placeOfBirth"
                name="placeOfBirth"
                value={formData.placeOfBirth}
                onChange={handleBasicDetailChange}
                placeholder="Budapest"
                required
              />
            </FormRow>
            <FormRow>
              <Label htmlFor="taj">Taj:</Label>
              <FormInput
                type="text"
                id="taj"
                name="taj"
                value={formData.taj}
                onChange={handleBasicDetailChange}
                placeholder="123-456-789"
                required
              />
            </FormRow>
            <FormRow>
              <Label htmlFor="taxId">Tax ID:</Label>
              <FormInput
                type="text"
                id="taxId"
                name="taxId"
                value={formData.taxId}
                onChange={handleBasicDetailChange}
                placeholder="12345789-1-23"
                required
              />
            </FormRow>
          </div>
          <div style={{ marginLeft: "40px" }}>
            <h3>Phone numbers</h3>
            {phoneNumbers?.map((phoneNum, index) => (
              <CustomPhoneInput
                phoneNumbers={phoneNumbers}
                phoneNum={phoneNum}
                index={index}
                setPhoneNumber={setPhoneNumber}
                addPhoneNumber={addPhoneNumber}
                removePhoneNumber={removePhoneNumber}
                key={phoneNum}
              />
            ))}
          </div>
          <div style={{ marginLeft: "40px" }}>
            <h3>Addresses</h3>
            {addresses?.map((address, index) => (
              <AddressForm
                address={address}
                index={index}
                updateAddress={updateAddress}
                removeAddress={removeAddress}
                key={`${address.houseNumber}${address.postalCode}`}
              />
            ))}
            <TextButton onClick={() => addAddress()}>+</TextButton>
          </div>
        </FormColumns>
        <Button type="submit">Save customer</Button>
      </form>
    </Container>
  );
};
export default CustomerForm;

const Container = styled.div`
  height: 80%;
`;

const FormColumns = styled.div`
  display: flex;
`;

export const FormInput = styled.input`
  padding: 10px;
  width: 10vw;
  min-width: 100px;
`;

const Label = styled.label`
  min-width: 30px;
`;

const Button = styled.button`
  margin: 30px 0 30px 0;
  min-width: 150px;
  height: 40px;
`;
