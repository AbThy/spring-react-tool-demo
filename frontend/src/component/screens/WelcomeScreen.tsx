import styled from "styled-components";
import SideNav from "component/input/SideNav";

const WelcomeScreen = () => {
  return (
    <ScreenContainer>
      <SideNav />
    </ScreenContainer>
  );
};
export default WelcomeScreen;

const ScreenContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
`;
