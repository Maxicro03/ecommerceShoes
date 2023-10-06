import { Link } from "react-router-dom"
import { useState } from "react"
import { addDoc, collection, doc, getDoc, getFirestore, updateDoc } from "firebase/firestore"
import Swal from 'sweetalert2'

import { useCartContext } from "../../context/CartContext"




const CartContainer = () =>{

    const {cartList, deleteCart, deleteProductCart, totalPrice} = useCartContext()
    const [nameOrder, setNameOrder] = useState()
    const [phoneOrder, setPhoneOrder] = useState()
    const [emailOrder, setEmailOrder] = useState()

    const handleAddOrder = async () => {
        const order = {};
        if(nameOrder != undefined && phoneOrder != undefined && emailOrder != undefined ){
            order.buyer = { name: nameOrder, phone: phoneOrder, email: emailOrder }
            order.items = await Promise.all(
                cartList.map(async (prod) => {
                    const queryDB = getFirestore()
                    const getDBProduct = doc(queryDB, "products", prod.id)
                    const talleToUpdate = `talle_${prod.cambioTalle.replace(".", "_")}`
                    const productDoc = await getDoc(getDBProduct)
                    const productData = productDoc.data()
                    
                    if (prod.cantidad <= productData.stock[talleToUpdate]) {
                        return {
                            id: prod.id,
                            brand: prod.marca,
                            model: prod.modelo,
                            size: prod.cambioTalle,
                            price: prod.precio,
                            quantity: prod.cantidad
                        };
                    } else {
                        Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: `No contamos con el stock suficiente de ${prod.modelo}`,
                        })
                    return order.items = null;  
                    }
                })
            )
            order.total = totalPrice()

            if(order.items.every(item => item !== null)){
                const queryDB = getFirestore()
                const orderCollection = collection(queryDB, "orders")
                addDoc(orderCollection, order)
                .then(resp => console.log(resp))
        
                for (let i = 0; i < order.items.length; i++) {
                    const prodcut = order.items[i]
                    const subtractAmount = prodcut.quantity
                    const sizeToUpdate = `talle_${prodcut.size.replace(".", "_")}`
                    const queryUpdateProduct = doc(queryDB, "products",prodcut.id, )
            
                    try{
                        const productDoc = await getDoc(queryUpdateProduct)
            
                        const productData = productDoc.data()
                        const currentStock = productData.stock[sizeToUpdate]
            
                        if (currentStock !== undefined && currentStock - subtractAmount >= 0) {
                            const newStock = currentStock - subtractAmount
                    
                            const updatedStock = { ...productData.stock, [sizeToUpdate]: newStock }
                    
                            await updateDoc(queryUpdateProduct, { stock: updatedStock })
                    
                        }
                        else{
            
                        }
                    }catch(error){
                        console.log("Error")
                    }
        
                }
                deleteCart()
                Swal.fire({
                icon: 'success',
                title: '¡Éxito!',
                text: 'La compra se realizó de forma exitosa!!!'
                })
            }
            else{
                console.log("No se realizo la compra debido a falta de stock");
            }
        }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Completa los campos del formulario para realizar la compra`,
            })
    }


    }

    return(
        <div className="contedorCart">
            {cartList.map(prod => 
                    <div className="productoCarrtio" key={prod.id}>
                        <img src={prod.imgPrincipal} className="imgCart" alt="" width="100px"/>
                        <div className="modeloMarcaCarrito">
                            <p className="fuenteCart">{prod.marca.charAt(0).toUpperCase() + prod.marca.slice(1).toLowerCase()}</p>
                            <p className="modeloCart fuenteCart">{prod.modelo}</p>
                        </div>
                        <p className="contenedorDatoCart">Talle<strong>{prod.cambioTalle}</strong></p>
                        <p className="contenedorDatoCart">Cantidad<strong>{prod.cantidad}</strong></p>
                        <p className="contenedorDatoCart precioCart">USD {prod.precio * prod.cantidad}<strong className="tamañoCart">C/u {prod.precio}</strong></p>
                        <button className="eleiminarProductoCart" onClick={() =>deleteProductCart(prod.id, prod.cambioTalle)}>X</button>
                    </div>)}
            {cartList.length > 0   ? <div className="contenedorFormulario">
                <input type="text" placeholder="Nombre..." className="formCarrito" onChange={(e)=>setNameOrder(e.target.value)}/>
                <input type="number" placeholder="Telefono..." onChange={(e)=>setPhoneOrder(e.target.value)}/>
                <input type="email" placeholder="Email..." className="formCarrito" onChange={(e)=>setEmailOrder(e.target.value)}/>
            </div> : ""}
            {cartList.length > 0   ?   <div className="contenedorBtnCart">
                                            <button onClick={deleteCart} className="vaciarCart">Vaciar Carrito</button>
                                            <button className="finalizarCart" onClick={handleAddOrder}>Finalizar Compra</button>
                                        </div> 
                                        
                                    :   <div className="contenedorComprar">
                                            <p>No hay ningun objeto en el carrito</p>
                                            <Link to='/'>
                                                <p className="redireccionComprar">Ir a comprar</p>
                                            </Link>
                                        </div>}
        </div>
    )
}

export default CartContainer