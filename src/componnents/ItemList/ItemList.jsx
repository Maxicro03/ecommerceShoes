import Item from "../Item/Item"


const ItemList = ({products, filterState}) => {
    return(
        <>
        {
            filterState === ''?
            products.map(products => <Item key={products.id} products={products}/>) 
            :
            products.filter(products => products.modelo.toLowerCase().includes(filterState.toLowerCase())).map(products => <Item key={products.id} products={products}/>) 
        }
        </>  
        )
}

export default ItemList