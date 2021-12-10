import React from "react";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";


const StyledLogin = styled.div`
  
  img{
    width: 200px;
    justify-content: center;
  }

`;

const handleSubmit = (event)=>{
  event.preventDefault(); 
}
export function Login() {
  return (
    <StyledLogin>
      <Logo />
      <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="{props.user.name}" />
      <form onSubmit= {handleSubmit}>
        <input type="email" name="mail" placeholder="Correo: " required />
        <input
          type="password"
          name="password"
          placeholder="Contraseña: "
          required
        />
        <Button type="submit" value="Inicia sesión"/>
        <Link to="/sign-up">Crea tu cuenta</Link>
      </form>
    </StyledLogin>
  );
}
