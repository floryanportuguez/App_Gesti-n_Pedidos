'use client'
import React, { useState } from 'react';
import './NuevoClient.css';

export default function RegistroCliente() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [tipo, setTipo] = useState('');
  const [mensaje, setMensaje] = useState('');

  async function handleSubmit(e: React.FormEvent){
    e.preventDefault();
    
    const response = await fetch('/api/ConsulClient', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nombre, correo, telefono, empresa, tipo }),
    });

    if (response.ok) {
      setMensaje('Cliente registrado con éxito');
      alert(mensaje);

      setNombre('');
      setCorreo('');
      setTelefono('');
      setEmpresa('');
      setTipo('');
    } else {
      setMensaje('Error al registrar el cliente');
    }
  };
  return (
    <div className="registro-cliente-container">
      <h2>Formulario Registro Cliente</h2>
      <form onSubmit={handleSubmit} className="registro-form">
        <div className='DivInput'>
          <label>
            Nombre
          </label>
          <input
            type="text"
            placeholder="Su nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className='DivInput'>
          <label>
          Correo 
          </label>
          <input
            type="text"
            placeholder="Correo@correo.com"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>
        <div className='DivInput'>
          <label>
            Telefono
          </label>
          <input
            type="tel"
            placeholder="Su telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>

        <div className='DivInput'>
          <label>
            Empresa
          </label>
          <input
            type="text"
            placeholder="Nombre de la empresa"
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
          />
        </div>
        <div className='DivInput'>
          <label>
            Tipo
          </label>
          <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option disabled value="">--Seleccionar--</option>
            <option value="tipo1">Tipo 1</option>
            <option value="tipo2">Tipo 2</option>
          </select>
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};
