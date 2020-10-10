import '@testing-library/jest-dom';
import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from '../../components/09-useContext/AppRouter';
import { UserContext } from '../../components/09-useContext/UserContext';

describe ('Pruebas de AppRouter', ()=> {

    const user = {
        id:1,
        name:'Mariano'
    }
    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <AppRouter/>
        </UserContext.Provider>
    );

    test('debe de mostrar correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

});