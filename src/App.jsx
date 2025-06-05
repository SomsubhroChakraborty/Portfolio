import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Projects from './Components/Projects'
import Education from './Components/About'
import Contacts from './Components/Contacts'
import Footer from './Components/Footer'
function App() {
  return (
    <div className="min-h-screen bg-[#111111] ">
      <Navbar />
   <Home/>
   <Education/>
   <Projects/>
   <Contacts/>
 <Footer/>
    </div>
  )
}

export default App
