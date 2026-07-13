import { useState } from "react";
import { useEffect } from "react";

function App(){

  const [uname , setUname] = useState("");
  const [umobile , setUmobile] = useState();
  const [uemail , setUemail ] = useState("");
  const [data , setData] = useState([]);

  useEffect(()=>{
    console.log("new data", data)
  },[data])

  function submit(){

    var  obj = {
      Uname : uname ,
      Umobile : umobile , 
      Uemail : uemail
    }

    var newData = [...data ,obj ]

    setData(newData)

  }

  return(
    <>
    Enter Name <br />
    <input type="text" onChange={(e)=>setUname(e.target.value)}/>
    <br /><br />
    Enter Mobile <br />
    <input type="number"  onChange={(e)=>setUmobile(e.target.value)}/>
    <br /><br />
    Enter Email <br />
    <input type="email"  onChange={(e)=>setUemail(e.target.value)}/>
    <br /><br />
    <button onClick={submit}>Submit</button>

    <br /><br />
  
  {data.map((val,index)=>(
      <div>
         <h1>{val.Uname}</h1>
         <h1>{val.Umobile}</h1>
         <h1>{val.Uemail}</h1>
      </div>
    ))}

    </>
  )

}

export default App;