import React from 'react';
import './CartaEmpleado.css';

const CartaEmpleado = ({ datos }) => {

    return (
        <div className="carta-empleado">
            <div className="nombre">
                Nombre: { datos.nombre }
            </div>
            <div className="columna-datos">
                <div className="puesto">
                    Puesto: { datos.puesto }
                </div>
                <div className="dias-disponibles">
                    Dias disponibles: { datos.dias }
                </div>
            </div>
        </div>
    )
}

export default CartaEmpleado;
