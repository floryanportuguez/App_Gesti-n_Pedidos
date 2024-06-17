import React from "react";
import Image from "next/image";
import "./Inicio.css"

export default function Inicio() {
    return (
      <div className="ContainerIni">
        <div className="overview">
          <h2>Inicio</h2>
          <div className="stats">
            <div className="stat">
              <h3>25</h3>
              <p>Clientes</p>
            </div>
            <div className="stat">
              <h3>100</h3>
              <p>Pedidos</p>
            </div>
            <div className="stat">
              <h3>15</h3>
              <p>Productos</p>
            </div>
          </div>
        </div>
      </div>
    );
  }