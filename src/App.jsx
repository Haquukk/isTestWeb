import react, { useState } from 'react'
import { LoadingScreen, Navbar, Hero, Contact, About, Work, Footer } from './components'
import { BrowserRouter } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-gradient-to-bl from-secondary from-65% to-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Work />
        <Contact />
      </div>
      <LoadingScreen />
      <Footer/>
    </BrowserRouter>
  )
}

export default App 
