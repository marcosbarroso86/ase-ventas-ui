import React, { Fragment, useEffect } from 'react'

export const ABMPlatform = () => {

    useEffect(() => {
        document.title = 'ASE Ventas - Bandeja ABM';
    }, []);
    
    
    /* usar arrow functions */
    const handleClick = () => {
        /* Para acciones sobre eventos anteponer la palabra -handle- */
    }
    /* el return siempre al pie  */

    return (
        <Fragment>
                <h5>ASE Ventas - Bandeja ABM</h5>
        </Fragment>
    )
}
