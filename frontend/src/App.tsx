import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import { routes } from "const/navigation";
import styled from "styled-components";

const router = createBrowserRouter(routes);

function App() {
  return (
    <AppContainer className="App">
      <RouterProvider router={router} />
    </AppContainer>
  );
}
export default App;

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
`;
