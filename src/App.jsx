import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import Bundler from './Layout/Bundler'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AppLayout/>}>
      <Route path='/' element={<Bundler/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App