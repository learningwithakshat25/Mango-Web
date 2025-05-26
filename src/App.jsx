import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import Bundler from './Layout/Bundler'
import Product from './Pages/Product'
import ProductDetail from './Pages/ProductDetail'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AppLayout/>}>
      <Route path='/' element={<Bundler/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/product/:id' element={<ProductDetail/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App