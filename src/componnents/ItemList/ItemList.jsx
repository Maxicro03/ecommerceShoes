import Item from "../Item/Item"


const ItemList = ({products, filterState}) => {
    let filteredProducts;

  if (filterState === '') {
    filteredProducts = products;
  }else if(["Adidas", "Nike", "Puma", "New Balance"].includes(filterState)) {
    console.log(filteredProducts = products.filter(
        (product) =>
          product.marca.toLowerCase().includes(filterState.toLowerCase())
    ))
  }else {
    filteredProducts = products.filter(
      (product) =>
        product.modelo.toLowerCase().includes(filterState.toLowerCase())
    );
  }
  console.log(filterState)
    return(
        <>
        {filteredProducts.map((product) => (
        <Item key={product.id} products={product} />
        ))}
        </>  
        )
}

export default ItemList