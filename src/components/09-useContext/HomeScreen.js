import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {

    //acá utilizo el hook enviando el context que tengo creado, me va a permitir laburar con eso
    const {user} = useContext(UserContext);

    console.log(user);


    return (
        <div>
            <h1>Home</h1>
            <hr/>
            <pre className="container">{JSON.stringify(user,null,3)}</pre>
        </div>
    )
}
