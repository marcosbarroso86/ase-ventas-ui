import React, { Fragment, useEffect } from 'react'

export const Administrator = () => {
    
    useEffect(() => {
        document.title = 'ASE Ventas - Bandeja Administrador';
    }, [])

    return (
        <Fragment>
            <h5>ASE Ventas - Bandeja Administrador</h5>
        </Fragment>
    )
}
