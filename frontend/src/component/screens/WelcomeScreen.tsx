import styled from "styled-components";
import SideNav from "component/input/SideNav";
import { ScreenContainer } from "const/styles";

const WelcomeScreen = () => {
  return (
    <ScreenContainer>
      <SideNav />
      <Container>
        <h1>Welcome to the demo app!</h1>
        <h3>Please use the sidebar to navigate</h3>
      </Container>
    </ScreenContainer>
  );
};
export default WelcomeScreen;

const Container = styled.div`
  height: 100vh;
  text-align: left;
`;
