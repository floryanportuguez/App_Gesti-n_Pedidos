"use client"
import React, {useState} from "react"
import Image from "next/image";
import "./Login.css"
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/FirebaseConfig";

export default function Login() {

  const [Correo, setCorreo] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleLogin() {
    try {
      const response = await fetch('/api/ConsultUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: Correo, password: Password }),
      });

      if (response.ok) {
        const data = await response.json();
        router.push("/Inicio");
      } else {
        const errorData = await response.json();
        setError(errorData.error);
      }
    } catch (error) {
      setError("Error al iniciar sesión. Verifique sus credenciales.");
    }
  }

    return (
<div className="Container">
      <div className="DivLogin">
        {/* <Image width={330} height={300} src="/LogoColorFondo.png" alt="logo" className="logo"/> */}
        <Image width={330} height={300} src="/NomEJPFondo.png" alt="logo" className="logo"/>
        <div className="FormDiv">
        <h2>Iniciar Sesión</h2>
        <div className="DivInput">
        <label className="LbInput">Usuario</label>
        <input
          type="email"
          placeholder="userimabi@Imabi.cr"
          className="inputLog"
          value={Correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        <label className="LbInput">Contraseña</label>
        <input
          type="password"
          placeholder="**********"
          className="inputLog"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <div className="rememberMe">
          <input type="checkbox" id="remember" />
          <label>Recordar usuario</label>
        </div>
        </div>
        <button className="BtnIngresar" onClick={handleLogin}>Ingresar</button>
        <a href="#" className="Fpassword">¿He olvidado la contraseña?</a>
        </div>
      </div>
    </div>
    )
}