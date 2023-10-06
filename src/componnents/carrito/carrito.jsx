import { useEffect } from "react"
import { useCartContext } from "../../context/CartContext"

const Carrito = () => {

    const {cartList, cantidadCarrito, descargarLocalStorage} = useCartContext()

    useEffect(() => {
        
        descargarLocalStorage()
      }, [])

    return(
        <>
            <div className="carrito">
                    <i class="fa-solid fa-cart-shopping carro"></i>
                    {cartList.length > 0 ? <div className="cantidadCarrito">
                        <p className="textoCantidadCarrito">{cantidadCarrito()}</p>
                    </div> :""}
            </div>
        </>
    )
}

export default Carrito