import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { TodoAdd } from '../../components/08-useReducer/TodoAdd';
import { demoTodos } from '../fixtures/demoTodos';

describe ('Pruebas de TodoAAdd', ()=> {

    const handleAddTodo = jest.fn();
    const wrapper = shallow(
        <TodoAdd
            handleAddTodo={handleAddTodo}
    />);

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('no debe de llamar a hndleAddTodo', () => {

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}});
        expect(handleAddTodo).toHaveBeenCalledTimes(0); //o sea no se tiene que haber llamado
    });

    test('debe de llamar a handleAddTodo', () => {

        const value = 'Aprender react';
        wrapper.find('input').simulate('change', {
            target:{
                value,
                name:'description' //nombre del campo que voy a cambiar
            }
        });

        const formSubmit = wrapper.find('form').prop('onSubmit');

        formSubmit({preventDefault(){}});
        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object)); 
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number), //esto es para decirle a jester que espere cuaalquier numero
            desc: value,
            done: false
        });

        expect( wrapper.find('input').prop('value')).toBe('');
    });







});