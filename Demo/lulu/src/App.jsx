import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/navbar'
import Categories from './components/Categories'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
    <Routes>
        <Route path="/" element={<Categories />} />
    </Routes>
    </>
  )
}

export default App
