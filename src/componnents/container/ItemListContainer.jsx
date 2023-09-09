import { useEffect, useState } from "react"
import { mFetch } from "../../utils/mockFetch"
import ItemList from "../ItemList/ItemList"
import { Filter } from "../filter/filter"

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
                    {loading ? <h2>Loading ...</h2> : 
                    <Filter products={products}>
                        {({ filterState}) => (
                        <>
                            <ItemList products={products} filterState={filterState} />
                        </>
                        )}
                    </Filter>
                    }
                </div>
            </center>
    )
}

export default ItemListContainer