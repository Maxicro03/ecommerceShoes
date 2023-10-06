import { useCartContext } from "../../context/CartContext"


const ItemCart = () =>{
    
    const {cartList, deleteProductCart} = useCartContext()

    return(
        cartList.map(prod => 
            <div className="productoCarrtio" key={`${prod.id}_${prod.cambioTalle}`}>
                <img src={prod.imgPrincipal} className="imgCart" alt="" width="100px"/>
                <div className="modeloMarcaCarrito">
                    <p className="fuenteCart">{prod.marca.charAt(0).toUpperCase() + prod.marca.slice(1).toLowerCase()}</p>
                    <p className="modeloCart fuenteCart">{prod.modelo}</p>
                </div>
                <p className="contenedorDatoCart">Talle<strong>{prod.cambioTalle}</strong></p>
                <p className="contenedorDatoCart">Cantidad<strong>{prod.cantidad}</strong></p>
                <p className="contenedorDatoCart precioCart">USD {prod.precio * prod.cantidad}<strong className="tamañoCart">C/u {prod.precio}</strong></p>
                <button className="eleiminarProductoCart" onClick={() =>deleteProductCart(prod.id, prod.cambioTalle, prod.cantidad)}>X</button>
            </div>))
}

export default ItemCart