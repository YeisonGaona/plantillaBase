import React from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import {NotificationContainer, NotificationManager} from 'react-notifications';
import '../../../node_modules/react-confirm-alert/src/react-confirm-alert.css'
import '../../../node_modules/react-notifications/lib/notifications.css' 

//estilos
import '../../css/business-casual.css'
import '../../css/estilos.css'
import '../../css/bootstrap.min.css'
import '../../css/menu.css'

class Contenido extends React.Component {
	eventoBorrado = (evento) => {
		this.props.funcionModificar(this.props.usuario.cedula);
		if(evento.target.value==='1'){
			this.props.cambiar('e')
		}
		if(evento.target.value==='2'){
			confirmAlert({
				title: '',
				message: '¿Esta seguro?',
				buttons: [
				  {
					label: 'Si',
					onClick: () => NotificationManager.success('Operacion realizada con exito')
				  },
				  {
					label: 'No',
					onClick: () =>NotificationManager.info('Se cancelo la operacion')
				  }
				]
			  });
		}

		if(evento.target.value==='3'){
			this.props.cambiar('a')
		}

	}

	estilocompletado() {
		if (this.props.usuario.estado === 'Suspendido') {
			return {
				textShadow: "none!important",
				fontSize: "14px",
				fontFamily: "Open Sans,sans-serif",
				fontWeight: "300",
				padding: "3px 6px",
				color: "#fff",
				background: "#ED6B75"

			}
		} else {
			return {
				textShadow: "none!important",
				fontSize: "14px",
				fontFamily: "Open Sans,sans-serif",
				fontWeight: "300",
				padding: "3px 6px",
				color: "#fff",
				background: "#408725"
			}
		}

	}



	render() {
		const { nombre, correo, cedula, estado } = this.props.usuario;
		return (

			<tr key={cedula}>
				<td>{nombre}</td>
				<td>{cedula}</td>
				<td>{correo}</td>
				<td><span className="label label-sm" style={this.estilocompletado()}>{estado}</span></td>
				<td>
					<select class="dropdown-toggle btn-sm  btn-dark" id="selectDDL" onChange={this.eventoBorrado}  title="ACCIONES">
						<option value="0">Seleccione...</option>
						<option value="1">Editar informacion</option>
						<option value="2">Suspender/Activar</option>
						<option value="3">Asignar una actividad</option>
					</select>
				</td>
				<NotificationContainer/>
			</tr>



		)
	}
}



export default Contenido;