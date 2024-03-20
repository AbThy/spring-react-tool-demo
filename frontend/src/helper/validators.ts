const emailRegex: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const phoneNumberRegex: RegExp =
  /^[\\+]?[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{4,6}$/;

const isEmailValid = (email: string) => emailRegex.test(email);

const isPhoneNumberValid = (number: string) => phoneNumberRegex.test(number);

export { isEmailValid, isPhoneNumberValid };
