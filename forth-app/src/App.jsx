import {useState} from 'react'

function App(){

  const [name , setName ] = useState('');
      // varivle , function          default value

  return(
    <>
    <h1>Welcome to {name}...!</h1>
    <br />
    <button onClick={()=>setName("vishal")}>Vishal</button>
    <button onClick={()=>setName("Om")}>Om</button>
    <button onClick={()=>setName("sarthak")}>sarthak</button>
    </>
  )
}

export default App;

// onClick 
// onChnge 






