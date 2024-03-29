import React, { useState } from 'react'
import'./sass/application.scss'
import Navigation from './components/Navigation'
import Sidebar from './components/helpers/Sidebar'
import Hero from './components/Hero'
import About from './components/AboutUs'
import Roadmap from './components/Roadmap'
import Contact from './components/Contact'
import Footer  from './components/Footer'
import "@fontsource/akaya-telivigala"
import "@fontsource/road-rage"
import "@fontsource/sora"

function App() {
  const [sidebarIsOpen, setSidebarOpen] = useState(false);

  const show = () => {
    setSidebarOpen((prevState) => !prevState);
  };
  return (
    <>
      <Navigation isOpen={show}/>
      <Sidebar toggle={sidebarIsOpen} isOpen={show} />
      <Hero />
      <About />
      <Roadmap />
      <Contact />
      <Footer />
    </>
  )
}

export default App
