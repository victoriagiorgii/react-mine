import React, { useEffect, useState } from "react";
import {ItemList} from '../ItemList/index';
import { Title } from "../Title/index";
import { getProductos } from "../../mock/data";



export const ItemListContainer=()=>{
    const [productos, setProductos]= useState([])
  
   
    useEffect(()=>{
      getProductos()
      .then((res)=> setProductos(res))
      .catch((error)=> setProductos(error))
    },[])
    return(
        <div>
            <Title greeting='Bienvenidos a GIACCE!!'/>
            <ItemList productos={productos}/>
            
        </div>

    ) 
    
}


