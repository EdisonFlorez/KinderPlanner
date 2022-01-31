import React from "react";
import Image from "../assets/KinderArt.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledMain = styled.main`
  display: flexbox;
  flex-direction: row;
  .slider {
    width: 80vw;
    height: 80vh;
  }
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
      <img className="slider" src={Image} alt="Arte realizada con niños" />
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
