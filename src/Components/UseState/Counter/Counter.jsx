import React, { useState } from 'react';

function Counter(){

    const [count,setCount] = useState(0)

    let i = 0;
    const addFive = () => {
        while( i < 5) {
            setCount((prevState) => prevState + 1)
            i++;
        }
    }

    return (
        <div>
             
            <button type="button" onClick={()=> setCount((prevState)=> prevState + 1)}>click {count}</button>
            <br/>
            <p>{count}</p>
            <button type="button" onClick={addFive}>add 5</button>
        </div>
    );
};

export default Counter;