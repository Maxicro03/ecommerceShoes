
const Filter = ({children}) => {
    const [filterState, setFilterState] = useState("")

    const filtrarCambios = (event) =>{
        setFilterState(event.target.value)
    }
    return(
        <>
            { children({filterState, filtrarCambios}) }
        </>
    )
}

export default Filter