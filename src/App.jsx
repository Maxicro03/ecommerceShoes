import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navbar from './componnents/header/nav'
import ItemListContainer from './componnents/container/ItemListContainer'
import ItemDetailContainer from './componnents/detailContainer/ItemDetailContainer'
import CartContainer from './componnents/cartContainer/CartContainer'

import './App.css'


function App() {
  const [filterState, setFilterState] = useState('');

  return (
    <Router>
      <Navbar filterState={filterState} setFilterState={setFilterState} />
      <div className='contenedroGeneral'>
        <Routes>
          <Route path='/' element={<ItemListContainer filterState={filterState} setFilterState={setFilterState} />}/>
          <Route path='/marca/:cid' element={<ItemListContainer filterState={filterState} setFilterState={setFilterState} />}/>
          <Route path='/detalle/:pid' element={<ItemDetailContainer />}/>
          <Route path='/cart' element={<CartContainer />}/>  
        </Routes>
      </div>
    </Router>
  )
}

export default App
