import { render, screen } from "@testing-library/react";
import CustomerListItem from "component/customer/CustomerListItem";
import { testCustomer } from "__testData/customer";

test("Test of rendering a customer list item", () => {
  render(
    <CustomerListItem
      customer={testCustomer}
      updateCustomer={() => {}}
      deleteCustomer={() => {}}
    />
  );

  expect(screen.getByDisplayValue("test name")).toBeInTheDocument();
});
