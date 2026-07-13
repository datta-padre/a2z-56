import { useState } from "react";

function App(){

  const [name , setName] = useState("");
  const [mobile , setMobile] = useState();
  const [email , setEmail ] = useState("");
  const [password , setPassword ] = useState("");

  function submitName(){

    console.log(name);
    console.log(mobile);
    console.log(email);
    console.log(password);

  }

  return(
    <>
    <h1>Welcome to React js </h1>
    <br />
    Enter Name <br />
    <input type="text" onChange={(event)=>setName(event.target.value)}/>
    <br /><br />
    Enter mobile <br />
    <input type="number"  onChange={(event)=>setMobile(event.target.value)}/>
    <br /><br />
    Enter Email <br />
    <input type="email"  onChange={(event)=>setEmail(event.target.value)}/>
    <br /><br />
    Enter Password <br />
    <input type="password" onChange={(event)=>setPassword(event.target.value)} />
    <br /><br />
    <button onClick={submitName}>Submit</button>
    </>
  )
}

export default App;