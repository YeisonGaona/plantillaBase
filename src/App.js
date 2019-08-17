import React from 'react';
import MenuSuperior from "./componentes/MenuBlancoSuperior.js"
import MenuLateral from "./componentes/MenuLateral.js"
import Contenido from './componentes/Contenido.js'
import Editar from './componentes/editarInformacion.js'
import Login from './componentes/Login.js'

import './css/business-casual.css'
import './css/estilos.css'
import './css/bootstrap.min.css'
import './css/menu.css'

import { BrowserRouter as Router, Route } from "react-router-dom"

class App extends React.Component{




render(){
  return (
  	<Router>
  	<MenuLateral/>
    <MenuSuperior/>
  	<Route exact path="/" render={() => {
  	    return <div id="wrapper">
        <Contenido/>
    </div>
  	}}>
  	</Route>

  	<Route exact path="/editar" render={() => {
  	    return <div id="wrapper">
  	    <Editar/>
    </div>

  	}}>
  	</Route>
	  <Route exact path="/login" render={() => {
  	    return <div id="wrapper">
        <Login/>
    </div>
  	}}>
  	</Route>
  	</Router>
    
    
  );
}
}

export default App;
