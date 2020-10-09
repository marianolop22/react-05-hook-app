import React from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ({handleAddTodo}) => {

    //desestructura el value, ya que es un objeto y toma solo el campo description
    const [ {description}, handleInputChange, reset ] = useForm ({
        description: ''
    })

    const handleSubmit = (e) => {
        
        e.preventDefault();

        if ( description.trim() <=1 ) {
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        handleAddTodo(newTodo);
        reset();
    };


    return (
        <>
            <h4>Agregar TODO</h4>
            <hr/>
            <form onSubmit={handleSubmit}>
                <input
                    className="form-control"
                    text="text"
                    name="description"
                    placeholder="aprender...."
                    autoComplete="off"
                    value={description}
                    onChange={handleInputChange}
                />
                <button
                    type="submit"
                    className="btn btn-primary mt-1 btn-block"
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
