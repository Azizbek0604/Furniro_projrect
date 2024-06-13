import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Shop from './pages/shop/Shop'
import Product from './pages/product/Product'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Header />
       <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/product' element={<Product />} />
       </Routes>
       <Footer />
      </BrowserRouter>


    </div>
  )
}

export default App