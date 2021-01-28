import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  cartaEmpleado: {
    margin: '20px',
  },
  nombre: {
    fontWeight: 'bolder',
    fontSize: '1.53em',
    marginLeft:' 10px',
  },
  datos: {
    margin: '10px'
  },
  contenedor: {
    display: 'flex',
  },
});

const CartaEmpleado = ({ datos }) => {
  const classes = useStyles();

  if (!datos) {
    return 'no hay datos'
  }

  return (
    <div className={classes.cartaEmpleado}>
        <div className={classes.nombre}>
         Nombre: {datos.nombre}
        </div>
        <div className={classes.contenedor}>
          <div className={classes.datos}>Puesto: {datos.puesto}</div>
          <div className={classes.datos}>Dias Disponibles: {datos.dias_disponibles}</div>
        </div>
    </div>
  )
};

export default CartaEmpleado;