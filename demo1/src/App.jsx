import { useState } from "react";

function App(){

  const [name , setName ] = useState("")

  return(
    <>
    <h1>Welcome</h1>

    <input type="text" onChange={()=>setName("vishal")}/>

     <h1> Hiii {name}</h1>
    </>
  )
}

export default App;