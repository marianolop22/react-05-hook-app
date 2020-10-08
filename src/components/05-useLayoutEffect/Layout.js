import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const Layout = () => {

    const {counter, increment} = useCounter(1);
    const {data} = useFetch (`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const {quote} = !!data && data[0]; //si existe la data dame laa pos 0
    const [boxSize, setBoxSize] = useState({});

    const pTag = useRef();

    useLayoutEffect(() => {

        // console.log(pTag.current.getBoundingClientRect());
        setBoxSize (pTag.current.getBoundingClientRect());
    },[quote]); //esto se ejecuta al cambiar el quote y me da la chance de ver el tamaño de la caja.

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr/>
            <blockquote className="blockquote text-right">
                <p ref={pTag} className="mb-0">{quote}</p>
            </blockquote>      
            <pre>{JSON.stringify(boxSize,null, 3)}</pre>                  
            <button 
                className="btn btn-primary"
                onClick={() => { increment(1)}}
            >Siguiente quote</button>
        </div>
    )
}
