import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import HeroContent from './components/MainContent/HeroContent'
import RecentTm from './components/MainContent/RecentTm'
import GamesCard from './components/MainContent/GamesCard'
import PreminumTm from './components/MainContent/PreminumTm'
import RecentReview from './components/MainContent/RecentReview'
import About from './components/MainContent/About'
import Footer from './components/MainContent/Footer'


const App = () => {
  return (
    <div>
      <NavBar/>
        <main>
          <HeroContent/> 
          <RecentTm/>
          <GamesCard/>
    
          
          <PreminumTm/>
          <RecentReview/>
          <About/>
        </main>
        <Footer/>
    </div>
  )
}

export default App