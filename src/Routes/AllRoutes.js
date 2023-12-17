import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import MenSection from '../Pages/MenSection'
import WomenSection from '../Pages/WomenSection'
import Cart from '../Pages/Cart'
import Checkout from '../Pages/Checkout'
import Product from '../Pages/Product'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/menSection' element={<MenSection/>} />
        <Route path='/womensection' element={<WomenSection/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<Checkout/>} />
    </Routes>
  )
}

export default AllRoutes