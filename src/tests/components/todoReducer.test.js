import '@testing-library/jest-dom';
import { todoReducer } from "../../components/08-useReducer/todoReducer";
import { demoTodos } from '../fixtures/demoTodos';


describe ('Pruebas sobre todoReducer', ()=> {

    test('debe devolver el state', () => {
        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos);
    });

    test('debe de agregar un TODO', () => {
        const newTodo={
            id:3,
            desc: 'Otra mas',
            done: false
        }
        const action = {
            type:'add',
            payload:newTodo
        }        
        const state = todoReducer(demoTodos, action);
        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos, newTodo]);
    });

    test('debe de borra un todo', () => {
        const action = {
            type:'delete',
            payload: 1
        }        
        const state = todoReducer(demoTodos, action);
        expect(state.length).toBe(1);
        expect(state).toEqual( [demoTodos[1]]);
    });

    test('debe de hacer el toggle del todo', () => {
        const action = {
            type:'toggle',
            payload: 1
        }        
        const state = todoReducer(demoTodos, action);
        // console.log("toggle",state);
        expect(state.length).toBe(2);
        expect(state[0].done).toBe(true);
    });

});