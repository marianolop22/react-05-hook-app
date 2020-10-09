import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {

    const {user, setUser} = useContext(UserContext);

    const handleOnClick = (e) => {
        setUser({});
    };

    return (
        <div>
            <h1>About</h1>
            <hr/>
            <pre className="container">{JSON.stringify(user,null,3)}</pre>
            <button 
                className="btn btn-warning"
                onClick={handleOnClick}
            >Logout</button>
        </div>
    )
}
