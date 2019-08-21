import React from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import '../css/business-casual.css'
import '../css/estilos.css'
import '../css/bootstrap.min.css'
import '../css/menu.css'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nombre: '',
      apellido: '',
      tipoDocumento: '',
      correo: '',
      cedula: '',
      contrasena: '',
      fechaNacimiento: ''
    };



    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }



  onSubmit = () => {
    //console.log(evento);
    console.log('aqui');
    console.log(this.props);

    fetch('http://localhost:8080/SuperadminustradorESCOM-web/api/usu/', {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        'nombre': this.state.nombre,
        'apellido': this.state.apellido,
        'tipoDocumento': this.state.tipoDocumento,
        'cedula': this.state.cedula,
        'correo': this.state.correo,
        'contrasena': this.state.contrasena,
        'fechaNacimiento': this.state.fechaNacimiento
      })
    });
    this.props.funcion(this.state.nombre, this.state.correo, this.state.cedula);

  }



  onChange = (evento) => {
    console.log([evento.target.name]);
    this.setState({

      [evento.target.name]: evento.target.value

    });
    console.log(this.state);
  }


  render() {
    return (
      <div>
        <Button color="danger" className="btn btn-dark" style={fondoBoton} onClick={this.toggle}>Crear usuario +</Button>
        <Modal isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          size="col-md-6"
        >
          <ModalHeader toggle={this.toggle} className="center">Crear usuario</ModalHeader>
          <ModalBody>
            <form onSubmit={this.onSubmit}>
              <div className="contenedor-inputs">
                <div className="row">
                  <div className="col-sm-12">
                    <input type="text" name="nombre" id="inputCorreo" onChange={this.onChange} value={this.state.nombre} className="form-control form-control-solid placeholder-no-fix form-group" placeholder="Nombre" />
                  </div>
                  <div className="col-sm-12">
                    <input type="text" name="apellido" id="inputCorreo" onChange={this.onChange} value={this.state.apellido} className="form-control form-control-solid placeholder-no-fix form-group" placeholder="Apellido" />
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-5">
                    <span>Tipo de documento </span>
                  </div>
                  <div className="col-sm-7">
                    <select className="bs-select form-control" name="tipoDocumento" onChange={this.onChange} id="selectDDL" title="ACCIONES">
                      <option value="0">Seleccione...</option>
                      <option value="1">Cedula ciudadania</option>
                      <option value="2">Cedula extranjera</option>
                      <option value="3">Pasaporte</option>
                    </select>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-sm-12">
                    <input type="text" id="inputCorreo" onChange={this.onChange} name="cedula" value={this.state.cedula} className="form-control form-control-solid placeholder-no-fix form-group" placeholder="Numero de documento" />
                  </div>
                  <br />

                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <input type="text" id="inputCorreo" onChange={this.onChange} name="correo" value={this.state.correo} className="form-control form-control-solid placeholder-no-fix form-group" placeholder="Correo" />
                  </div>
                  <div className="col-sm-12">
                    <input type="text" id="inputCorreo" onChange={this.onChange} name="contrasena" value={this.state.contrasena} className="form-control form-control-solid placeholder-no-fix form-group" placeholder="Contraseña" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <span>Fecha de nacimiento</span>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-group dates">
                      <input type="date" onChange={this.onChange} name="fechaNacimiento" value={this.state.fechaNacimiento} id="user1" className="form-control" readonly />
                    </div>
                  </div>
                </div>
              </div>
            </form>

          </ModalBody>
          <ModalFooter>
            <Button style={fondoBoton} onClick={this.onSubmit}>Registrar</Button>{''}
            <Button color="secondary" onClick={this.toggle}>Cancelar</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const fondoBoton = {
  background: "#ec671d",
  fontSize: "14px",
  fontFamily: "Open sans, sans-serif"

}



export default ModalExample;
