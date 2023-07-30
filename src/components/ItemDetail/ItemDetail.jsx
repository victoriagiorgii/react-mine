import React from "react";

export const ItemDetail=({producto})=>{
    const onAdd= (cantidad)=>{
        console.log (`Compraste ${cantidad} productos`);
    }
    return(
        <div className="d-flex flex-column align-items-center">
          <h3>Detalle de: {producto.name} </h3>
          <img src={producto.img} alt={producto.name}/>
          <p>{producto.descripcion}</p>
          <p>{producto.precio}</p>
          <p>{producto.stock}</p>
        </div>
    )
}