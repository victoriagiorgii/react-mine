
  const list=[
    {
        id:'1',
        titulo  : "ARO MARIPOSA",
        descripcion: "Aro forma mariposa de plata.",
        categoria: "Aros",
        img: '/imagenes/aros-mariposa.webp',
        precio:2000,
        stock: 10,
    },
    {
        id: '2',
        titulo: "Aro Medium",
        descripcion: "Aro colgante circular de plata.",
        categoria: "Aros",
        img: '/imagenes/Aros medium.webp',
        precio: 1000,
        stock: 8
    },
    {
        id: '3',
        titulo: "Aro Bali",
        descripcion: "Aro bali con pelotita y arandela de plata.",
        categoria: "Aros",
        img:'/imagenes/Aro bali.jpg',
        precio: 2000,
        stock: 5
    },
    {
        id: '4',
        titulo: "Aro Brillante",
        descripcion: "Aro de brillantes diagonal de plata.",
        categoria: "Aros",
        img: '/imagenes/aro brillante.jpg',
        precio: 3000,
        stock: 2
    },
    {
        id: '5',
        titulo: "Pulsera Corazones",
        descripcion: "Pulsera corazones de acero.",
        categoria: "Pulseras",
        img: '/imagenes/pulsera corazon.jpg',
        precio: 4500,
        stock: 6
    },
    {
        id: '6',
        titulo: "Pulsera Pando",
        descripcion: "Pulsera pando cerrada de plata.",
        categoria: "Pulseras",
        img:'/imagenes/pulsera pando.jpg',
        precio: 1500,
        stoc: 10
    },
    {
        id: '7',
        titulo: "Pulsera Diamante",
        descripcion: "Pulsera diamantes con borde y cadena de plata.",
        categoria: "Pulseras",
        img:'/imagenes/pulsera diamante.jpg',
        precio: 8000,
        stock: 4
    },
    {
        id: '8',
        titulo: "Collar Perla",
        descripcion: "Collar perla de marr y cadena de plata.",
        categoria: "Collares",
        img:'/imagenes/collar perla.jpg',
        precio: 1000,
        stock: 3
    },
    {
        id: '9',
        titulo: "Collar Inicial",
        descripcion: "Collar inicial de plata (pedir inicial).",
        categoria: "Collares",
        img: '/imagenes/collar inicial.jpg',
        precio: 11000,
        stock: 0
    },
    {
        id: '10',
        titulo: "Collar Mandaly",
        descripcion: "Collar mandaly de plata.",
        categoria: "Collares",
        img: '/imagenes/collar mandaly.jpg',
        precio: 10500,
        stock: 9
    },]
export const getProductos=()=>{
        return new Promise((resolve,reject)=>{
            let error= false
            setTimeout(()=>{
                if(error){
                  reject('No hay data')
                }else{
                    resolve(list)
                }
            },0)
        })
    }


export const getItem=(id)=>{
    return new Promise((resolve)=>{
     setTimeout(()=>{
        resolve(list.find((item)=> item.id === id))
     },2000)
    })
}
