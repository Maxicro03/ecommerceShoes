import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/componnents/header/nav'
import Banner from './assets/componnents/banner/banner'
import MenuLista from './assets/componnents/menu/menu'
import Contenedor from './assets/componnents/container/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Banner />
      <MenuLista />
      <Contenedor info={'Ups!!! La página se encuentra en desarrollo, todavía no hay productos cargados'}/>
    </div>
  )
}

export default App
