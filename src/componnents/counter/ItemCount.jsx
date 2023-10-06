import { useEffect } from "react"
import { useCantidad } from "../hooks/useCantidad"

const ItemCount = ({initial, stock, onAdd, cambioTalle, cantidadARestar}) =>{
    const {cantidad, productAdd, productSubstract, resetCantidad} = useCantidad(initial, stock, cantidadARestar)

   
    useEffect(()=>{
        resetCantidad()
    },[cambioTalle])

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
                <button className="bteAgregar" onClick={()=> (onAdd(cantidad), resetCantidad())}>Agregar al carrito</button>
            </>
        )
}


export default ItemCount
