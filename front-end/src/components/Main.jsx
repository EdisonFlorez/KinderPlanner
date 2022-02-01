import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Slider } from "./Slider";

const StyledMain = styled.main`
  display: flexbox;
  flex-direction: row;
  .button-box{
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  button{
    margin: 1rem;
    width: 10vw;
    height: 3vh;
    background:#916BBF;
    border: none;
    border-radius: 3vmax;
    color: white;
    
  }
`;

export function Main() {
  return (
    <StyledMain>
      <Slider/>
      <div className="button-box">
        <Link to="/sign-up">
          <button>Crea tu cuenta</button>
        </Link>
        <Link to="/login">
          <button>Inicia sesión</button>
        </Link>
      </div>
    </StyledMain>
  );
}
