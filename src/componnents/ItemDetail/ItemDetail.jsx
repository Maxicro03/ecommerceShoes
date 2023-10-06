import { useEffect, useState } from "react"

import ItemCount from "../counter/ItemCount"
import Size from "../talles/talles"
import { useCartContext } from "../../context/CartContext"
import { useParams } from "react-router-dom"

const ItemDetail = ({product}) => {
    const [stockSelect, setStockSelect] = useState({})
    const [sizeChange, setSizeChange] = useState()
    const [cartQuantity, setCartQuantity] = useState()

    const {pid} = useParams()
    
    const {addProduct, isProductInCart} = useCartContext()

    useEffect(()=>{
        setCartQuantity(isProductInCart(sizeChange, pid))
    },[sizeChange])

   
    const onAdd = (Amount) => {

        if(cartQuantity !== undefined){
            if(Amount <stockSelect - cartQuantity.cantidad){
                addProduct({...product, Amount, sizeChange})
            }
            else{
                console.log("estas intentando agregar mas productos de los que hay");
            }
        }
        else{
            addProduct({...product, Amount, sizeChange})
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
                                <Size stockSelect={stockSelect} setStockSelect={setStockSelect} setSizeChange={setSizeChange}/>
                            </div>
                            <div className="contenedorPrecio">
                                <p >USD <span className="precioNumero">{product.precio}</span></p>
                            </div>
                        </div>
                        <div className="cantidad">
                        {stockSelect && Object.keys(stockSelect).length > 0 && stockSelect > 0 ? (
                            <ItemCount initial={1} stock={stockSelect} onAdd={onAdd} sizeChange={sizeChange} cartQuantity={cartQuantity}/>
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