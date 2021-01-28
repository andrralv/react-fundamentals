import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  NuevaSolicitud: {
    margin: '20px',
  },
  titulo: {
    fontSize: '1.4em',
    fontWeight: 'bold',
    margin: '10px'
  },
  fechas: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
});

const NuevaSolicitud = () => {
  const classes = useStyles();
  const [fechaInicio, setFechaInicio] = useState(0);
  const [fechaFin, setFechaFin] = useState(0);

  const CalendarioInicio = () => {
    return (
    <div className={classes.fecha}>
      <div>Fecha de Inicio:</div>
      <DatePicker selected={fechaInicio} onChange={fecha => setFechaInicio(fecha)} />
    </div>)
  };

  const CalendarioFin = () => {
    return (
    <div className={classes.fecha}>
      <div>Fecha de Fin:</div>
      <DatePicker selected={fechaFin} onChange={fecha => setFechaFin(fecha)} />
    </div>)
  };

  return (
    <div className={classes.NuevaSolicitud}>
      <div className={classes.titulo}>
        Nueva Solicitud
      </div>
      <div className={classes.fechas}>
        <CalendarioInicio />
        <CalendarioFin />
      </div>
    </div>
  );
}

export default NuevaSolicitud;