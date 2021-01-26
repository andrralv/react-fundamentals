import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    card: {
        border: '1px solid lightgrey',
        borderRadius: '5px',
        margin: '10px',
    }
  })
  

const useCard = CustomComponent => {
    const classes = useStyles();
    return props => {
        return (
            <div>
                <div className={classes.card}>
                    <CustomComponent { ...props }/>
                </div>
            </div>
        )
    }
}

export default useCard;