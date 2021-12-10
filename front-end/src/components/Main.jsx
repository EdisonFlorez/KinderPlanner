import React, {useState} from "react";
import { Button } from "./Button";
import Image from "../assets/KinderArt.png";
import styled from "styled-components";
import { Link, Route, Routes } from "react-router-dom";
import { Modal } from "../components/Modal";
import { Login } from "../modals/Login";
import { SignUp } from "../modals/SignUp";
const StyledMain = styled.main`
  .slider {
    width: 80vw;
    height: 80vh;
  }
`;

export function Main() {
  const [visible, setVisible] = useState(true)
  
  return (
    <StyledMain>
      <img className="slider" src={Image} alt="Arte realizada con niños" />
      <Link to="/sign-up">
        <Button type="button" value="Crea tu cuenta" />
      </Link>
      <Link to="/login">
        <Button type="button" value="Inicia sesión" />
      </Link>

      <Routes>
        <Route
          path="sign-up"
          element={
            <Modal visible={visible} setVisible={setVisible} >
              <SignUp />
            </Modal>
          }
        />
        <Route
          path="login"
          element={
            <Modal visible={visible} setVisible={setVisible}>
              <Login />
            </Modal>
          }
        />
      </Routes>
    </StyledMain>
  );
}
