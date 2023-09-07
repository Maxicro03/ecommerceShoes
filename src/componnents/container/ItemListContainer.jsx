import { useEffect, useState } from "react"
import { mFetch } from "../../utils/mockFetch"
import ItemList from "../ItemList/ItemList"

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
                    {loading ? <h2>Loading ...</h2> : <ItemList products={products} /> }
                </div>
            </center>
    )
}

export default ItemListContainer