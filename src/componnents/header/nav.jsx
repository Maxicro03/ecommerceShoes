import Carrito from "../carrito/carrito"
import { Filter } from "../filter/filter"

const Navbar = () => {
    return(
        <Filter>
            {({ filterState, filtrarCambios }) => (
                <nav className="barraNavegacion">
                    <div className="logoContent">
                        <img src="./src/componnents/images/logo.jpg" alt="logo" className="logo" />
                    </div>
                    <div className="buscador">
                        <div className="lupa">
                            <p>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </p>
                        </div>
                        <input type="text" value={filterState} onChange={filtrarCambios} placeholder="Buscar..." />
                    </div>
                    <Carrito />
                </nav>
            )}
        </Filter>
    )
}

export default Navbar