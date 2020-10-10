import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';

import { MultipleCustomHooks } from "../../components/03-examples/MultipleCustomHooks";
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

jest.mock('../../hooks/useFetch');
jest.mock('../../hooks/useCounter');


describe ('Pruebas MultipleCustomHook', ()=> {

    useCounter.mockReturnValue({
        counter: 10,
        increment: ()=>{}
    });

    test('debe de mostrarse correctamente', () => {
        useFetch.mockReturnValue({
            data:null,
            loading: true,
            error: null
        });
        const  wrapper = shallow (<MultipleCustomHooks/>)
        expect (wrapper).toMatchSnapshot();
        
    });

    test('debe de mostrar la informacion', () => {
        
        useFetch.mockReturnValue({
            data:[{
                author: "mariano",
                quote: "hola mundo"
            }],
            loading: false,
            error: null
        });

        const  wrapper = shallow (<MultipleCustomHooks/>);

        //expect (wrapper).toMatchSnapshot();
        expect (wrapper.find('.alert').exists()).toBe(false);
        expect (wrapper.find('.mb-0').text().trim()).toBe('hola mundo');
        expect (wrapper.find('footer').text().trim()).toBe('mariano');



    });

});