import { Link } from "react-router-dom"
import Carrito from "../carrito/carrito"

const Navbar = ({ filterState, setFilterState }) => {
    const filtrarCambios = (event) => {
        setFilterState(event.target.value)
    }
    return(
                <nav className="barraNavegacion">
                    <Link className="logoContent" to='/'>
                        <img src=".././src/componnents/images/logo.jpg" alt="logo" className="logo" />
                    </Link>
                    <div className="buscador">
                        <div className="lupa">
                            <p>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </p>
                        </div>
                        <input type="text" value={filterState} onChange={(e) => filtrarCambios(e)} placeholder="Buscar..." className="buscadorTexto"/>
                    </div>
                    <Link to='/cart'>
                        <Carrito />
                    </Link>
                </nav>
    )
}

export default Navbar