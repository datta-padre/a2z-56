import { useState } from "react";

function App(){

  const [name , setName] = useState("")
  const [mobile , setMobile] = useState();
  const [email , setEmail] = useState("")

  return(
    <>
    <h1> Demo2</h1>
    <br />
    Enter Name 
    <input type="text"  onChange={(event)=>setName(event.target.value)}/>
    <br />
    <br />
    Enter Mobile 
    <input type="number" onChange={(event)=>setMobile(event.target.value)} />
    <br />
    <br />
    Enter Email 
    <input type="email"  onChange={(event)=>setEmail(event.target.value)}/>
    

    <br /><br />

    <h1>Name : {name}</h1>
    <h1>Mobile : {mobile}</h1>
    <h1>Email : {email}</h1>
    </>
  )
}

export default App;