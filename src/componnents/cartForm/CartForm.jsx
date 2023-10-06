
const CartForm = ({setNombreOrden, setTelefonoOrden, setEmailOrden}) =>{

    return(
        <div className="contenedorFormulario">
                <input type="text" placeholder="Nombre..." className="formCarrito" onChange={(e)=>setNombreOrden(e.target.value)}/>
                <input type="number" placeholder="Telefono..." onChange={(e)=>setTelefonoOrden(e.target.value)}/>
                <input type="email" placeholder="Email..." className="formCarrito" onChange={(e)=>setEmailOrden(e.target.value)}/>
        </div>
    )
}

export default CartForm