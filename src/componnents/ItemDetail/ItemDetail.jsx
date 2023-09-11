import ItemCount from "../counter/ItemCount"
import Talles from "../talles/talles"

const ItemDetail = ({product}) => {
    
    const onAdd = (cantidad) => {
        console.log(cantidad)
      }    

    return(
        <>
            <div key={product.id} >
                <h2>Vista del detalle</h2>
                <div >
                    <img src={product.imgPrincipal} alt="Imagen Procuto" width="200px"/>
                    <p >{product.marca}</p>
                    <p >{product.modelo}</p>
                    <p >USD {product.precio}</p>
                </div> 
            </div>
            <Talles/>
            <ItemCount initial={1} stock ={20} onAdd={onAdd}/>
            </>

    )
}

export default ItemDetail