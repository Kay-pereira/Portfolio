import { useState } from 'react'
import { motion } from 'framer-motion'
import HeroSection from './Pages/Home'
import ProjectsSection from './Pages/Projects'
import AboutSection from './Pages/About'
import Navbar from './Components/NavBar'
import BookingForm from './Components/BookingForm'
import Footer from './Components/Footer'




function App() {

  return (
    <>
       <Navbar/>
      <section id="home"><HeroSection /></section>
      <section id="about"><AboutSection /></section>
      <section id="projects"><ProjectsSection /></section>
      <section id="contact"> {/* Booking form will go here */} </section>
       <HeroSection />
       <ProjectsSection />
       <AboutSection />
       <BookingForm/>
       <Footer/>
    </>
  )
}

export default App
