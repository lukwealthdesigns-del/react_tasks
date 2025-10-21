import { useState } from "react";

function Counter() {
    let [count, setCount] = useState(0);

    function increment() {
        setCount(prevCount => prevCount + 1);
    }
    
    function decrement() {
        setCount(prevCount => {
            if (prevCount === 0){
                return setCount(0);
            } else 
                return prevCount - 1;
        })
    }
    
    function reset() {
        setCount(0);
    }

    return (
        <div className="main">
            <div className="display">{count}</div>
            <div className="buttons">
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
                <button onClick={reset}>Reset</button>
            </div>
            
        </div>
    )


}

export default Counter;