import React from 'react';

//estilos
import '../css/business-casual.css'
import '../css/estilos.css'
import '../css/bootstrap.min.css'
import '../css/menu.css'


class Contenido extends React.Component {
	eventoBorrado = (evento) => {
        evento.preventDefault();
        console.log(this.props.usuario.cedula)
    }

     estilocompletado() {
     	if(this.props.usuario.estado==='Suspendido'){
     		return {
     			textShadow: "none!important",
    			fontSize: "14px",
    			fontFamily: "Open Sans,sans-serif",
    			fontWeight: "300", 
    			padding: "3px 6px",
    			color: "#fff",
    			background:"#ED6B75"

        	}
     	}else{
     		return {
     			 		textShadow: "none!important",
     					fontSize: "14px",
     					fontFamily: "Open Sans,sans-serif",
     					fontWeight: "300", 
     					padding: "3px 6px",
     					color: "#fff",
     					background:"#408725"	            
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
	              <td><button style={btnDelete} onClick={this.eventoBorrado}> X</button></td>
	           </tr>


	     	)
	 }
}

const btnDelete = {
    fontSize: "18px",
    background: "red",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "50%",
    cursor : "pointer"

}



export default Contenido;