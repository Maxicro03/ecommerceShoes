import { useState } from "react"

export const Filter = ({children, products}) => {
    const [filterState, setFilterState] = useState('')

    const filtrarCambios = (event) =>{
        setFilterState(event.target.value)
    }
    return(
        <>
            { children({filterState, filtrarCambios, products}) }
        </>
    )
}

