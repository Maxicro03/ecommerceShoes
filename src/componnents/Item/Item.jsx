import { Link } from "react-router-dom"

const Item = ({products}) => {
    return(
                                <Link to={`/detalle/${products.id}`}>
                                    <div key={products.id} className="card">
                                        <div className="cardBody">
                                            <img src={products.imgPrincipal} alt="Imagen Procuto" width="200px"/>
                                            <p className="marca">{products.marca === "newbalance" ? "New Balance" : products.marca.charAt(0).toUpperCase() + products.marca.slice(1).toLowerCase()}</p>
                                            <p className="modelo">{products.modelo}</p>
                                            <hr />
                                            <p className="precio">USD {products.precio}</p>
                                        </div> 
                                    </div>
                                </Link>
    )
}

export default Item