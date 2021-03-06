import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLogin = styled.div`
display: flex;
flex-direction: column;
align-items:center;
  img {
    width: 200px;
    justify-content: center;
  }
  form{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const handleSubmit = (event) => {
  event.preventDefault();

};
export function Login() {
  const [form, setForm] = useState({});
  const handleChange = (event) =>
    setForm({ ...form, [event.target.name]: event.target.value });

  return (
    <StyledLogin>
      <Logo />
      <img
        src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
        alt="{props.user.name}"
      />
      <form onSubmit={handleSubmit}>
        <input type="email" name="mail" placeholder="Correo: " onChange={handleChange} required />
        <input
          type="password"
          name="password"
          placeholder="Contraseña: "
          onChange={handleChange}
          required
        />
        <button>Inicia sesión</button>
        <Link to="/sign-up">Crea tu cuenta</Link>
      </form>
    </StyledLogin>
  );
}
