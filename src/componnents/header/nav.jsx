import Carrito from "../carrito/carrito"

const Navbar = () => {
    return(
        <nav className="barraNavegacion">
            <div className="logoContent">
                 <img src="./src/componnents/images/logo.jpg" alt="logo" className="logo"/>
            </div>
            <div className="buscador">
                <div className="lupa">
                    <p><i class="fa-solid fa-magnifying-glass"></i></p>
                </div>
                <input type="text" className="buscadorTexto" name="filter" id="busqueda" />
            </div>
            <Carrito />
        </nav>
    )
}

export default Navbar