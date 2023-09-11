import { useCantidad } from "../hooks/useCantidad"

const ItemCount = ({initial, stock, onAdd}) =>{
    const {cantidad, productAdd, productSubstract} = useCantidad(initial, stock)

    return( 
            <center>
                <button onClick={productSubstract}>- 1</button>
                <label>
                    <strong>{cantidad}</strong>
                </label>
                <button onClick={productAdd}>+ 1</button>
                <button onClick={()=> onAdd(cantidad)}>Agregar al carrito</button>
            </center>
        )
}


export default ItemCount
