import React from 'react'
import Navbar from '../components/Navbar'
import Cards from '../layouts/Cards'
import Footers from '../components/Footers'
function Teams() {
  return (
    <div>
      <div className="flex flex-col min-h-screen bg-gradient-to-bl from-cyan-400/20 to-gray-800/25">
        <Navbar />
        <Cards />
      </div>
      <Footers />
    </div>
  )
}

export default Teams
