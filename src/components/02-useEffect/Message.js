import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({x:0 , y:0});
    const {x, y} = coords;

    useEffect(() => {

        const mouseMove = ({x,y}) => {
            //const coords = {x: e.x, y: e.y}
            setCoords ({ x, y });
            // console.log(coords);
        };

        window.addEventListener( 'mousemove', mouseMove);

        return () => {
            console.log('componente desmontado'); //acá limpia el componente, sería como el onDestroy
            window.removeEventListener('mousemove', mouseMove); //esto sirve para desuscribir
        };
    }, [])


    return (
        <div>
            <h3>Eres genial</h3>
            <p>X: {x} - Y:{y}</p>
        </div>
    )
}
