import { useState } from "react";
import { useEffect } from "react";


function App(){

  const [name , setName] = useState("");
  const [data , setData] = useState([])

  useEffect(()=>{
    console.log("new Data", data)
  },[data])

  
  function submit(){
    setData(name)
  }

  return(
    <>
    <input type="text" onChange={(event)=>setName(event.target.value)} />
    <br /><br />
    <button onClick={submit}>submit</button>
    </>
  )
}

export default App;