import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { TodoList } from '../../components/08-useReducer/TodoList';
import { demoTodos } from '../fixtures/demoTodos';



describe ('Pruebas de TodoList', ()=> {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoList 
            todos={demoTodos} 
            handleDelete={handleDelete} 
            handleToggle={handleToggle}
        />);

    test('debe renderizar la cantidad que mando', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de tener 2 elementos', () => {
        expect(wrapper.find('TodoListItem').length).toBe( demoTodos.length);
        
        // console.log(wrapper.find('TodoListItem').at(0).props());
        expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
        expect(wrapper.find('TodoListItem').at(0).prop('handleToggle')).toEqual(expect.any(Function));
        expect(wrapper.find('TodoListItem').at(0).prop('todo')).toEqual(demoTodos[0]);


    });






});