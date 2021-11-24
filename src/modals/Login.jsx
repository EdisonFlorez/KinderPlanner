import React from "react";
import { ReactComponent as Logo } from "../assets/Logo.svg";
import { Button } from "../components/Button";
import {Link} from "react-router-dom";
export function Login() {
  return (
    <div>
      <Logo />
      <form>
        <input type="email" name="mail" placeholder="Correo: " required />
        <input
          type="password"
          name="password"
          placeholder="Contraseña: "
          required
        />
        <Button type="submit" value="Inicia sesión" />
        <Link to="/sign-up">Crea tu cuenta</Link>
      </form>
    </div>
  );
}
