import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Project from './components/projects/Project'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Achievements from './components/achievements/Achievements'
import Education from './components/education/Education'


const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Education/>
    <Project />
    <Achievements/>
    <Contact />
    <Footer />


    </>
  )
}

export default App