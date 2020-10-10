import '@testing-library/jest-dom';
import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe ('Pruebas de useForm', ()=> {

    const initialForm  = {
        name:'Fernand',
        email: 'mamma@mamam.com'
    }

    test('deben de devolver los valores por defecto', () => {
        
        const { result } = renderHook ( ()=> useForm(initialForm) );
        const [value, handleInputChange, reset] = result.current;

        expect( value ).toEqual(initialForm);
        expect( typeof handleInputChange ).toBe('function');
        expect( typeof reset ).toBe('function');
    });

    test('deben de cambiar el valor del formulario name:mariano', () => {
        
        const { result } = renderHook ( ()=> useForm(initialForm) );
        const [, handleInputChange] = result.current;
        act ( ()=> {
            handleInputChange( { target: { name:'name', value:'Mariano'} } );
        })
        
        const [value] = result.current;
        // console.log(value);
        expect ( value ).toEqual({...initialForm, name:"Mariano"});


    });

    test('deben de resetear el formulario', () => {
        
        const { result } = renderHook ( ()=> useForm(initialForm) );
        const [, handleInputChange, reset] = result.current;
        act ( ()=> {
            handleInputChange( { target: { name:'name', value:'Mariano'} } );
            reset();
        })
        
        const [value] = result.current;
        // console.log(value);
        expect ( value ).toEqual(initialForm);


    });

});