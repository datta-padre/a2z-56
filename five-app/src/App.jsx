
import {useState} from "react"

function App(){

  const [age , setAge ] = useState(21)
  const [name , setName] = useState("Datta")

  return(
    <>
    <h1>Welcome to React day-5</h1>
    <h1> Age :{age}</h1>
    <h1>Name : {name}</h1>

    <br />

    <button onClick={()=>setName("Om")}>Om</button>
    <button onClick={()=>setName("Vishal")}>Vishal</button>
    <button onClick={()=>setName("Mayur")}>Mayur</button>
    </>
  )
}

export default App;




// ()=>  single line  

// ()=> {}   multiple Line 