import { useParams } from "react-router-dom";
import Item from "../Item/Item"


const ItemList = ({products, filterState}) => {
    let filteredProducts;
    const { cid } = useParams()


  if (filterState === '') {
    filteredProducts = products;
  }else if(["adidas", "nike", "puma", "newbalance"].includes(filterState.toLowerCase())) {
    filteredProducts = products.filter(
        (product) =>
          product.marca.toLowerCase().includes(filterState.toLowerCase()
    ))
  }else {
    filteredProducts = products.filter(
      (product) =>
        product.modelo.toLowerCase().includes(filterState.toLowerCase())
    );
  }
    return(
        <>
        {filteredProducts.map((product) => (
        <Item key={product.id} products={product} />
        ))}
        </>  
        )
}

export default ItemList