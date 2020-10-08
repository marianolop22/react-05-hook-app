import React, { useState } from 'react';
import '../02-useEffect/effects.css';
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>Real Example ref</h1>
            <hr/>


            { show && <MultipleCustomHooks/>}

            <button
                className="btn btn-info mt-5"
                onClick={ ()=> {
                    setShow (!show);
                }}
            >
                Show/Hide
            </button>

        </div>
    )
}
