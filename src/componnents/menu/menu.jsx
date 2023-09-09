
const MenuLista = ({filterState, filtrarCambios}) => {
    return(
        <div className="contenedorMenu">
            <ul className="listado">
                <li className="opciones" value={filterState} onClick={filtrarCambios}>Adidas</li>
                <li className="opciones" value="Nike">Nike</li>
                <li className="opciones" value="Puma">Puma</li>
                <li className="opciones" value="New Balance">New Balance</li>
            </ul>
        </div>
    )
}

export default MenuLista