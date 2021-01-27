import React from 'react';
import { createUseStyles } from 'react-jss';
import SolicitudesTabla from './SolicitudesTabla';


const useStyles = createUseStyles({
  titulo: {
      fontSize: '1.4em',
      fontWeight: 'bold',
      margin: '10px',
  },
  contenedor: {
    margin: '20px'
  }
});

const Solicitudes = () => {
  const classes = useStyles();

  return (
    <div className={classes.contenedor}>
      <div className={classes.titulo}>
          Solicitudes
          <SolicitudesTabla />
        </div>
    </div>
  )
};

export default Solicitudes;