import { useState } from "react"
import { useEffect } from "react";

function App(){

  const [product , setProduct] = useState("");
  const [qty , setQty] = useState(0);
  const [price , setPrice ] = useState(0);
  const [data, setdata] = useState([]);

  useEffect(()=>{
    console.log("updated", data)
  },[data])

  function saveData(){
   
    var obj = {
      product:product,
      qty:qty,
      price:price,
      total:qty* price
    }

    var newData = [...data, obj]
    setdata(newData)

    setProduct(" ")
    setPrice(0)
    setQty(0)
  
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
          <input type="text"  value={product} onChange={(e)=>setProduct(e.target.value)}/>
        </td>
        <td>
          <input type="number" value={qty}  onChange={(e)=>setQty(e.target.value)}/>
        </td>
        <td>
          <input type="number" value={price}  onChange={(e)=>setPrice(e.target.value)}/>
        </td>
        <td>
          <input type="number"  value={price * qty }/>
        </td>
        <td>
          <button onClick={saveData}>+</button>
        </td>

      </tr>

      {data.map((val,index)=>(
        <tr>
          <td>{val.product}</td>
          <td>{val.qty}</td>
          <td>{val.price}</td>
          <td>{val.total}</td>
          <td>
            <button>&#10005;</button>
          </td>
        </tr>
      ))}
    </table>
    </>
  )
}

export default App


