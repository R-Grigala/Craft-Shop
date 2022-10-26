import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Cart from '../pages/Cart'
import ProductDetails from '../pages/ProductDetails'
import Checkout from '../pages/Checkout'
import Login from '../pages/Login'
import Singup from '../pages/Singup'

const Routers = () => {
  return (
  <Routes>
    <Route path='/' element={<Navigate to="home" />}/>
    <Route path='home' element={<Home/>}/>
    <Route path='shop' element={<Shop/>}/>
    <Route path='shop/:id' element={<ProductDetails/>}/>
    <Route path='cart' element={<Cart/>}/>
    <Route path='checkout' element={<Checkout/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='singup' element={<Singup/>}/>
  </Routes>
  );
}

export default Routers