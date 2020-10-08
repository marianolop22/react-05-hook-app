import React, {memo} from 'react'

// la funcion memo sirve para que el componente se renderize solo en caso de que cambie algunaa de sus properties
export const Small = memo (( {value} ) => {

    console.log('me cambiaron');

    return (
    <small>{value}</small> 
    )
})
