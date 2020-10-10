import '@testing-library/jest-dom';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { LoginScreen } from '../../components/09-useContext/LoginScreen';
import { UserContext } from '../../components/09-useContext/UserContext';


describe ('Pruebas en LoginScreen', ()=> {

    const user={
        id:1234,
        name: "Mariano"
    };
    const setUser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider value={{
            
            setUser
        }}>
            <LoginScreen/>
        </UserContext.Provider>
    );


    test('debe renderizar', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe llamar al setuser', () => {
        
        wrapper.find('button').simulate('click');
        //wrapper.find('button').prop('onClick')(); otra manera de hace el click

        expect(setUser).toHaveBeenCalledWith(user);

    });

});