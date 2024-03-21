import { useEffect, useState } from "react";
import styled from "styled-components";

import { deleteCustomer, getCustomers, updateCustomer } from "api/customer";
import CustomerListItem from "component/customer/CustomerListItem";
import SideNav from "component/input/SideNav";
import { ScreenContainer } from "const/styles";
import { Customer } from "model/Customer";

const CustomerTable = () => {
  const [loading, setLoading] = useState(true);
  const [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    const fetched = await getCustomers();
    console.log(fetched);
    if (fetched) {
      setCustomers(fetched);
    } //TODO: else error handling
    setLoading(false);
  };

  const handleCustomerUpdate = async (customer: Customer) => {
    setLoading(true);
    const updatedCustomer = await updateCustomer(customer);
    if (updatedCustomer) {
      const prevCustomers = [...customers];
      const indexInList = prevCustomers?.findIndex(
        (c) => c?.id === updatedCustomer?.id
      );
      prevCustomers?.splice(indexInList, 1, updatedCustomer);
      setCustomers(prevCustomers);
      alert("Updated customer succesfully!");
    } else {
      alert("Customer update was not succesful!");
    }
    setLoading(false);
  };

  const handleCustomerDelete = async (id: number) => {
    setLoading(true);
    const updatedCustomer = await deleteCustomer(id);
    if (updatedCustomer) {
      const prevCustomers = [...customers];
      const indexInList = prevCustomers?.findIndex(
        (c) => c?.id === updatedCustomer?.id
      );
      prevCustomers?.splice(indexInList, 1, updatedCustomer);
      setCustomers(prevCustomers);
      alert("Deleted customer succesfully!");
    } else {
      alert("Customer delete was not succesful!");
    }
    setLoading(false);
  };

  const CustomersTable = () => (
    <div>
      <Header>
        <HeaderItem>Name</HeaderItem>
        <HeaderItem>email</HeaderItem>
        <HeaderItem>Birthdate</HeaderItem>
        <HeaderItem>Birthplace</HeaderItem>
        <HeaderItem>Mother's birthname</HeaderItem>
        <HeaderItem>Taj number</HeaderItem>
        <HeaderItem>Tax number</HeaderItem>
      </Header>
      {customers &&
        customers?.map((c) => (
          <CustomerListItem
            customer={c}
            updateCustomer={handleCustomerUpdate}
            deleteCustomer={handleCustomerDelete}
            key={c.id}
          />
        ))}
    </div>
  );

  return (
    <ScreenContainer>
      <SideNav />
      <Container>
        {loading ? <h2>Loading...</h2> : <CustomersTable />}
      </Container>
    </ScreenContainer>
  );
};
export default CustomerTable;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Header = styled.div`
  display: flex;
  flex-wrap: none;
`;

const HeaderItem = styled.p`
  width: 148px;
`;
