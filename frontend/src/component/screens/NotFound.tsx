import styled from "styled-components";
import SideNav from "component/input/SideNav";

const NotFound = () => {
  return (
    <ScreenContainer>
      <SideNav />
    </ScreenContainer>
  );
};
export default NotFound;

const ScreenContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
`;
