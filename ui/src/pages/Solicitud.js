import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';
import CartaEmpleado from '../components/CartaEmpleado';
import NuevaSolicitud from '../components/NuevaSolicitud';
import useCard from '../components/useCard';

const Solicitud = () => {
  const [datos, setDatos] = useState({});
  const CartaEmpleadoWithCard = useCard(CartaEmpleado);
  const NuevaSolicitudWithCard = useCard(NuevaSolicitud);

  const fetchData = async () => {
    const { empleadoId } = config.session;
    const response = await axios({
      method: 'get',
      url: `http://localhost:3001/empleados/${empleadoId}`,
    }) 
    setDatos(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <CartaEmpleadoWithCard { ...{ datos }} />
      <div>
      <NuevaSolicitudWithCard />
      </div>
    </div>
    )
};

export default Solicitud;