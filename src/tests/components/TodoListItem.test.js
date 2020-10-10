import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { TodoListItem } from "../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../fixtures/demoTodos";


describe ('Pruebas de TodoListItem', ()=> {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
    const index=1;
    const wrapper = shallow(
            <TodoListItem 
                todo={demoTodos[1]} 
                index={index} 
                handleDelete={handleDelete} 
                handleToggle={handleToggle}
            />);


    test('debe renderizar correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de llamar la funcion borrar', () => {
        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[1].id);
    });

    test('debe de llamar la funcion toggle', () => {
        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(demoTodos[1].id);
    });

    test('debe de mostrar el texto correctamente', () => {
        expect(wrapper.find('p').text()).toBe(`${index+1}. ${demoTodos[1].desc}`);
    });

    test('debe de tener la clase complete si el todo.done es true', () => {
        
        const todo=demoTodos[0];
        todo.done=true;

        const wrapper = shallow(
            <TodoListItem 
                todo={todo} 
                index={0} 
                handleDelete={handleDelete} 
                handleToggle={handleToggle}
            />);

        expect (wrapper.find('p').hasClass('complete')).toBe(true);
    });
});