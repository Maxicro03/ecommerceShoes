import { useEffect } from "react"
import { useCartContext } from "../../context/CartContext"

const Cart = () => {

    const {cartList, amountCarrito, downloadLocalStorage} = useCartContext()

    useEffect(() => {
        
        downloadLocalStorage()
      }, [])

    return(
        <>
            <div className="carrito">
                    <i class="fa-solid fa-cart-shopping carro"></i>
                    {cartList.length > 0 ? <div className="cantidadCarrito">
                        <p className="textoCantidadCarrito">{amountCarrito()}</p>
                    </div> :""}
            </div>
        </>
    )
}

export default Cart