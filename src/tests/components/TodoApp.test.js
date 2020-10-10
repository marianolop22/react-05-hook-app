import '@testing-library/jest-dom';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { TodoApp } from '../../components/08-useReducer/TodoApp';
import { demoTodos } from '../fixtures/demoTodos';
import { act } from 'react-dom/test-utils';


describe ('Pruebas de  TodoApp', ()=> {

    Storage.prototype.setItem = jest.fn(()=> {}); //esto es para reescribir el el localstorage y poder evaluarlo

    const wrapper = shallow(<TodoApp/>);

    test('debe de renderizar bien', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de agregar un todo', () => {
        const wrapper = mount(<TodoApp/>); //esto es para renderizar todo el componente bien, con contexto y todo
        act(()=> {
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
        });

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (2)');
    });

    test('debe de eliminar un todo', () => {
        
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
        wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);
        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (0)');
    });



});