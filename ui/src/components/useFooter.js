import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    footer: {
        position: 'fixed',
        left: '0',
        bottom: '0',
        width: '100%',
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
    },
    text: {
        margin: '20px',
    }
  })
  

const useFooter = CustomComponent => {
    const classes = useStyles();
    return () => {
        return (
            <div>
                <CustomComponent />
                <div className={classes.footer}>
                    <div className={classes.text}>Administrador de Vacaciones. 2021</div>
                </div>
            </div>
        )
    }
}

export default useFooter;