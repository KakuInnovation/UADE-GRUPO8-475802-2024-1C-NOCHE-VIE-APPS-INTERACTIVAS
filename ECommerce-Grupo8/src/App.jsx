import { useState } from 'react'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Home />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default App
