

const Talles = () => {
    
    const labels = document.querySelectorAll('.selector');

        const seleccionado = () =>{
            labels.forEach(label => {
                label.addEventListener('click', () => {
                
                    labels.forEach(lbl => lbl.classList.remove('selected'))
                    label.classList.add('selected')
                
                })
            })
        }
    return(
            <center> 
                <h2>Talles</h2>
                <div className="contenedor_talles">
                    <label className="selector" onClick={seleccionado}>
                        <input type="radio" name="talla" value="7"/><span>7</span>
                    </label>
                    <label className="selector" onClick={seleccionado}>
                        <input type="radio" name="talla" value="7.5"/><span>7.5</span>
                    </label>
                    <label className="selector" onClick={seleccionado}>
                        <input type="radio" name="talla" value="8"/><span>8</span>
                    </label>
                    <label className="selector" onClick={seleccionado}>
                        <input type="radio" name="talla" value="8.5"/><span>8.5</span>
                    </label>
                    <label className="selector" onClick={seleccionado}>
                        <input type="radio" name="talla" value="9"/><span>9</span>
                    </label>
                    <label className="selector" onClick={seleccionado}>
                        <input type="radio" name="talla" value="9.5"/><span>9.5</span>
                    </label>
                    <label className="selector" onClick={seleccionado}>
                        <input type="radio" name="talla" value="10"/><span>10</span>
                    </label>
                    <label className="selector" onClick={seleccionado}>
                        <input type="radio" name="talla" value="10.5"/><span>10.5</span>
                    </label>
                    <label className="selector" onClick={seleccionado}>
                        <input type="radio" name="talla" value="11"/><span>11</span>
                    </label>
                    <label className="selector" onClick={seleccionado}>
                        <input type="radio" name="talla" value="11.5"/><span>11.5</span>
                    </label>
                    <label className="selector" onClick={seleccionado}>
                        <input type="radio" name="talla" value="12"/><span>12</span>
                    </label>
                    <label className="selector" onClick={seleccionado}>
                        <input type="radio" name="talla" value="12.5"/><span>12.5</span>
                    </label>
                </div>
            </center>
    )
}

export default Talles