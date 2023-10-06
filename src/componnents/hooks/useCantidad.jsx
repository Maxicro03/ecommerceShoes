import { useState } from "react";

export const useCantidad = (min, max, cartQuantity)=>{
    const [amount, setAmount] = useState(min)

    const resetAmount = () =>{
        setAmount(1)
    }

    const productAdd = () =>{
        if(cartQuantity !== undefined){
            if(amount < (max - cartQuantity.cantidad) ){
                setAmount(amount + 1)
            }
        }
        else{
            if(amount < (max) ){
                setAmount(amount + 1)
            }
        }

    }

    const productSubstract = () =>{
        if(amount > min){
            setAmount(amount - 1)
        }
    }
    return {amount, productAdd, productSubstract, resetAmount, max}
}