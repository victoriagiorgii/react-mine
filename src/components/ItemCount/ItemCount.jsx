import React,{useState} from "react";
import { Button } from "react-bootstrap";

export const ItemCount= ({stock, initial,onAdd}) =>{
  const [count, setCount] = useState(initial)
  const restar = () =>{
    if(count < stock){
        setCount(count + 1)
    }
  }
  const sumar = () =>{
    if(count < stock){
      setCount(count - 1)
    }
    }
  
    return(
    <div>
        <div className="d-flex flex-column align-items-center">
         <Button variant="Dark" onClick={restar}>-</Button>
         <span className="btn">{count}</span>
         <Button variant="Dark" onClick={sumar}>+</Button>
        </div>
        <Button variant="Dark" disabled={count === 0} onClick={()=> onAdd(count)}>Comprar</Button>
    </div>
  )
}
