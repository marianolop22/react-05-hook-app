
import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {

    const [user, setUser] = useState({});

    //Se declara el context mio, como padre de todo
    //Le mando como un objeto grande
    return (
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            <AppRouter/>

        </UserContext.Provider>
    )
}
