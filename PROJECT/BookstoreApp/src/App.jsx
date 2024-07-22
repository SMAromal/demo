import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/Signup'
import NavBar from './components/NavBar'
import Userlogin from './components/Userlogin'
import Addbook from './components/Addbook'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Userlist from './components/Userlist'
import Booklist from './components/Booklist'
import Profile from './components/Profile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Routes>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/add' element={<Addbook/>}></Route>
    <Route path='/' element={<Signup/>}></Route>
    <Route path='/login' element={<Userlogin/>}></Route>
    <Route path='/userlist' element={<Userlist/>}></Route>
    <Route path='/booklist' element={<Booklist/>}></Route>
    <Route path='/profile' element={<Profile/>}></Route>
    </Routes>
    </>
  )
}

export default App
