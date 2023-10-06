import { useState } from "react";

export const useCantidad = (min, max, cantidadCarrito)=>{
    const [cantidad, setCantidad] = useState(min)

    const resetCantidad = () =>{
        setCantidad(min)
    }

    const productAdd = () =>{
        if(cantidadCarrito !== undefined){
            if(cantidad < (max - cantidadCarrito.cantidad) ){
                setCantidad(cantidad + 1)
            }
        }
        else{
            if(cantidad < (max) ){
                setCantidad(cantidad + 1)
            }
        }

    }

    const productSubstract = () =>{
        console.log(cantidadCarrito)
        if(cantidad > min){
            setCantidad(cantidad - 1)
        }
    }
    return {cantidad, productAdd, productSubstract, resetCantidad, max}
}