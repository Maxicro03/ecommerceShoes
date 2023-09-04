import { useEffect, useState } from "react"
import { mFetch } from "../../utils/mockFetch"

const ItemListContainer = () => {
    const [products, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        mFetch()
        .then(respuesta => setProduct(respuesta))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }, [])

    console.log(products)
    return(
        <center>
            <div className="contenedorCards">
                {loading ? <h2>Loading ...</h2> : products.map(products =>  <div key={products.id} className="card">
                                                                                <div className="cardBody">
                                                                                    <img src={products.imgPrincipal} alt="Imagen Procuto" width="200px"/>
                                                                                    <p className="marca">{products.marca}</p>
                                                                                    <p className="modelo">{products.modelo}</p>
                                                                                    <hr />
                                                                                    <p className="precio">USD {products.precio}</p>
                                                                                </div> 
                                                                            </div>
                    
                    )}
            </div>
        </center>
    )
}

export default ItemListContainer