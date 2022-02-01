import React, { useState } from "react";
import { Avatar } from "./Avatar";
import { Dropdow } from "./Dropdown.container";
import styled from "styled-components";

const StyledMenu = styled.div`
  .menu-container {
    position: absolute;
    right: 4.5vw;
    top: .5vh;
    
  }
  button {
    display: inline-block;
    background: none;
    border: none;
    position: relative;
    bottom: 18px;
  }
  .avatar {
    width: 50px;
    height: 50px;
  }
`;
export function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledMenu>
      <div className="menu-container">
        <img
          className="avatar"
          src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
          alt="{props.user.name}"
        />
        <button onClick={() => setIsOpen(!isOpen)}>▼</button>
      </div>
      {isOpen && <Dropdow className="dropdown-container" />}
    </StyledMenu>
  );
}
