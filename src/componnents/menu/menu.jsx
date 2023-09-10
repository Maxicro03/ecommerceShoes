
const MenuLista = ({setFilterState}) => {
    return(
        <div className="contenedorMenu">
            <ul className="listado">
        <li className="opciones" onClick={() => setFilterState('Adidas')}>
          Adidas
        </li>
        <li className="opciones" onClick={() => setFilterState('Nike')}>
          Nike
        </li>
        <li className="opciones" onClick={() => setFilterState('Puma')}>
          Puma
        </li>
        <li className="opciones" onClick={() => setFilterState('New Balance')}>
          New Balance
        </li>
      </ul>
        </div>
    )
}

export default MenuLista