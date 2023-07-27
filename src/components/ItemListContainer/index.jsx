import React, { useEffect, useState } from "react";
import { Title } from "../Title/index";
import { ItemList } from "../ItemList";


export const ItemListContainer=()=>{
    const [productos, setProductos]= useState([])

    const list=[
        {
            id: 1,
            titulo: "Aro Mariposa",
            descripcion: "Aro forma mariposa de plata.",
            categoria: "Aros",
            img: "/imagenes/aros-mariposa.webp",
            precio: 2000,
            stock: 10
        },
    ]


    const getProductos=()=>{
        return new Promise((resolve,reject)=>{
            let error= false
            setTimeout(()=>{
                if(error){
                  reject('Nohay data')
                }else{
                    resolve(list)
                }
            },0)
        })
    }
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


