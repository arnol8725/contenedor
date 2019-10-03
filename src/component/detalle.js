import React from 'react';

let lista = [];

class Detalle extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            detalle: this.props.lista,
            departamentos: this.props.dept,
            categoria: this.props.categorias

        };
       
    }

    
    
    render() {

        

        const categorias = this.state.detalle.filter(valor => valor.departamento == this.props.dept &&  valor.nombre == this.props.categorias  ).map((id, i) =>
     
        
        <tr>
            <td scope="row">{id.id}</td>
            <td>{id.nombre}</td>
            <td>{id.categoria}</td>
           
        </tr>

    );
        
        return ( 
           
  
        <div className="text-center">
            <h3>Detalle</h3>
            {this.props.dept}
            {this.state.departamento}
            {this.props.categorias}
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre </th>
                        <th scope="col">Detalle</th>
                        
                    </tr>
                </thead>
                <tbody>
                   {categorias}
                </tbody>
            </table>
        </div>
        
        );
    }
}

export default Detalle;