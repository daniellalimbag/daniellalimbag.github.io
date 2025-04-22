import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import './index.css'
import CursorFollower from "./components/CursorFollower";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <CursorFollower/>
      <Navbar />
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
      {/* to be added: projects, contact*/}
    </div>
  )
}