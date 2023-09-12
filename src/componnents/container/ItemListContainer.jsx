import { useEffect, useState } from "react"
import { mFetch } from "../../utils/mockFetch"
import ItemList from "../ItemList/ItemList"
import MenuLista from "../menu/menu";
import Banner from "../banner/banner";

const ItemListContainer = ({filterState, setFilterState}) => {
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