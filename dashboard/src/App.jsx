import React from 'react'
import Navbar from './components/Navbar'
import Home from "./components/Home"
import Orders from "./components/Orders"
import Bids from "./components/Bids"
import Funds from "./components/Funds"
import Holdings from "./components/Holdings"
import Positions from "./components/Positions"
import Watchlist from './components/Watchlist'

import {BrowserRouter , Routes , Route ,Navigate} from "react-router"

const App = () => {
  return (
    <div className="bg-gray-300 min-h-screen">
      <BrowserRouter>

        <Navbar/>

        <div className='grid grid-cols-[1fr_2.2fr] pt-8'>
        <Watchlist/>

        <Routes>

          <Route path="/" element={<Navigate to="/dashboard" replace />}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/dashboard" element={<Home/>}/>
          <Route path="/bids" element={<Bids/>}/>
          <Route path="/positions" element={<Positions/>}/>
          <Route path="/holdings" element={<Holdings/>}/>
          <Route path="/funds" element={<Funds/>}/>

        </Routes>
        </div>

      </BrowserRouter>
    </div>
  )
}

export default App