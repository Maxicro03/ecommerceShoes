import { useEffect, useState } from "react"

import ItemCount from "../counter/ItemCount"
import Talles from "../talles/talles"
import { useCartContext } from "../../context/CartContext"
import { useParams } from "react-router-dom"

const ItemDetail = ({product}) => {
    const [stockSelect, setStockSelect] = useState({})
    const [cambioTalle, setCambioTalle] = useState()
    const [cantidadCarrito, setCantidadCarrito] = useState()

    const {pid} = useParams()
    
    const {addProduct, isProductInCart} = useCartContext()

    useEffect(()=>{
        setCantidadCarrito(isProductInCart(cambioTalle, pid))
    },[cambioTalle])

   
    const onAdd = (cantidad) => {

        if(cantidadCarrito !== undefined){
            if(cantidad <stockSelect - cantidadCarrito.cantidad){
                addProduct({...product, cantidad, cambioTalle})
            }
            else{
                console.log("estas intentando agregar mas productos de los que hay");
            }
        }
        else{
            addProduct({...product, cantidad, cambioTalle})
          }    
      }



    return(
        <>
            <div key={product.id} className="contenedorDetalle">
                <h2>Vista del detalle</h2>
                <div className="contenedorConjunto">
                    <div  className="contenedorImgPorducto">
                        <div>
                            <img src={product.imgPrincipal} alt="Imagen Procuto" width="600px"/>
                        </div> 
                    </div>
                    <div className="contenedorProductoTalles">
                        <div className="marcaModelo">
                            <p className="marcaDetail">{product.marca === "newbalance" ? "New Balance" : product.marca ? product.marca.charAt(0).toUpperCase() + product.marca.slice(1).toLowerCase() : ""}</p>
                            <p className="modeloDetail">{product.modelo}</p>
                        </div>
                        <div className="talleCantidad">
                            <div className="talle">
                                <Talles stockSelect={stockSelect} setStockSelect={setStockSelect} setCambioTalle={setCambioTalle} CambioTalle={cambioTalle} onAdd={onAdd}/>
                            </div>
                            <div className="contenedorPrecio">
                                <p >USD <span className="precioNumero">{product.precio}</span></p>
                            </div>
                        </div>
                        <div className="cantidad">
                        {stockSelect && Object.keys(stockSelect).length > 0 && stockSelect > 0 ? (
                            <ItemCount initial={1} stock={stockSelect} onAdd={onAdd} cambioTalle={cambioTalle} cantidadARestar={cantidadCarrito} pid={pid} setCantidadCarrito={setCantidadCarrito}/>
                        ) : ( stockSelect < 1 ?
                            <div className="sinStock">
                                <p>Sin Stock</p>
                            </div>
                            : ""
                        )}
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ItemDetail