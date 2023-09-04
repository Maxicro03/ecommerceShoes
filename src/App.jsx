import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componnents/header/nav'
import Banner from './componnents/banner/banner'
import MenuLista from './componnents/menu/menu'
import ItemListContainer from './componnents/container/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <div className='contenedroGeneral'>
        <Banner />
        <MenuLista />
        <ItemListContainer/>
      </div>
    </div>
  )
}

export default App
