import React from "react";
import { Menu } from "./Menu";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #ff7878;
  align-items: center;
  position: relative;
  display: flex;
  width: 100%;
  height: 60px;
  .logo {
    position: absolute;
    left: 10vh;
  }
`;

export function Header() {
  return (
    <StyledHeader>
      <Link className="logo" to="/">
        <Logo />
      </Link>
      <Avatar className="avatar" />
      <Menu />
    </StyledHeader>
  );
}
