import React, { useRef } from 'react'
import { LanguageProvider } from './components/LanguageProvider'
import Header from './components/Header'
import Hero from './components/Hero'
import Activities from './components/Activities'
import Hotels from './components/Hotels'
import Flights from './components/Flights'
import Transport from './components/Transport'
import Restaurants from './components/Restaurants'
import Planner from './components/Planner'
import Footer from './components/Footer'

function AppContent() {
  const activitiesRef = useRef(null)
  const planRef = useRef(null)

  const scrollTo = (ref) => {
    if (ref?.current) ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header onPlan={() => scrollTo(planRef)} />
      <main>
        <Hero onExplore={() => scrollTo(activitiesRef)} onPlan={() => scrollTo(planRef)} />
        <div ref={activitiesRef}><Activities /></div>
        <Hotels />
        <Flights />
        <Transport />
        <Restaurants />
        <div ref={planRef}><Planner /></div>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}
