import React from 'react'
import { Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import BuyCredit from './pages/BuyCredit'
import Result from './pages/Result'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Toaster } from 'sonner';
const App = () => {
  return (
    <div className='h-full flex flex-col'>
      <Toaster closeButton richColors position='bottom-right' />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/result" element={<Result/>} />
        <Route path="/buy" element={<BuyCredit/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App