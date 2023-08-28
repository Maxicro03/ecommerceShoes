const Contenedor = (greeting) =>{
    console.log(greeting)
    return(
        <div className="contenedorInfo">
            <h1 className="tituloInfo">{greeting.info}</h1>
        </div>
    )
}

export default Contenedor