import React from 'react'
import Commom from './Commom'
import web from '../src/images/istockphoto-1434742171-1024x1024.jpg'

const Home = () => {
  return (
    <>
      <Commom name="Grow your business with" imgsrc={web} visit="/service" btnName="Get Started"/>
    </>
  )
}

export default Home
