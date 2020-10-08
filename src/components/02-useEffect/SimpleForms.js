import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForms = () => {

    const [formState, setFormState] = useState({
        name:'',
        email:''
    });

    const {name, email} = formState;

    // useEffect  permite ejecutar cuando pasa algo en nuestro formulario
    //si pones [] solo se ejecuta cuando carga el formulario
    //se recomiendo que uses tantos useEffect como cosas que vayas a controlar que cambien
    useEffect ( ()=> {
        // a('hey');
    },[]);

    useEffect ( ()=> {
        // a('cambio el formState');
    },[formState]);



    //aca desestructura "e" para que venga solo el target y despues asignamos los valores del campo name 
    // la variable name.
    const handleInpuChange = ( {target} ) => {
        // console.log(target.name);
        // console.log(target.value);
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    };


    return (
        <>
            <h1>useEffect</h1>
            <hr/>
            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="ingrese su nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInpuChange}
                />
            </div>
            <div className="form-group">
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="ingrese su email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInpuChange}
                />
            </div>
            { (name==='123') && <Message/>}

        </>
    )
}
