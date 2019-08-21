import React from 'react';


//estilos
import '../css/business-casual.css'
import '../css/estilos.css'
import '../css/bootstrap.min.css'
import '../css/menu.css'

class editarUsuario extends React.Component {

  render() {
    return (
      <div className="container" style={fondoBoton}>
        <div className=" text-center  p-3">
          <h2 className="section-heading">
            <span >Editar usuario</span>
          </h2>
        </div>
        <div>
          <form>
            <div className="row">
              <label for="form_control_1">Nombre</label>
              <div className="col-sm-5">
                <input type="text" className="form-control" id="form_control_1" placeholder="" />
              </div>
            </div>
            <br />
            <div className="row">
              <label for="form_control_1">Apellido</label>
              <div className="col-sm-5">
                <input type="text" className="form-control inputsm" id="form_control_2" placeholder="" />
              </div>
            </div>
            <br />
            <div className="row">
              <span>Tipo de documento </span>
              <div className="col-sm-4">
                <select className="bs-select form-control select" id="selectDDL" title="ACCIONES">
                  <option value="0">Seleccione...</option>
                  <option value="1">Cedula ciudadania</option>
                  <option value="2">Cedula extranjera</option>
                  <option value="3">Pasaporte</option>
                </select>
              </div>
            </div>
            <br />
            <div className="row">
              <label for="form_control_3">Numero documento</label>
              <div className="col-sm-4">
                <input type="text" className="form-control sm" id="form_control_3" placeholder="" />
              </div>
            </div>
            <br />
            <div className="row">
              <label for="form_control_3">Fecha de nacimiento</label>
              <div className="col-sm-4">
                <input type="date" name="fechaNacimiento" id="user1" className="form-control" readonly />
              </div>
            </div>
            <br />
            <div className="row">
              <label for="form_control_1">Correo</label>
              <div className="col-sm-5">
                <input type="text" className="form-control" id="form_control_5" placeholder="" />
              </div>
            </div>
            <br />
            <div className="row">
              <label for="form_control_1">Clave</label>
              <div className="col-sm-5">
                <input type="text" className="form-control" id="form_control_6" placeholder="" />
              </div>
            </div>
          </form>
        </div>
      </div>

    );
  }



}

const fondoBoton = {
  background: "white",
  padding: "10px 70px"

}

export default editarUsuario;
