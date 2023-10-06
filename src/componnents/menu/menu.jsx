import { NavLink } from "react-router-dom"

const MenuLista = ({setFilterState}) => {
    return(
        <div className="contenedorMenu">
            <ul className="listado">
              <NavLink className={({isActive})=>isActive ? 'btnActivo' : 'opciones'} to='/marca/adidas'  onClick={() => setFilterState('Adidas')}>
                <li>
                  Adidas
                </li>
              </NavLink>
              <NavLink className={({isActive})=>isActive ? 'btnActivo' : 'opciones'} to='/marca/nike' onClick={() => setFilterState('Nike')}>
                <li>
                  Nike
                </li>
              </NavLink>
              <NavLink className={({isActive})=>isActive ? 'btnActivo' : 'opciones'} to='/marca/puma'  onClick={() => setFilterState('Puma')}>
                <li>
                  Puma
                </li>
              </NavLink>
              <NavLink className={({isActive})=>isActive ? 'btnActivo' : 'opciones'} to='/marca/newbalance'  onClick={() => setFilterState('NewBalance')}>
                <li>
                New Balance
                </li>
              </NavLink>
            </ul>
        </div>
    )
}

export default MenuLista