import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navbar from './componnents/header/nav'
import ItemListContainer from './componnents/container/ItemListContainer'
import ItemDetailContainer from './componnents/detailContainer/ItemDetailContainer'

import './App.css'

function App() {
  const [filterState, setFilterState] = useState('');

  return (
    <Router>
      <Navbar filterState={filterState} setFilterState={setFilterState} />
      <div className='contenedroGeneral'>
        <Routes>
          <Route path='/' element={<ItemListContainer filterState={filterState} setFilterState={setFilterState} />}/>
          <Route path='/detalle/:pid' element={<ItemDetailContainer />}/> 
        </Routes>
      </div>
    </Router>
  )
}

export default App
