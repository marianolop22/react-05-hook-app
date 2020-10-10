import '@testing-library/jest-dom';
import React from 'react';

import { shallow } from 'enzyme';
import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe ('Pruebas en useCounter', ()=> {

    test('debe de retornar valores por defecto', () => {
        
        //para testear hooks se usa el renderhool y esto devuelve un result siempre
        const { result } = renderHook ( ()=> useCounter() );
        const {counter, increment, decrement, reset} = result.current;
        expect (counter).toBe(10);
        expect (typeof increment).toBe('function');
        expect (typeof decrement).toBe('function');
        expect (typeof reset).toBe('function');
    });

    test('debe de tener el counter en 100', () => {
        
        //para testear hooks se usa el renderhool y esto devuelve un result siempre
        const { result } = renderHook ( ()=> useCounter(100) );
        const {counter, increment, decrement, reset} = result.current;
        expect (counter).toBe(100);
    });

    test('debe de tener incrementar el counter en 1', () => {
        
        const { result } = renderHook ( ()=> useCounter(100) );
        const { increment } = result.current;
        
        //el act es para ejecutar las funciones de un hook
        act( ()=> {
            increment();
        });

        const {counter} = result.current;
        expect(counter).toBe(101);
    });

    test('debe de tener decrementar el counter en 1', () => {
        
        const { result } = renderHook ( ()=> useCounter(100) );
        const { decrement } = result.current;
        
        //el act es para ejecutar las funciones de un hook
        act( ()=> {
            decrement();
        });

        const {counter} = result.current;
        expect(counter).toBe(99);
    });

    test('debe de tener resetear el contador a 100', () => {
        
        const { result } = renderHook ( ()=> useCounter(100) );
        const { increment, reset } = result.current;
        
        //el act es para ejecutar las funciones de un hook, va a ejecutar la funcion  solo 1 vez
        act( ()=> {
            increment();
            reset();
        });

        const {counter} = result.current;
        expect(counter).toBe(100);
    });

});