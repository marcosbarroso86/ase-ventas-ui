import React, { Fragment, useEffect } from 'react'

export const Administrator = () => {
    
    useEffect(() => {
        document.title = 'ASE Ventas - Bandeja Administrador';
    }, [])

      /* usar arrow functions */
      const handleClick = () => {
        /* Para acciones sobre eventos anteponer la palabra -handle- */
    }
    /* el return siempre al pie  */

    return (
        <Fragment>
            <h5>ASE Ventas - Bandeja Administrador</h5>
        </Fragment>
    )
}
