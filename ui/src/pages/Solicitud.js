import React from 'react';
import CartaEmpleado from '../components/CartaEmpleado';

const Solicitud = () => {

    const datos = { nombre: 'Ada Lovelace', puesto: 'Ingenier@', dias: 4 };

    return (
        <div>
            <CartaEmpleado { ...{ datos }} />
        </div>
        )
};

export default Solicitud;