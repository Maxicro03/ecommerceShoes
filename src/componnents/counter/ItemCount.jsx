import { useEffect } from "react"
import { useCantidad } from "../hooks/useCantidad"

const ItemCount = ({initial, stock, onAdd, sizeChange, cartQuantity}) =>{
    const {amount, productAdd, productSubstract, resetAmount} = useCantidad(initial, stock, cartQuantity)

   
    useEffect(()=>{
        resetAmount()
    },[sizeChange])

    return( 
            <>
                <div className="btnMultiplicador">
                    <div className="btnRestar">
                        <button onClick={productSubstract}>- 1</button>
                    </div>
                    <label className="contenedorCantidad">
                        <strong className="multiplicador" id="multiplicadorValor">{cantidad}</strong>
                    </label>
                    <div className="btnSumar">
                        <button onClick={productAdd}>+ 1</button>
                    </div>
                </div>
                <button className="bteAgregar" onClick={()=> (onAdd(amount), resetAmount())}>Agregar al carrito</button>
            </>
        )
}


export default ItemCount
