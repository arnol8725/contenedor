import React from 'react';
import Detalle from '../component/detalle';
let lista = [];

class Busqueda extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            detalle: this.props.detalle,

            departamento: '',
            categoria: ''

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeCate = this.handleChangeCate.bind(this);
    }

    handleChange(event) {
        this.setState({departamento: event.target.value});
      }
      handleChangeCate(event) {
         // alert(event.target.value);
        this.setState({categoria: event.target.value});
      }
    render() {
        let salida = [];
        const departamento = this.state.detalle.map((id, i) =>
        salida =
        <option key = { id.departamento } > { id.departamento } </option>

    );

    const categoria = this.state.detalle.filter(valor => valor.departamento == this.state.departamento).map((id, i) =>

        <option key = { i } > { id.nombre } </option>

    );

        return ( 
        <div className="text-center">
            <h1>Busqueda</h1>
            <form >
                <div className="col-6">
                <label>Departamento</label>
                    <div class="input-group mb-3">
                    
                        <select className="custom-select" onChange={this.handleChange} value = { this.state.departamento }>
                        { departamento } 

                        </select>
                        {this.state.departamento}
                        {this.state.categoria}
                    </div>
                </div>
                <div className="col-6">
                <label>Categoria</label>
                    <div class="input-group mb-3">
                        <select className="custom-select" onChange={this.handleChangeCate} value = { this.state.categoria }>
                        { categoria } 

                        </select>
                    </div>
                    </div>
            </form>
           
            <Detalle dept={this.state.departamento} categorias={this.state.categoria} lista={this.state.detalle} />
            {this.state.departamento}
                        {this.state.categoria}
        </div>
        
        );
    }
}

export default Busqueda;