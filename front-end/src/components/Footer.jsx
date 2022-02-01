import React from "react";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledFooter = styled.footer`
  margin-top: 20vh;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  vertical-align: middle;
  background: #ff7878;
  position: absolute;
  bottom: 0;
  .container {
    display: flex;
    margin: auto;
    vertical-align: middle;
  }
  p {
    padding-top: 2px;
    display: inline-block;
    margin: 0;
  }
  .logo {
    width: fit-content;
    height: 22px;
    margin-left: 4px;
  }
`;

export function Footer() {
  return (
    <StyledFooter>
      <div className="container">
        <p>Copyright &copy; 2021 - </p>
        <Link className="logo" to="/">
          <Logo className="logo" />
        </Link>
      </div>
    </StyledFooter>
  );
}
