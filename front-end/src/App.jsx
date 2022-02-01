import { Route, Routes } from "react-router-dom";
import { Table } from "./components/Table";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Modal } from "./components/Modal";
import { Login } from "./modals/Login"
import { SignUp } from "./modals/SignUp";
import styled from "styled-components";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100vh;
  scroll-behavior: none;
`
export function App() {
  return (
    <StyledApp>
      <Header />
      
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/admin" element={<Table />} />
        <Route
          path="sign-up"
          element={
            <Modal>
              <SignUp />
            </Modal>
          }
        />
        <Route
          path="login"
          element={
            <Modal>
              <Login />
            </Modal>
          }
        />
      </Routes>
      <Footer className="footer" />
    </StyledApp>
  );
}
