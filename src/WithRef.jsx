import { useEffect, useRef, useState } from "react"

export const WithRef = () => {

    // const inputEl = useRef(null);
    // console.log(inputEl)
    const [count, setCount] = useState(0);

    // const numRef = useRef(0);

    const handleClick = () => {
        // numRef.current = 1;

        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);

    }

    // useEffect(()=>{
    //     // console.log(inputEl)
    //     console.log(numRef.current)
    // })

    return(
        <div>
            {/* <input placeholder="name" ref={inputEl}/> */}
            <button onClick={handleClick}>{count}</button>
        </div>
    )
}