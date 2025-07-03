import React from 'react'
import Navbar from '../components/Navbar'
import Slide from '../layouts/Slide'
import Footers from '../components/Footers'
import ServiceItems from '../layouts/ServiceItems'

function Services() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gradient-to-bl from-cyan-400/20 to-gray-800/25">
        <Navbar />
        <Slide />
        <ServiceItems />
        <Footers />
      </div>
    </>
  )
}

export default Services
