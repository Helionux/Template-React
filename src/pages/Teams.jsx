import React from 'react'
import Navbar from '../components/Navbar'
import Cards from '../layouts/Cards'
import Footers from '../components/Footers'
function Teams() {
  return (
    <div>
      <div className="flex flex-col min-h-screen bg-gradient-to-b px-3 sm:px-10 from-[#F5F7FF] via-[#fffbee] to-[#E6EFFF]">
        <Navbar />
        <Cards />
      </div>
      <Footers />
    </div>
  )
}

export default Teams
