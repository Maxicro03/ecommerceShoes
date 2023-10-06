import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore, where} from "firebase/firestore"
import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList"
import MenuLista from "../menu/menu";
import Banner from "../banner/banner";

const Loading = () =>{
  return(
    <>
      <h2>Loading ...</h2>
    </>
  )
}

const ItemListContainer = ({filterState, setFilterState}) => {
    const [products, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const { cid } = useParams()

    useEffect(()=>{
      const db = getFirestore()
      const queryCollection = collection(db, "products")
      getDocs(queryCollection)
      .then(resp=> { 
        const productsIndividual = resp.docs.map(prod =>({id: prod.id, ...prod.data()}))
        setProduct(["adidas", "nike", "puma", "newbalance"].includes(cid) ? productsIndividual.filter(prod => cid === prod.marca) : productsIndividual)})
      .then(resp => console.log(resp))
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
    },[cid])
    return (
      <>
        <Banner />
        <MenuLista filterState={filterState} setFilterState={setFilterState}/>
        <center>
          <div className="contenedorCards">
            {loading ? (
              <Loading />
            ) : (
                <ItemList products={ products } filterState={filterState} />
                )}
          </div>
        </center>
      </>
  );
};

export default ItemListContainer