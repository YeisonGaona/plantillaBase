import React from 'react';

//Menu lateral, superior y contenido de inicio
import MenuSuperior from "./componentes/menu/MenuBlancoSuperior.js"
import MenuLateral from "./componentes/menu/MenuLateral.js"
import Inicio from "./componentes/general/ContenidoInicio.js"

//estilos
import './css/business-casual.css'
import './css/estilos.css'
import './css/bootstrap.min.css'
import './css/menu.css'

import { BrowserRouter as Router, Route } from "react-router-dom"

class App extends React.Component {
	render() {
		return (
			<Router>
				{/*Menus*/}
				<MenuLateral />
				<MenuSuperior/>
				{/*Ruta para inicio*/}
				<Route exact path="/" render={() => {
					return <div id="wrapper">
						<Inicio />
					</div>
				}}>
				</Route>
			</Router>


		);
	}
}

export default App;
