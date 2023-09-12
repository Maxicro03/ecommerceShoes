import ItemCount from "../counter/ItemCount"
import Talles from "../talles/talles"

const ItemDetail = ({product}) => {
    
    const onAdd = (cantidad) => {
        console.log(cantidad)
      }    

    return(
        <>
            <div className="contenedorDetalle">
                <h2>Vista del detalle</h2>
                <div className="contenedorConjunto">
                    <div key={product.id} className="contenedorImgPorducto">
                        <div>
                            <img src={product.imgPrincipal} alt="Imagen Procuto" width="600px"/>
                        </div> 
                    </div>
                    <div className="contenedorProductoTalles">
                        <div className="marcaModelo">
                            <p className="marca">{product.marca}</p>
                            <p className="modelo">{product.modelo}</p>
                        </div>
                        <div className="talleCantidad">
                            <div className="talle">
                                <Talles/>
                            </div>
                            <div className="contenedorPrecio">
                                <p >USD <span className="precioNumero">{product.precio}</span></p>
                            </div>
                        </div>
                        <div className="cantidad">
                                <ItemCount initial={1} stock ={20} onAdd={onAdd}/>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ItemDetail