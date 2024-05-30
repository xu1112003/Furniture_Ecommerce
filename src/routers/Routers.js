import React from 'react'
import Home from '../pages/Home'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import ProductDetail from '../pages/ProductDetail'
import Shop from '../pages/Shop'
import { Routes, Route } from 'react-router-dom'



const Routers = () => {
  return (
    <Routes>
        <Route path='home' element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='shop/:id' element={<ProductDetail/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<SignUp/>}/>

    </Routes>
  )
}

export default Routers