import Item from "../Item/Item"
import Filter from "../filter/filter"

const filtradoProducto = ({filterState, filtrarCambios}) =>(
    <h2>Buscador</h2>
)

const ItemList = ({products}) => {
    return(
        <>
        
            <Filter>
                { products.map(products => <Item key={products.id} products={products}/>) }
                {filtradoProducto}
            </Filter>
        </>  
        )
}

export default ItemList