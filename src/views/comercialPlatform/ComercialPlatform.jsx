import React, { useEffect, useState } from 'react'

export const ComercialPlatform = () => {

    /* colocar los estados al principio */
    const [state, setstate] = useState(null)

    useEffect(() => {
        document.title = 'ASE Ventas - Bandeja Comercial';
        /* los llamados a API's para cargas iniciales van aqui */
    }, [])

    /* usar arrow functions */
    const handleClick = () => {
        /* Para acciones sobre eventos anteponer la palabra -handle- */
    }



    /* el return siempre al pie  */
    return (
        <div>
            <h5>ASE Ventas - Bandeja Comercial</h5>
            
        </div>
    )
}
