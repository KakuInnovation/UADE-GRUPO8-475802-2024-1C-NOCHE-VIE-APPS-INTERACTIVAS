import { useState } from 'react'
import Header from './components/header.jsx'
import Home from './components/home.jsx'
import Footer from './components/footer.jsx'
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
