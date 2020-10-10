import '@testing-library/jest-dom';
import React from 'react';
import { mount } from 'enzyme';
import { HomeScreen } from '../../components/09-useContext/HomeScreen';
import { UserContext } from '../../components/09-useContext/UserContext';


describe ('Pruebas en HomeScreen', ()=> {

    const user={
        name:'Mariano',
        email:'mamamma@mama.com'
    };
    const setUser=jest.fn();

    const wrapper = mount(
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            <HomeScreen/>
        </UserContext.Provider>
    );

    test('debe de renderizar', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de renderizar el userContext', () => {
        
        console.log(wrapper.find('pre').text().trim());
        expect(wrapper).toMatchSnapshot();
    });

});