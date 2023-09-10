import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componnents/header/nav'
import Banner from './componnents/banner/banner'
import MenuLista from './componnents/menu/menu'
import ItemListContainer from './componnents/container/ItemListContainer'
import ItemCount from './componnents/counter/ItemCount'

function App() {
  const [filterState, setFilterState] = useState('');

  const onAdd = (cantidad) => {
    console.log(cantidad)
  }

  return (
    <div>
      <Navbar filterState={filterState} setFilterState={setFilterState} />
      <div className='contenedroGeneral'>
        <Banner />
        <MenuLista filterState={filterState} setFilterState={setFilterState}/>
        <ItemListContainer filterState={filterState} />
        <ItemCount initial={1} stock ={20} onAdd={onAdd}/>
      </div>
    </div>
  )
}

export default App
