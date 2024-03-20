import { FormRow } from "const/styles";
import { Address } from "model/Customer";
import { useState } from "react";
import styled from "styled-components";

const AddressForm = ({
  address,
  index,
  updateAddress,
  removeAddress,
}: {
  address: Address;
  index: number;
  updateAddress: (index: number, address: Address) => void;
  removeAddress: (index: number) => void;
}) => {
  const [internalAddress, setInternalAddress] = useState<Address>(address);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInternalAddress((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    updateAddress(index, internalAddress);
  };

  return (
    <form style={{ border: "1px solid black", padding: "10px" }}>
      <FormRow>
        <label style={{ marginRight: "10px" }}>Postal code</label>
        <input
          type="number"
          id="postalCode"
          name="postalCode"
          value={
            internalAddress.postalCode === 0 ? "" : internalAddress.postalCode
          }
          onChange={handleChange}
          placeholder="1111"
          required
        />
      </FormRow>
      <FormRow>
        <label style={{ marginRight: "10px" }}>City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={internalAddress.city}
          onChange={handleChange}
          placeholder="Budapest"
          required
        />
      </FormRow>
      <FormRow>
        <label style={{ marginRight: "10px" }}>Street</label>
        <input
          type="text"
          id="street"
          name="street"
          value={internalAddress.street}
          onChange={handleChange}
          placeholder="Bartók Béla út"
          required
        />
      </FormRow>
      <FormRow>
        <label style={{ marginRight: "10px" }}>House number</label>
        <input
          type="number"
          id="houseNumber"
          name="houseNumber"
          value={
            internalAddress.houseNumber === 0 ? "" : internalAddress.houseNumber
          }
          onChange={handleChange}
          placeholder="54"
          required
        />
      </FormRow>
      <FormRow>
        <label style={{ marginRight: "10px" }}>Other information</label>
        <input
          type="text"
          id="other"
          name="other"
          value={internalAddress.other}
          onChange={handleChange}
          placeholder="Apartment b"
        />
      </FormRow>
      <ButtonControls>
        <button onClick={() => handleSubmit()}>Save address</button>
        <button onClick={() => removeAddress(index)}>Remove address</button>
      </ButtonControls>
    </form>
  );
};
export default AddressForm;

const ButtonControls = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
