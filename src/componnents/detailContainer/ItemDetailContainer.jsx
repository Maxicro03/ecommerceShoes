import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { mFetch } from "../../utils/mockFetch"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    useEffect(()=>{
        mFetch(1)
        .then(resp => setProduct(resp))
        .catch(err => console.log(err))
    },[])
    return(
        <div>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer