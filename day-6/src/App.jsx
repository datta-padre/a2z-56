
import { useState } from "react";

function App(){

  const [count , setCount ] = useState(0)

  return(
    <>
    <h1>Welcome to React js</h1>

    <button onClick={()=>setCount(count +1 )}>increase</button> 
      <h2> {count}</h2>
    <button onClick={()=>setCount(count-1)}>decrease</button>
    </>
  )
}

export default App;

