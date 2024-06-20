"use client"
import React, { useState, useEffect } from 'react';
import './Cliente.css';
import { useRouter } from 'next/navigation';

type Cliente = {
  id: string;
  nombre: string;
  correo: string;
  telefono: string;
  empresa: string;
  tipo: string;
}

export default function Clientes() {

  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [error, setError] = useState('');
  const [filteredClientes, setFilteredClientes] = useState<Cliente[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const router = useRouter();

  function RouteAgregar() {

    router.push("/Inicio/Clientes/RegistrarClient");
  };

  useEffect(() => {
    async function fetchClientes() {
      try {
        const response = await fetch('/api/ConsulClient');
        if (response.ok) {
          const data = await response.json();
          setClientes(data);
        } else {
          setError('Error al obtener los clientes');
        }
      } catch (error) {
        setError('Error al obtener los clientes');
      }
    };

    fetchClientes();

  }, []);

  useEffect(() => {
    const lowercasedFilter = searchTerm.toLowerCase();
    const filteredData = clientes.filter(cliente =>
      cliente.nombre.toLowerCase().startsWith(lowercasedFilter)
    );
    setFilteredClientes(filteredData);
  }, [searchTerm, clientes]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch('/api/ConsulClient', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        setClientes(clientes.filter(cliente => cliente.id !== id));
      } else {
        setError('Error al eliminar el cliente');
      }
    } catch (error) {
      setError('Error al eliminar el cliente');
    }

  };


  function handleEdit(cliente: Cliente) {    
    const url = `/Inicio/Clientes/${encodeURIComponent(cliente.nombre)}`;
    localStorage.setItem('ID', cliente.id);
    router.push(url);
  };

  return (
    <div className="clientes-container">
      <h2>Clientes</h2>
      <div className="search-add-container">
        <div className="search-bar">
          <input type="text" placeholder="Nombre" value={searchTerm} onChange={handleSearchChange}
          />
          <div className="search-button">
            <img src='https://res.cloudinary.com/dmsoej29n/image/upload/v1718320547/Icons/bx-search_hxntdv.svg' alt='Buscar'></img>
          </div>
        </div>
        <button onClick={RouteAgregar} className="add-button">
          + Agregar
        </button>
      </div>
      <div className='DivTable'>
        <table className="clientes-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Contacto</th>
              <th>Empresa</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredClientes.map((cliente, index) => (
              <tr key={cliente.id}>
                <td>{index + 1}</td>
                <td>{cliente.nombre}</td>
                <td>{cliente.correo}</td>
                <td>{cliente.telefono}</td>
                <td>{cliente.empresa}</td>
                <td id='td_Btns'>
                  <button className="edit-button" onClick={() => handleEdit(cliente)}>
                    <img src='https://res.cloudinary.com/dmsoej29n/image/upload/v1718320548/Icons/bxs-pencil_o6esk6.svg' alt='icono'></img>
                  </button>
                  <button className="delete-button" onClick={() => handleDelete(cliente.id)}>
                    <img src='https://res.cloudinary.com/dmsoej29n/image/upload/v1718320545/Icons/bxs-x-circle_pq76jy.svg' alt='icono'></img>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
