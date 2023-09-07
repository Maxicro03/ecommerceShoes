import { useEffect, useState } from "react";

export const useCantidad = (min, max)=>{
    const [cantidad, setCantidad] = useState(min)


    const productAdd = () =>{
        if(cantidad < max){
            setCantidad(cantidad + 1)
        }
    }

    const productSubstract = () =>{
        if(cantidad > min){
            setCantidad(cantidad - 1)
        }
    }
    return {cantidad, productAdd, productSubstract}
}