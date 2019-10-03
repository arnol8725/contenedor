import React from 'react';
import Busqueda from '../component/busqueda';




const letcategorias = [

    { id: 1, nombre: 'Laptops', departamento: 'Electrónica' },

    { id: 2, nombre: 'Pantallas', departamento: 'Electrónica' },

    { id: 3, nombre: 'Zapatillas', departamento: 'Mujer' },

    { id: 4, nombre: 'Peluches', departamento: 'Niño' },

    { id: 5, nombre: 'Carriolas', departamento: 'Niño' },

    { id: 6, nombre: 'Sillas', departamento: 'Hogar' }

];

class Contenedor extends React.Component {


    render() {

        return ( 
        <div className="">
            <div className="col-6 center mx-auto " >
            <h1>Registo consulta de los select </h1>
            <Busqueda detalle={letcategorias}/>
            
            </div>
        </div>

        );
    }
}

export default Contenedor;