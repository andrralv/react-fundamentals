import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';
import NuevaSolicitud from '../components/Solicitud/NuevaSolicitud';
import Solicitudes from '../components/Solicitud/Solicitudes';
import CartaEmpleado from '../components/Solicitud/CartaEmpleado';
import useCard from '../components/useCard';

const Solicitud = () => {
    const CartaEmpleadoWithCard = useCard(CartaEmpleado);
    const CalendarioWithCard = useCard(NuevaSolicitud);
    const SolicitudesWithCard = useCard(Solicitudes);

    const [datos, setDatos] = useState({})

    useEffect(() => {
        fetchData();
    }, []);
    
    const fetchData = async () => {
        const { empleadoId } = config.session;
        const response = await axios({
            method: 'get',
            url: `http://localhost:3001/empleados/${empleadoId}`,
          });
        setDatos(response.data);
    }

    return (
        <div style={{ width: '1200px' }}>
            <CartaEmpleadoWithCard {...{ datos }} />
            <SolicitudesWithCard {...{ datos }} />
            <CalendarioWithCard {...{ datos }} />
        </div>
        )
};

export default Solicitud;