import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import Header from './components/Header'
import Footer from './components/Footer'
import { useState } from 'react'

import './App.css'


function App() {
const [currentPage, setCurrentPage] = useState(2)
const renderPage = () => {
  if (currentPage === 0) {
    return <AboutMe/>
  } else if (currentPage === 1) {
    return <Contact/>
  } else if (currentPage === 2) {
    return <Portfolio/>
  } else {
    return <Resume/>
  }      
} 
   return ( 

  
  <>
  <Header/>
  {renderPage()}
  <Footer/>
    
    </>
  )
}

export default App
