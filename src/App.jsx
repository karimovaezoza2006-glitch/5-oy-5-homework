import React from 'react'
import Header from './components/Header'
import Showcase from './components/Showcase'
import Cards from './components/Cards'
import Community from './components/Community'
import Logo from './components/Logo'
import Service from './components/Service'
import Keeps from './components/Keeps'
import Links from './components/Links'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <Header/>
      <Showcase/>
      <Cards/>
      <Community/>
      <Logo/>
      <Service/>
      <Keeps/>
      <Links/>
      <Footer/>
    </div>
  )
}

export default App