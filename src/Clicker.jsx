import { useState, useEffect } from "react"


export const Clicker = () =>{

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    } 

    useEffect(() => {
        console.log('hello from useEffect', count);

        return () => console.log('goodbye clicker')
     }, [count])

    return(
        <div>
            <button onClick={increment}>+</button>
            <span>{count}</span>
            <button onClick={decrement}>-</button>
        </div>
    )
}