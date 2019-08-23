import React from 'react';
import { Redirect } from 'react-router-dom'

import AdminUsuario from '../administrar/ContenidoAdminUsuario.js'

class MyComponent extends React.Component {

    state={
        editar: false,
        asignar:false
    }

    cambiar=(objeto)=>{
        if(objeto==='e'){
            this.setState({editar:true,asignar:false})
        }

        if(objeto==='a'){
            this.setState({editar:false,asignar:true})
        }
    }

    render() {
        if(this.state.editar){
            return <Redirect to='/editarUsuario' />;
        }

        if(this.state.asignar){
            return <Redirect to='/asignarActividadUsuario' />;
        }

        return <AdminUsuario funcionModificar={this.props.funcionModificar} cambiar={this.cambiar}/>
        
    }
}


export default MyComponent;