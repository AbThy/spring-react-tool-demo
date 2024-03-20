import { FormRow, TextButton } from "const/styles";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import { FormInput } from "./CustomerForm";

const CustomPhoneInput = ({
  phoneNumbers,
  phoneNum,
  index,
  setPhoneNumber,
  addPhoneNumber,
  removePhoneNumber,
}: {
  phoneNumbers: string[];
  phoneNum: string;
  index: number;
  setPhoneNumber: (number: string, index: number) => void;
  addPhoneNumber: () => void;
  removePhoneNumber: (number: string) => void;
}) => {
  const [internalNumber, setInternalNumber] = useState(phoneNum);

  return (
    <FormRow key={phoneNum}>
      <PhoneInput
        placeholder="Enter phone number"
        value={internalNumber}
        onChange={(e) => setInternalNumber(e ?? "")}
        onBlur={() => setPhoneNumber(internalNumber, index)}
        inputComponent={FormInput}
      />
      {index === phoneNumbers?.length - 1 ? (
        <TextButton onClick={() => addPhoneNumber()}>+</TextButton>
      ) : (
        <TextButton onClick={() => removePhoneNumber(phoneNum)}>-</TextButton>
      )}
    </FormRow>
  );
};
export default CustomPhoneInput;
