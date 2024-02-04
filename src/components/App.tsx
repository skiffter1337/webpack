import React, {useState} from 'react';
import './App.scss'

export const App = () => {

    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(prevState => prevState + 1)}>
                <span>
                    +
                </span>
            </button>
            <button onClick={() => setCount(prevState => prevState - 1)}>
               <span>
                    -
                </span>
            </button>
        </div>
    );
};
