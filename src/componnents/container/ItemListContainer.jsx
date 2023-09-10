import { useEffect, useState } from "react"
import { mFetch } from "../../utils/mockFetch"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({filterState}) => {
    const [products, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        mFetch()
        .then(respuesta => setProduct(respuesta))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }, [])


    console.log(products)
    return (
    <center>
      <div className="contenedorCards">
        {loading ? (
          <h2>Loading ...</h2>
        ) : (
            <ItemList products={ filterState ? products.filter((product) => product.modelo.toLowerCase().includes(filterState.toLowerCase())) : products } filterState={filterState} />
            )}
      </div>
    </center>
  );
};

export default ItemListContainer