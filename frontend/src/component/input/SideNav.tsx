import { AppScreen } from "model/Navigation";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const SideNav = () => {
  const navigate = useNavigate();

  const navigateToScreen = (root: AppScreen) => navigate(root);

  const NavButton = ({ title, root }: { title: string; root: AppScreen }) => {
    return (
      <ButtonContainer onClick={() => navigateToScreen(root)}>
        <p>{title}</p>
      </ButtonContainer>
    );
  };

  return (
    <Container>
      <NavButton title="Home" root="/" />
      <NavButton title="Add customer" root="/add-customer" />
      <NavButton title="Customers" root="/customer-table" />
    </Container>
  );
};
export default SideNav;

const Container = styled.div`
  height: 98vh;
  dislpay: flex;
  flex-direction: column;
  align-items: "center";
  width: 10vw;
  min-width: 100px;
  margin-right: 5vw;
  padding: 1vh 0;
  background-color: #fff6f6;
`;

const ButtonContainer = styled.div`
  padding: 1px;
  margin: 5px;
  background-color: #fff6f6;
  border-radius: 5px;

  &:hover {
    background-color: #c0c4fa;
    cursor: pointer;
  }
`;
