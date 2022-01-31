import React from "react";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";


const StyledFooter = styled.footer`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  background: #ff7878;
  position: fixed;
  bottom:0;
  .container {
    display: flex;
    margin: auto;
  }
  .logo {
    width: fit-content;
    height: 22px;
  }
`;

export function Footer() {
  return (
    <StyledFooter>
      <div className="container">
        <p>Copyright &copy; 2021 - </p>
        <Link to="/">
          <Logo className="logo" />
        </Link>
        
      </div>
    </StyledFooter>
  );
}
