import { useState } from "react";
import { useEffect } from "react";

function App(){

  const [name  , setName] = useState("");
  const [data , setData] = useState([]);

  useEffect(()=>{
    console.log("New Data " , data)
  },[data])

  function submitName(){

    var newData = [...data,name]

    setData(newData)
  }

  return(
    <>
    <input type="text" onChange={(event)=>setName(event.target.value)} />
    <br /><br />
    <button onClick={submitName}>Submit</button>
    </>
  )
}

export default App;