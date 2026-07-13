import { useState } from "react";

function Count(){

    const [count , setCount] = useState(0)

    return(
        <>
        <h1>Count : {count}</h1>
        <br />
        <button onClick={()=>setCount(count+1)}>+++++++</button>
        </>
    )
}


export default Count;