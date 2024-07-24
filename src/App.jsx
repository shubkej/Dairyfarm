import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Placeorder from './pages/Placeorder/Placeorder'
import LoginPopUp from './components/LoginPopUp/LoginPopUp'
import AllProducts from './pages/AllProducts/AllProducts'
 

const App = () => {

  const [showLogin, SetshowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopUp SetshowLogin={SetshowLogin} /> : <></>}
      <div className='app'>
        <Navbar SetshowLogin={SetshowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/allProduct' element={<AllProducts />} />
          <Route path='/order' element={<Placeorder />} />
        </Routes>
      </div>
      
    </>
  )
}

export default App