
import {useState} from "react"

function Color(){

    const [color , setColor] = useState({"color":"black"})

    return(
        <>
        <h1 style={color}>Welcome to React js </h1>
        <br />
        <button onClick={()=>setColor({"color":"red"})}>Red</button>
        <button onClick={()=>setColor({"color":"blue"})}>Blue</button>
        <button onClick={()=>setColor({"color":"green"})}>Green</button>

        </>
    )
}

export default Color;