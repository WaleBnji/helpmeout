// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Navigation from "./components/Navigation"
import Hero from "./Sections/Hero"
import Features from "./Sections/Features"
import HowItWorks from "./Sections/HowItWorks"
import Footer from "./Sections/Footer"


function App() {
  

  return (
    <div>
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <Footer />

    </div>
  )
}

export default App
