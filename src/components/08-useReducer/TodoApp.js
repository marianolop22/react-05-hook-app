import React, { useEffect, useReducer } from 'react'

import './styles.css';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

const init = () => {
    return JSON.parse( localStorage.getItem('todos') ) ||  [];
    // [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }];
};

export const TodoApp = () => {

    //reducer: es la funcion, initial state: es el estado, init es la funcion que ayuda a computar el estado inicial
    const [todos, dispach] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleDelete = (todoId) => {
        const action = {
            type:'delete',
            payload: todoId
        };
        dispach(action);
    };

    const handleToggle = ( todoId ) => {
        const action = {
            type:'toggle',
            payload: todoId
        };
        dispach(action);
    };

    const handleAddTodo = (newTodo) => {
        const action = {
            type:'add',
            payload: newTodo
        };
        dispach(action);
    };



    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <TodoList 
                         todos={todos} 
                         handleDelete={handleDelete} 
                         handleToggle={handleToggle} 
                    />
                </div>
                <div className="col-5">
                    <TodoAdd handleAddTodo={handleAddTodo}/>

                </div>

            </div>
        </div>
    )
}
