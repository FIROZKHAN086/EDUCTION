import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Notes from './Components/Notes'
import Result from './Components/Result'
import NotFound from './Pages/NotFound'
import Jobs from './Components/Jobs'
import About from './Pages/About'
const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/notes' element={<Notes />} />
      <Route path='/result' element={<Result />} />
      <Route path='/jobs' element={<Jobs />} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App