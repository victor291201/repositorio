import React from "react";
import "../utileria/IniciarSesion.css"

function IniciarSesion() {
    return (
      <div className="contenedor">
        <div className="pt1"></div>
        <div className="pt2">
            <div className="formulario">
                <div className="igd"></div>
                <div className="usuario">
                    <label className="usLabel" htmlFor="usLabel">Usuario</label>
                    <input type="text" className="usInput" id="usLabel"/>
                </div>
                <div className="contraseña">
                    <label className="usLabel" htmlFor="usLabel">Contraseña</label>
                    <input type="password" className="usInput" id="usLabel"/>
                </div>
                <div className="adicionales">
                    <div className="recordarme">
                        <input type="checkbox" id="recordarme"/>
                        <label htmlFor="recordarme">Recordarme mas tarde</label>
                    </div>
                    <a>Olvide mi contraseña</a>
                </div>
                <button>Iniciar Sesion</button>
            </div>
        </div>
      </div>
    );
  }
  
  export default IniciarSesion;
  