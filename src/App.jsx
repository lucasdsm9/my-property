import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Heritage from './pages/Heritage';
import Layout from './pages/Layout'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path='/dashboard' element= {<Dashboard />}/>
            <Route path='/heritage' element= {<Heritage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App
