import React, { useState } from "react";
import { Avatar } from "./Avatar";
import { Dropdow } from "./Dropdown.container";
import styled from "styled-components";

const StyledMenu = styled.div`
button{
  display: inline-block;
  position: absolute;
  right: 4.5vw;
  top: 2.5vh;
  background:none;
  border: none;
}

` 
export function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <StyledMenu>
      <Avatar className="avatar"/>
      <button onClick={() => setIsOpen(!isOpen)}>▼</button>
      {isOpen && <Dropdow className="dropdown-container"/>}
    </StyledMenu>
  );
}
