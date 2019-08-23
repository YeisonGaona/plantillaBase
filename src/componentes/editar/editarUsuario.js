import React from 'react';


//componentes
import Barra from '../general/BarraDirecciones.js'

import { Button } from 'reactstrap';


//estilos
import '../../css/business-casual.css'
import '../../css/estilos.css'
import '../../css/bootstrap.min.css'
import '../../css/menu.css'

class editar extends React.Component {
 
  componentDidMount() {
    console.log('cedula es:');
    console.log(this.props);
  }

  render() {

    return (
      <div>
        <div class="text-left titulo letra" style={estiloLetrero}>
          <h4>Editar usuario</h4>
        </div>
        <Barra texto="Inicio > Administracion de usuarios > Editar usuario" />
        <div className="container" style={{
          paddingTop: "7px",
          paddingRight: "12px",
          paddingLeft: "40px",
          paddingBottom: "20px",
          margin: "0px 0px 32px"
        }}>
          <div className="container shadow" style={
            {
              background: "white",
              paddingTop: "12px",
              paddingRight: "30px",
              paddingLeft: "30px",
              paddingBottom: "0px"
            }}>
            <div>
              <div className="col-md-12 separador"></div>
              <form className="letra">
                <br />
                <label for="form_control_1">Nombres</label>
                <div className="row">
                  <div className="col-sm-5">
                    <input type="text" className="form-control" id="form_control_1" placeholder="" />
                  </div>
                </div>
                <br />
                <label for="form_control_1">Apellidos</label>
                <div className="row">
                  <div className="col-sm-5">
                    <input type="text" className="form-control" id="form_control_1" placeholder="" />
                  </div>
                </div>
                <br />
                <label for="form_control_1">Tipo de documento</label>
                <div className="row">
                  <div className="col-sm-5">
                    <select className="bs-select form-control select letra" style={{ height: "34px" }} id="selectDDL" title="ACCIONES">
                      <option className="letra" value="0">Seleccione...</option>
                      <option className="letra" value="1">Cedula ciudadania</option>
                      <option className="letra" value="2">Cedula extranjera</option>
                      <option className="letra" value="3">Pasaporte</option>
                    </select>
                  </div>
                </div>
                <br />
                <label for="form_control_1">Numero de documento</label>
                <div className="row">
                  <div className="col-sm-5">
                    <input type="text" className="form-control" id="form_control_1" placeholder="" />
                  </div>
                </div>
                <br />
                <label for="form_control_3">Fecha de nacimiento</label>
                <div className="row">
                  <div className="col-sm-4">
                    <input type="date" name="fechaNacimiento" style={{ height: "34px" }} id="user1" className="form-control" readonly />
                  </div>
                </div>
                <br />
                <label for="form_control_1">Correo</label>
                <div className="row">
                  <div className="col-sm-5">
                    <input type="text" className="form-control" style={{ height: "34px" }} id="form_control_5" placeholder="" />
                  </div>
                </div>
                <br />
                <label for="form_control_1">Contraseña</label>
                <div className="row">
                  <div className="col-sm-5">
                    <input type="text" className="form-control" style={{ height: "34px" }} id="form_control_6" placeholder="" />
                  </div>
                </div>
                <br />
                <div>
                  <Button style={fondoBoton} onClick={this.onSubmit}>Guardar</Button>{''}
                  <Button style={fondoBotonS} color="secondary" onClick={this.toggle}>Cancelar</Button>
                </div>
                <br />
                <br />
              </form>
            </div>
          </div>
          <br />
          <br />
          <div class="text-left titulo letra" style={estiloTitulo}>
            <h4>Actividades actualmente asignadas al usuario</h4>
          </div>
          <div className="container shadow" style={
            {
              background: "white",
              paddingTop: "12px",
              paddingRight: "30px",
              paddingLeft: "30px",
              paddingBottom: "0px"
            }}>
            <table className="table table-hover table-bordered table-checkable">
              <thead className="table table-hover table-striped col-md-12">
                <tr>
                  <th> Nombre </th>
                  <th>Descripcion </th>
                  <th> Modulo </th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }



}

const estiloLetrero = {
  paddingTop: "20px",
  paddingRight: "12px",
  paddingLeft: "40px",
  paddingBottom: "1px"
}


const fondoBoton = {
  background: "#ec671d",
  fontSize: "14px",
  fontFamily: "Open sans, sans-serif"

}

const fondoBotonS = {
  background: "secondary",
  fontSize: "14px",
  fontFamily: "Open sans, sans-serif"

}

const estiloTitulo = {

  paddingTop: "7px",
  paddingRight: "12px",
  paddingLeft: "5px",
  paddingBottom: "1px"
}

export default editar;
