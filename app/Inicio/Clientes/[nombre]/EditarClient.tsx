'use client'
import React, { useState, useEffect } from 'react';
import './EditarClient.css';

export default function EditarCliente() {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [tipo, setTipo] = useState('');
    const [mensaje, setMensaje] = useState('');

    useEffect(() => {

        const id = typeof window !== "undefined" ? localStorage.getItem('ID') : '';
        if (id) {
            fetchCliente(id);
        }
        
    }, []);

    async function fetchCliente(id: string) {
        try {
            const response = await fetch(`/api/ConsulClient?id=${id}`);
            if (response.ok) {
                const data = await response.json();
                setNombre(data.nombre);
                setCorreo(data.correo);
                setTelefono(data.telefono);
                setEmpresa(data.empresa);
                setTipo(data.tipo);
            } else {
                setMensaje('Error al obtener los datos del cliente');
            }
        } catch (error) {
            setMensaje('Error al obtener los datos del cliente');
        }
    };

    useEffect(() => {

       console.log(nombre)
        
    }, []);

    return (
        <div className="registro-cliente-container">
            <h2>Formulario Actualizar Cliente</h2>
            <form className="registro-form">
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
                <button type="submit">Guardar</button>
            </form>
        </div>
    );
};
