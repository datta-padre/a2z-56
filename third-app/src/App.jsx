import {useState} from "react"

function App(){

  var usename = "ABC"

  var [name , setname] = useState("datta");

  return(
    <div>
      <h1>Welocme to  {name} {usename} {name} </h1>
    </div>
  )
}

export default App;

