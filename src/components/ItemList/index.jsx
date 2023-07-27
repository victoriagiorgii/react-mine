import React from "react";
import {Item} from '../Item/index'
import { Title } from "../Title";


export const ItemList = ( {productos, titulo} ) => {

  return (
    <div className="container">
        <h2 className="main-title">{(titulo)}</h2>

        <div className="productos">
            { productos.map((prod) => <Item producto={prod} key={prod.id} />) }
        </div>
    
    </div>
  )
}

