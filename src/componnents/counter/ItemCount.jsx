import { useCantidad } from "../hooks/useCantidad"

const ItemCount = ({initial, stock, onAdd}) =>{
    const {cantidad, productAdd, productSubstract} = useCantidad(initial, stock)

    return( 
            <>
                <div className="btnMultiplicador">
                    <div className="btnRestar">
                        <button onClick={productSubstract}>- 1</button>
                    </div>
                    <label className="contenedorCantidad">
                        <strong className="multiplicador">{cantidad}</strong>
                    </label>
                    <div className="btnSumar">
                        <button onClick={productAdd}>+ 1</button>
                    </div>
                </div>
                <button className="bteAgregar" onClick={()=> onAdd(cantidad)}>Agregar al carrito</button>
            </>
        )
}


export default ItemCount
