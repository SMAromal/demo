import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './components/Signup'
import NavBar from './components/NavBar'
import NavBaru from './components/NavBaru'
import NavBara from './components/NavBara'
import Userlogin from './components/Userlogin'
import Addbook from './components/Addbook'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './components/Home'
import Userlist from './components/Userlist'
import Booklist from './components/Booklist'
import Profile from './components/Profile'
import Individual from './components/Individual'
import HomePage from './components/HomePage'


function App() {
  const [count, setCount] = useState(0)
  const location = useLocation()
  const isUserRoute = ['/indi','/home', '/profile'].some(path => location.pathname.startsWith(path));
  const isAdminRoute = ['/add', '/userlist','/booklist'].some(path => location.pathname.startsWith(path));

  return (
    <>
    {isAdminRoute ? <NavBara /> : isUserRoute ? <NavBaru /> : <NavBar />}
    <Routes>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/add' element={<Addbook/>}></Route>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/login' element={<Userlogin/>}></Route>
    <Route path='/userlist' element={<Userlist/>}></Route>
    <Route path='/booklist' element={<Booklist/>}></Route>
    <Route path='/profile' element={<Profile/>}></Route>
    <Route path='/indi' element={<Individual/>}></Route>
    </Routes>
    </>
  )
}

export default App
