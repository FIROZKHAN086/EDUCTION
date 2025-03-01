import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Todate from '../Components/Todate'
import Card from './Card'

const Home = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
      <div>
       <Todate />
       <Card />
    </div>
  )
}

export default Home