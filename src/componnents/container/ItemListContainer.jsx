import { useEffect, useState } from "react"
import { mFetch } from "../../utils/mockFetch"
import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList"
import MenuLista from "../menu/menu";
import Banner from "../banner/banner";


const ItemListContainer = ({filterState, setFilterState}) => {
    const [products, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const { cid } = useParams()

    useEffect(()=>{
        mFetch()
        .then(respuesta => setProduct(["adidas", "nike", "puma", "newbalance"].includes(cid) ? respuesta.filter(products=> cid === products.marca): respuesta))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }, [cid])

    return (
      <>
        <Banner />
        <MenuLista filterState={filterState} setFilterState={setFilterState}/>
        <center>
          <div className="contenedorCards">
            {loading ? (
              <h2>Loading ...</h2>
            ) : (
                <ItemList products={ products } filterState={filterState} />
                )}
          </div>
        </center>
      </>
  );
};

export default ItemListContainer