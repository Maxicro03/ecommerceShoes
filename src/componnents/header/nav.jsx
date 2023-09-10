import Carrito from "../carrito/carrito"

const Navbar = ({ filterState, setFilterState }) => {
    const filtrarCambios = (event) => {
        setFilterState(event.target.value)
    }
    return(
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
                        <input type="text" value={filterState} onChange={(e) => filtrarCambios(e)} placeholder="Buscar..." className="buscadorTexto"/>
                    </div>
                    <Carrito />
                </nav>
    )
}

export default Navbar