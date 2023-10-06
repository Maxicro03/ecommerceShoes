import { Link } from "react-router-dom"

const Item = ({products}) => {
    const getFormattedMarca = () => {
        if (products.marca) {
          return products.marca === "newbalance"
            ? "New Balance"
            : products.marca.charAt(0).toUpperCase() + products.marca.slice(1).toLowerCase();
        }
        return "Marca no disponible";
      };
    return(
                                <Link to={`/detalle/${products.id}`}>
                                    <div key={products.id} className="card">
                                        <div className="cardBody">
                                            <img src={products.imgPrincipal} alt="Imagen Procuto" width="200px"/>
                                            <p className="marca">{getFormattedMarca()}</p>
                                            <p className="modelo">{products.modelo}</p>
                                            <hr />
                                            <p className="precio">USD {products.precio}</p>
                                        </div> 
                                    </div>
                                </Link>
    )
}

export default Item