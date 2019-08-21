import React from 'react';

//Menu lateral, superior y contenido de inicio
import MenuSuperior from "./componentes/MenuBlancoSuperior.js"
import MenuLateral from "./componentes/MenuLateral.js"
import Inicio from "../src/general/Inicio.js"

//administrar usuario
import EditarUsuario from './editar/editarUsuario.js'
import AdminUsuario from '../src/administrar/AdminUsuario.js'

//administrar modulo
import AdminModulo from '../src/administrar/AdminModulo.js'
import EditarModulo from './editar/editarModulo.js';
import AsignarActividadModulo from './asignar/asignarActividadModulo.js';



//estilos
import './css/business-casual.css'
import './css/estilos.css'
import './css/bootstrap.min.css'
import './css/menu.css'

import { BrowserRouter as Router, Route } from "react-router-dom"

class App extends React.Component{


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
        <AdminUsuario/>
    </div>
  	}}>
  	</Route>
	
	{/*Ruta para editar usuario*/}
  	<Route exact path="/editarUsuario" render={() => {
  	    return <div id="wrapper">
  	    <EditarUsuario/>
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

	
  	</Router>
    
    
  );
}
}

export default App;
