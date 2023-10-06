import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc, getFirestore } from "firebase/firestore"


const Size = ({stockSelect, setStockSelect, setSizeChange}) => {
    const [productDetail, setProductDetail] = useState({})

    const {pid} = useParams()


    useEffect(()=>{
        const db = getFirestore()
        const queryDoc = doc(db, "products", pid)
        getDoc(queryDoc)
        .then(resp =>({id: resp.id, ...resp.data() }))
        .then(resp => setProductDetail(resp))
        .catch(err => console.log(err))
      },[])

    useEffect(() => {
        const labels = document.querySelectorAll('.selector');
        labels.forEach((label) => {
          if (label.classList.contains('selected')) {
            setStockSelect(label.querySelector('input').getAttribute('stock'));
          }
        });
      }, [stockSelect, productDetail.stock]);

    const seleccionado = (event) => {
        const labels = document.querySelectorAll('.selector')
        labels.forEach((label) => label.classList.remove('selected'))
        event.target.closest('.selector').classList.add('selected')
        setSizeChange(event.target.value)



        labels.forEach((label) => {
            if (label.classList.contains('selected')) {
              setStockSelect(event.target.getAttribute('stock'));
            }
          })
      };

        
    return(
            <center> 
                <h2>Talles</h2>
                <div className="contenedor_talles">
                    {productDetail.stock && (
                    <>
                    <label className="selector" onClick={seleccionado}>
                        <input type="radio" name="talla"  value="7" stock={productDetail.stock.talle_7}/><span>7</span>
                    </label>
                    <label className="selector" onClick={seleccionado}>
                        <input type="radio" name="talla"  value="7.5" stock={productDetail.stock.talle_7_5}/><span>7.5</span>
                    </label>
                    <label className="selector" onClick={seleccionado}>
                        <input type="radio" name="talla"  value="8" stock={productDetail.stock.talle_8}/><span>8</span>
                    </label>
                    <label className="selector" onClick={seleccionado}>
                        <input type="radio" name="talla"  value="8.5" stock={productDetail.stock.talle_8_5}/><span>8.5</span>
                    </label>
                    <label className="selector" onClick={seleccionado}>
                        <input type="radio" name="talla"  value="9" stock={productDetail.stock.talle_9}/><span>9</span>
                    </label>
                    <label className="selector" onClick={seleccionado}>
                        <input type="radio" name="talla"  value="9.5" stock={productDetail.stock.talle_9_5}/><span>9.5</span>
                    </label>
                    <label className="selector" onClick={seleccionado}>
                        <input type="radio" name="talla"  value="10" stock={productDetail.stock.talle_10}/><span>10</span>
                    </label>
                    <label className="selector" onClick={seleccionado}>
                        <input type="radio" name="talla"  value="10.5" stock={productDetail.stock.talle_10_5}/><span>10.5</span>
                    </label>
                    <label className="selector" onClick={seleccionado}>
                        <input type="radio" name="talla"  value="11" stock={productDetail.stock.talle_11}/><span>11</span>
                    </label>
                    <label className="selector" onClick={seleccionado}>
                        <input type="radio" name="talla"  value="11.5" stock={productDetail.stock.talle_11_5}/><span>11.5</span>
                    </label>
                    <label className="selector" onClick={seleccionado}>
                        <input type="radio" name="talla"  value="12" stock={productDetail.stock.talle_12}/><span>12</span>
                    </label>
                    <label className="selector" onClick={seleccionado}>
                        <input type="radio" name="talla"  value="12.5" stock={productDetail.stock.talle_12_5}/><span>12.5</span>
                    </label>
                    </>
                    )}
                </div>
            </center>
    )
}

export default Size