import { createContext, useContext, useState } from "react";

export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)


export const CartContextProvider = ({ children }) =>{

    const [cartList, setCartList] = useState([])



    const descargarLocalStorage = () => {
        const storedCart = localStorage.getItem("cart")
        if (storedCart && storedCart !== undefined) {
          setCartList(JSON.parse(storedCart))
        }
        else if(storedCart == undefined){
            localStorage.setItem("cart", JSON.stringify([]))
        }
      }
    
    const cantidadCarrito = () =>{
        let sumaProductos = 0
        cartList.forEach(element => {
            sumaProductos += element.cantidad 
          })
          return sumaProductos
    }

    const precioTotal = () =>{
        let sumaPrecioTotal = 0
        cartList.forEach(element => {
            sumaPrecioTotal += element.precio * element.cantidad
          })
          return sumaPrecioTotal
    }

    const addProduct = (newProduct) =>{
        const isProductInCart = cartList.some(
            (product) =>
              product.marca === newProduct.marca &&
              product.modelo === newProduct.modelo &&
              product.cambioTalle === newProduct.cambioTalle   
          )
                
            if(!isProductInCart){
                const updatedCartList = [...cartList, newProduct]
                setCartList(updatedCartList)
                localStorage.setItem("cart", JSON.stringify(updatedCartList))
            
            }else{
                let productIndex = cartList.findIndex(
                    (product) =>
                      product.marca === newProduct.marca &&
                      product.modelo === newProduct.modelo &&
                      product.cambioTalle === newProduct.cambioTalle
                  )

                  if (productIndex !== -1) {
                    const updatedCartList = [...cartList]
                    if((updatedCartList[productIndex].cantidad += newProduct.cantidad) <= 20){
                        updatedCartList[productIndex].cantidad += newProduct.cantidad
                    }
                    else{
                        updatedCartList[productIndex].cantidad = 20
                    }
              
                    setCartList(updatedCartList)
                    localStorage.setItem("cart", JSON.stringify(updatedCartList))
                  }
            }


    }

    const deleteProductCart = (id, talle) => {
        let productoMarcado ;
        cartList.map((product)=>{
                product.id === id &&
                product.cambioTalle === talle ? productoMarcado = product : null

        })
        const updatedCartList = cartList.filter((prod) => {
            return (prod !== productoMarcado)
        })
        setCartList(updatedCartList)
        localStorage.setItem("cart", JSON.stringify(updatedCartList))
    } 

    const deleteCart = () => {
        setCartList([])
        localStorage.setItem("cart", JSON.stringify([]))
    }

    const isProductInCart = (talle, cid) => {
        const productInCart = cartList.find((product) => {
            return product.id === cid && parseFloat(product.cambioTalle) === parseFloat(talle)
        })
      
        return productInCart;
      }

    return(
        <CartContext.Provider value={{
            cartList,
            addProduct,
            deleteCart,
            deleteProductCart,
            cantidadCarrito,
            precioTotal,
            descargarLocalStorage,
            isProductInCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

