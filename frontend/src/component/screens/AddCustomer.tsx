import SideNav from "component/input/SideNav";
import CustomerForm from "component/input/CustomerForm";
import { ScreenContainer } from "const/styles";

const AddCustomer = () => {
  return (
    <ScreenContainer>
      <SideNav />
      <CustomerForm />
    </ScreenContainer>
  );
};
export default AddCustomer;
