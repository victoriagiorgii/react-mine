import React from "react";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail=({producto})=>{
    const onAdd= (cantidad)=>{
        console.log (`Compraste ${cantidad} productos`);
    }
    return(
        <div className="d-flex flex-column align-items-center">
          <h3>Detalle de: {producto.titulo} </h3>
          <img src={producto.img} alt=''/>
          <p>{producto.descripcion}</p>
          <p>{producto.precio}</p>
          <p>{producto.stock}</p>
          <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/>
        </div>
    )
}