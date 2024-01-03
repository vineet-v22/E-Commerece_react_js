import React from 'react'
import Commom from './Commom'
import web from '../src/images/coffee-792113_1280.jpg'
const About = () => {
  return (
    <>
      <Commom name="Welcome to About Page By" imgsrc={web} visit="/contact" btnName="Contact Us" />
    </>
  )
}

export default About
