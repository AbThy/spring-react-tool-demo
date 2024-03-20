import styled from "styled-components";
import SideNav from "component/input/SideNav";

const AddCustomer = () => {
  return (
    <ScreenContainer>
      <SideNav />
    </ScreenContainer>
  );
};
export default AddCustomer;

const ScreenContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
`;
