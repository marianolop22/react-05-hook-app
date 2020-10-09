
const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

//el reducer labura así. recibe 2 parametros, estado  y funcion
const todoReducer = ( state=initialState, action ) => {

    if ( action?.type === 'agregar') {
        return [...state, action.payload]; //esto es como un push

    }


    return state;
};

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
};

//se crea una accion, como estandard debe tener la propiedad type
const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo //payload es un estandard
};

todos = todoReducer ( todos, agregarTodoAction);





console.log(todos);





