import {useState} from "react";

export function Count() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    return(
        <div>
            <h1>Contador</h1>
            <h1>{count}</h1>
            <br/>
            <button onClick={increment} >Incrementar</button>
            <button onClick={decrement} >Decrementar</button>
        </div>
    );
}