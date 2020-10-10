import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';

import {HooksApp} from '../HooksApp'

describe ('Prueba de HookApp', ()=> {

    test('debe renderizar HookApp', () => {
        const wrapper = shallow(<HooksApp/>);
        // console.log(wrapper.find('h1').text() )
        expect ( wrapper).toMatchSnapshot();
        expect ( wrapper.find('h1').text()).toBe('Hola Mundo');
    });

});