import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navbar from './componnents/header/nav'
import Banner from './componnents/banner/banner'
import MenuLista from './componnents/menu/menu'
import ItemListContainer from './componnents/container/ItemListContainer'
import ItemDetailContainer from './componnents/detailContainer/ItemDetailContainer'

import './App.css'

function App() {
  const [filterState, setFilterState] = useState('');

  return (
    <Router>
      <Navbar filterState={filterState} setFilterState={setFilterState} />
      <div className='contenedroGeneral'>
        <Banner />
        <MenuLista filterState={filterState} setFilterState={setFilterState}/>
        <Routes>
          <Route path='/' element={<ItemListContainer filterState={filterState} />}/>
          <Route path='/detalle' element={<ItemDetailContainer />}/> 
        </Routes>
      </div>
    </Router>
  )
}

export default App
