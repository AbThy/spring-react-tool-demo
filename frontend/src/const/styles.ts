import styled from "styled-components";

export const ScreenContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
`;

export const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20vw;
  padding: 1vh 0;
  min-width: 300px;
`;

export const TextButton = styled.p`
  margin: 0;
  padding: 0;
  font-size: 15px;
  padding: 5px;
  margin: 0 42% 0 20px;

  &:hover {
    cursor: pointer;
    transform: scale(1.5);
  }
`;
