import React, { useState } from 'react';
import uniqueId from 'lodash/uniqueId';
import merge from 'lodash/merge';
import axios from 'axios';
import DatePicker from "react-datepicker";
import moment from 'moment';
import { createUseStyles } from 'react-jss';
import config from '../../config';

const SET_FECHA_INICIO = 'SET_FECHA_INICIO';
const SET_FECHA_FIN = 'SET_FECHA_FIN';

const useStyles = createUseStyles({
    contenedorFechas: {
        display: 'flex',
    },
    titulo: {
        fontSize: '1.4em',
        fontWeight: 'bold',
        margin: '10px',
    },
    contenedor: {
        margin: '20px'
    },
    fecha: {
        margin: '10px'
    },
    boton: {
        margin: '10px',
    },
    dias: {
        margin: '10px',
    }
  })

const NuevaSolicitud = ({ datos }) => {
    const [fechaInicio, setFechaInicio] = useState(0);
    const [fechaFin, setFechaFin] = useState(0);
    const [diferencia, setDiferencia] = useState(0);

    const setFecha = (action, payload) => {
        switch(action) {
            case SET_FECHA_INICIO:
              setFechaInicio(payload);
              break;
            case SET_FECHA_FIN:
              setFechaFin(payload);
              setDiferencia(diasTotal(payload));
              break;
            default: 
              // nothing
        }   
    }

    const CalendarioInicio = () => {
        return (
        <div className={classes.fecha}>
            <div>Fecha de Inicio: </div>
            <DatePicker showTimeSelect selected={fechaInicio} onChange={fecha => setFecha(SET_FECHA_INICIO, fecha)} />
        </div>
        );
    }

    const CalendarioFin = () => {
        return (
        <div className={classes.fecha} >
            <div>Fecha de Final: </div>
            <DatePicker showTimeSelect selected={fechaFin} onChange={fecha => setFecha(SET_FECHA_FIN, fecha)} />
        </div>
        );
    }

    const submit = async () => {
        const solicitud = {
            dias: datos.dias - diferencia,
            solicitudes: [
                ...datos.solicitudes,
                {
                    "id": uniqueId(),
                    "inicio": moment(fechaInicio).format('MMM Do YY'),
                    "fin": moment(fechaFin).format('MMM Do YY'),
                    "dias_solicitados": diferencia < 0 ? 0 : diferencia,
                    "status": "pendiente"
                }
            ]
        }
        const { empleadoId } = config.session;
        await axios({
            method: 'patch',
            url: `http://localhost:3001/empleados/${empleadoId}`,
            data: merge(datos, solicitud)
          });
        window.location.reload();
    }

    const diasTotal = fecha => {
        return moment(fecha).diff(moment(fechaInicio), 'days');
    }

    const classes = useStyles();
    return (
        <div className={classes.contenedor}>
            <div className={classes.titulo}>Nueva Solicitud</div>
            <div className={classes.contenedorFechas}>
                <CalendarioInicio />
                <CalendarioFin />
            </div>
            <div className={classes.dias}>
                <label htmlFor="dias">Días a Solicitar:</label>
                <input style={{marginLeft: '10px', width: '198px'}} disabled={true} type="text" id="dias" value={diferencia} />
            </div>
            <button className={classes.boton} onClick={submit}>Enviar Solicitud</button>
        </div>
    )

}

export default NuevaSolicitud;