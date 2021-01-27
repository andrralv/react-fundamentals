import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  tabla: {
    borderCollapse: 'collapse',
    border: '1px solid lightgrey',
    margin: '10px',
    '& th, tr, td': {
      borderCollapse: 'collapse',
      border: '1px solid lightgrey',
      fontSize: '0.8em',
      fontWeight: '400',
      width: '300px',
      padding: '10px'
    }
  },
  contenedor: {
    margin: '20px'
  }
});

const SolicitudesTabla = ({ datos }) => {
  const classes = useStyles();
  
  return (
  <table className={classes.tabla}>
    <thead>
      <tr>
        <th>Fecha Inicio</th>
        <th>Fecha Fin</th>
        <th>Dias Solicitados</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
    {isEmpty(datos) || isEmpty(datos.solicitudes) && <tr><td colSpan={4}>No hay datos que mostrar</td></tr>}
    {
      !isEmpty(datos) && 
      datos.solicitudes.map((solicitud, index) => 
        <tr key={index}>
          <td>{solicitud.inicio}</td>
          <td>{solicitud.fin}</td>
          <td>{solicitud.dias_solicitados}</td>
          <td>{solicitud.status}</td>
        </tr>
      )
    }
    </tbody>
  </table>
  )
}

export default SolicitudesTabla;