import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import { RealExampleRef } from "../../components/04-useRef/RealExampleRef";

describe ('Pruebas de RealExampleRef', ()=> {
    
    const wrapper = shallow(<RealExampleRef/>);

    test('debe mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
        
    });

    test('debe mostrar el MultipleCustomHooks', () => {

        // const wrapper = shallow(<RealExampleRef/>);
        wrapper.find('button').at(0).simulate('click');

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists() ).toBe(true);
        
    });

});