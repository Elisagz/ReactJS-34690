import React, { Component } from 'react';

class CicloVidaCC extends Component {
    constructor(props){
        super(props)
        console.log("constructor")
        
        this.state = {
            nombre : 'Pedro'
        }

    }

    componentDidMount(){
        console.log("El componente se acaba de montar")
        // this.setState({nombre:'Mateo'})
    }

    componentDidUpdate(){
        console.log("el componente se actualizo")
    }


    render() {
        const nombre = this.state.nombre
        return (
            <div>
                Soy un componente de clase con ciclos de vida, nombre: {nombre}
            </div>
        );
    }
}

export default CicloVidaCC;