import React from 'react';

//Menu lateral, superior y contenido de inicio
import MenuSuperior from "./componentes/menu/MenuBlancoSuperior.js"
import MenuLateral from "./componentes/menu/MenuLateral.js"
import Inicio from "./componentes/general/ContenidoInicio.js"

//administrar usuario
import EditarUsuario from './componentes/editar/editarUsuario.js'
import AsignarActividadUsuario from './componentes/asignar/AsignarActividadUsuario.js'

//administrar modulo
import AdminModulo from './componentes/administrar/ContenidoAdminModulo.js'
import EditarModulo from './componentes/editar/editarModulo.js';
import AsignarActividadModulo from './componentes/asignar/asignarActividadModulo.js';

import RedireccionarUsuario from './componentes/redirecciones/RedireccionarUsuario.js';
import ContenidoReportes from './componentes/reportes/ContenidoReportes.js';


//estilos
import './css/business-casual.css'
import './css/estilos.css'
import './css/bootstrap.min.css'
import './css/menu.css'

import { BrowserRouter as Router, Route } from "react-router-dom"

class App extends React.Component{


	state={
		usuarioModificar: ''
	}

	asignarUsuario=(usuario)=>{
		console.log(usuario);
		this.setState({
			usuarioModificar:usuario
		})
	}

render(){
  return (
  	<Router>
    {/*Menus*/}
  	<MenuLateral/>
    <MenuSuperior/>

	{/*Ruta para inicio*/}
	<Route exact path="/" render={() => {
  	    return <div id="wrapper">
        <Inicio/>
    </div>
  	}}>
  	</Route>

	{/*Ruta para administrar usuario*/}
  	<Route exact path="/AdminUsuario" render={() => {
  	    return <div id="wrapper">
		<RedireccionarUsuario funcionModificar={this.asignarUsuario}/>
    </div>
  	}}>
  	</Route>
	
	{/*Ruta para editar usuario*/}
  	<Route exact path="/editarUsuario" render={() => {
  	    return <div id="wrapper">
  	    <EditarUsuario cedula={this.state.usuarioModificar}/>
    </div>
  	}}>
  	</Route>


	{/*Ruta para asignar actividad a usuario */}
	<Route exact path="/asignarActividadUsuario" render={() => {
	 	return <div id="wrapper">
	 		<AsignarActividadUsuario/>
		</div>
 	}}>
 	</Route>


	{/* Ruta para administrar Modulo */}
	 <Route exact path="/AdminModulo" render={() => {
  	    return <div id="wrapper">
        <AdminModulo/>
    </div>
  	}}>
  	</Route>
	  
	{/* Ruta para editarModulo */}
  	<Route exact path="/editarModulo" render={() => {
  	    return <div id="wrapper">
  	    <EditarModulo/>
    </div>
  	}}>
  	</Route>

	 {/*Ruta para asignar actividad a Modulo */}
	 <Route exact path="/asignarActividadModulo" render={() => {
  	    return <div id="wrapper">
  	    <AsignarActividadModulo/>
    </div>
  	}}>
  	</Route>

	{/*Ruta para reportes */}
	<Route exact path="/reportes" render={() => {
  	    return <div id="wrapper">
  	    <ContenidoReportes/>
    </div>
  	}}>
  	</Route>

	
  	</Router>
    
    
  );
}
}

export default App;
