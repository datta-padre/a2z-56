import { useState } from "react";

function App(){

  const [name , setName] = useState("");

  return(
    <>
    <h1>welcome to React js </h1>
    <br />
    <input type="text"  onChange={(event)=>setName(event.target.value)}/>
    <br />
    <h1>Hiiii  {name}</h1>
    </>
  )

}

export default App