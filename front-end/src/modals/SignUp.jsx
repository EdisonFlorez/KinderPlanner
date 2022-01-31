import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import { Link } from "react-router-dom";

const handleSubmit = (event) => {
  event.preventDefault();
};
export function SignUp() {
  const [form, setForm] = useState({});
  // controla el objeto de estado, para no tener un montón de variables de estado.
  const handleChange = (event) =>
    setForm({ ...form, [event.target.name]: event.target.value });

  return (
    <>
      <Logo />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombres: "
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="surname"
          placeholder="Apellidos: "
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="identification"
          placeholder="Identificación: "
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="contact"
          placeholder="Contacto: "
          onChange={handleChange}
        />
        <input
          type="email"
          name="mail"
          placeholder="Correo: "
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="mail-conf"
          placeholder="Confirmar correo "
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña: "
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password-conf"
          placeholder="Confirmar contraseña "
          onChange={handleChange}
          required
        />
        <button>Crea tu cuenta</button> 
        <Link to="/login">Iniciar sesión</Link>
      </form>
    </>
  );
}
