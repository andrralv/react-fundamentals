import React from 'react';
import CartaEmpleado from '../components/CartaEmpleado';
import useCard from '../components/useCard';

const Solicitud = () => {

    const datos = { nombre: 'Ada Lovelace', puesto: 'Ingenier@', dias: 4 };
    const CartaEmpleadoWithCard = useCard(CartaEmpleado);

    return (
        <div style={{ width: '1200px' }}>
            <CartaEmpleadoWithCard datos={datos}/>
        </div>
        )
};

export default Solicitud;