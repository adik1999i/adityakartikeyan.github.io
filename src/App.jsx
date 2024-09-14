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
import Chatbot from './components/chatbot/Chatbot'
import ThemeToggle from './components/toggle/ThemeToggle'


const App = () => {
  return (
    <>
    <ThemeToggle/>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Education/>
    <Project />
    <Achievements/>
    <Contact />
    <Chatbot/>
    <Footer />


    </>
  )
}

export default App