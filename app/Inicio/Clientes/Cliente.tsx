import React from 'react';
import './Cliente.css';
import Image from 'next/image';

export default function Clientes() {
  return (
    <div className="clientes-container">
      <h2>Clientes</h2>
      <div className="search-add-container">
        <div className="search-bar">
          <input type="text" placeholder="Nombre" />
          <button className="search-button">
            <img src='https://res.cloudinary.com/dmsoej29n/image/upload/v1718320547/Icons/bx-search_hxntdv.svg' alt='Buscar'></img>
          </button>
        </div>
        <button className="add-button">
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
          {/* Aquí puedes mapear tus datos */}
          <tr>
            <td>1</td>
            <td>Juan Pérez</td>
            <td>juan.perez@example.com</td>
            <td>123456789</td>
            <td>Empresa S.A.</td>
            <td id='td_Btns'>
              <button className="edit-button">
                <img src='https://res.cloudinary.com/dmsoej29n/image/upload/v1718320548/Icons/bxs-pencil_o6esk6.svg' alt='icono'></img>
              </button>
              <button className="delete-button">
                <img src='https://res.cloudinary.com/dmsoej29n/image/upload/v1718320545/Icons/bxs-x-circle_pq76jy.svg' alt='icono'></img>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
};
