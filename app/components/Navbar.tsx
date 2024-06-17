"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import './Navbar.css';

export default function Navbar() {

    const sidebarRef = useRef(null);
    const btnRef = useRef(null);

    const toggleSidebar = () => {
        (sidebarRef.current as any).classList.toggle("active");
    }

    return (
        <nav>
            <div className="navbar" ref={sidebarRef}>
                <div className="logo_content">
                    <div className="logo">
                    <Image width={150} height={100} src='/LogoColor.png' alt=''/>
                    </div>
                    <img src='https://res.cloudinary.com/dmsoej29n/image/upload/v1718320544/Icons/bx-menu_gz7efr.svg' id='btnNav' ref={btnRef} onClick={toggleSidebar}/>
                </div>
                <ul className="nav">                   
                    <li className='Profile'>
                        <Link href="/Inicio" className='ayuda'>
                            <img  src="https://res.cloudinary.com/dmsoej29n/image/upload/v1718320558/Icons/bx-home-alt-2_wjsypr.svg" alt="" />
                            <span className="link_name">Inicio</span>
                        </Link>
                        <span className="tooltip">Inicio</span>
                    </li>

                    <li className='element'>
                        <Link href="/Inicio/Clientes" className='ayuda'>
                            <img src="https://res.cloudinary.com/dmsoej29n/image/upload/v1718320546/Icons/bx-user_csxkgy.svg" alt="" />
                            <span className="link_name">Clientes</span>
                        </Link>
                        <span className="tooltip">Clientes</span>
                    </li>

                    <li>
                        <a href="#" className='ayuda'>
                            <img src="https://res.cloudinary.com/dmsoej29n/image/upload/v1718346655/Icons/orden_vrfjtv.svg" alt="" />
                            <span className="link_name">Pedidos</span>
                        </a>
                        <span className="tooltip">Pedidos</span>
                    </li>
                    <li>
                        <a href="#" className='ayuda'>
                           <img src="https://res.cloudinary.com/dmsoej29n/image/upload/c_scale,w_292/v1718346655/Icons/portapapeles_gqphui.svg" alt="" />
                            <span className="link_name">Inventario</span>
                        </a>
                        <span className="tooltip">Inventario</span>
                    </li>
                    <li>
                        <a href="/" className='ayuda'>
                            <img src="https://res.cloudinary.com/dmsoej29n/image/upload/v1718346655/Icons/nota_wfkfsa.svg" alt="" />
                            <span className="link_name">Historial</span>
                        </a>
                        <span className="tooltip">Historial</span>
                    </li>

                </ul>
            </div>
        </nav>
    );
}
