import { Link } from "react-router-dom"
import Cart from "../carrito/carrito"

const Navbar = ({ setFilterState }) => {
    

    const filterChanges = (event) => {
        setFilterState(event.target.value)
    }

    const resetFilter = () =>{
        setFilterState("")
    }

    
    return(
                <nav className="barraNavegacion">
                    <Link className="logoContent" to='/' >
                        <img src=".././src/componnents/images/logo.jpg" alt="logo" className="logo" onClick={resetFilter}/>
                    </Link>
                    <div className="buscador">
                        <div className="lupa">
                            <p>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </p>
                        </div>
                        <input type="text"  onChange={(e) => filterChanges(e)} placeholder="Buscar..." className="buscadorTexto"/>
                    </div>
                    <Link to='/cart'>
                        <Cart />
                    </Link>
                </nav>
    )
}

export default Navbar