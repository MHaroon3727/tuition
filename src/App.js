import React from 'react'
import "./App.css"
import Navigation from './components/Navigation'
import Center from './components/Center'
import Companies from "./components/Companies"
import Our_programs from "./components/Our_programs"
import Contact from "./components/Contact"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Reviews from './components/Reviews'
import Footer from './components/Footer'
import Features from './components/Features'





function App() {
  return (
    <>
      
      <Navigation/>
      <Center/>
      <Companies/>
      <Our_programs/>
      <Reviews/>
      <Features/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
