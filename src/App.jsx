import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from "./components/Projects";
import './index.css'
import CursorFollower from "./components/CursorFollower";
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 font-sans">
      <CursorFollower/>
      <Navbar />
      <Hero/>
      <About/>
      <Skills/>
      <Education/>
      <Projects/>
      <Contact/>
    </div>
  )
}