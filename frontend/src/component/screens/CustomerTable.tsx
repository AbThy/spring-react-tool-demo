import styled from "styled-components";
import SideNav from "component/input/SideNav";

const CustomerTable = () => {
  return (
    <ScreenContainer>
      <SideNav />
    </ScreenContainer>
  );
};
export default CustomerTable;

const ScreenContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
`;
