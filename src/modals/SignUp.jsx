import React from "react";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import {Button} from "../components/Button";
import {Link} from "react-router-dom"

export function SignUp() {
  return (
    <div>
      <Logo />
      <form>
        <input type="text" name="name" placeholder="Nombres: " required />
        <input type="text" name="surname" placeholder="Apellidos: " required />
        <input type="text" name="id" placeholder="Identificación: " required />
        <input type="number" name="contact" placeholder="Contacto: " />
        <input type="email" name="mail" placeholder="Correo: " required />
        <input
          type="email"
          name="mail-conf"
          placeholder="Confirmar correo "
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña: "
          required
        />
        <input
          type="password"
          name="password-conf"
          placeholder="Confirmar contraseña "
          required
        />
        <Button type="submit" value="Crea tu cuenta" />
        <Link to="/login">Iniciar sesión</Link>
      </form>
    </div>
  );
}
