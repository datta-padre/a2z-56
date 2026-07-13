import { useState } from "react";
import { useEffect } from "react";

function App(){

  const [product , setProduct ] = useState("");
  const [qty , setQty] =  useState(0);
  const [price , setprice] =  useState(0);
  const [data , setData] = useState([]);

  useEffect(()=>{
    console.log("Updated",data)
  },[data])

  function saveData(){
    var obj = {
      product:product,
      qty:qty,
      price:price,
      total:qty*price
    }

    var newData = [...data, obj]

    setData(newData)
  }

  return(
    <>
      <table width="100%" border={1}>
        <tr>
          <th>Product</th>
          <th>Qty</th>
          <th>Price</th>
          <th>Total</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>
            <input type="text"  onChange={(e)=>setProduct(e.target.value)}/>
          </td>
          <td>
            <input type="text" onChange={(e)=>setQty(e.target.value)}/>
          </td>
          <td>
            <input type="text" onChange={(e)=>setprice(e.target.value)}/>
          </td>
          <td>
            <input type="text"  value={price*qty}/>
          </td>
          <td>
            <button onClick={saveData}>+</button>
          </td>
        </tr>
      </table>
    </>
  )
}

export default App;