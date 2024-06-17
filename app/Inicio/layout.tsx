import Navbar from "../components/Navbar";
import Image from "next/image";
import "./Inicio.css"

export default function InicioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Navbar/>
    <div className="ContainerMain">
    <header>
        <div>
          <h1>Panel Administrador</h1>
        </div>
          <div className="user-profile">
            <Image src="https://res.cloudinary.com/dmsoej29n/image/upload/v1718320546/Icons/bx-user-circle_dxjicn.svg" alt="user" width={40} height={40} />
          </div>
      </header>
    {children}
    </div>
    </>
  );
}