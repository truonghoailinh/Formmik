import './App.css';
import styled from "styled-components";
import RootComponent from "./components/RootComponent"

const Container = styled.div`
  display: block;
  height: 100%;
`;

function App() {
  return (
    <Container>
      <h1>Linh Form Nè</h1>
      <ul>
        <li>
          <a href="/signin"> Signin </a>
        </li>
        <li>
          <a href="/signup"> Signup </a>
        </li>
        <li>
          <a href="/create_invoice"> Create Invoice </a>
        </li>
      </ul>
      <RootComponent/>
    </Container>
  );
}

export default App;
