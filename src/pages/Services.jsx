import React from 'react'
import Navbar from '../components/Navbar'
import Slide from '../layouts/Slide'
import Footers from '../components/Footers'
import ServiceItems from '../layouts/ServiceItems'
import ImageGallery from '../components/ImageGallery'
// import ItemService from '../components/ItemService'

function Services() {
  return (
    <>
      <section className="bg-gray-200/80">
        <div className="flex flex-col min-h-screen  to-gray-800/25">
          <Navbar />
          <Slide />
          <ServiceItems />
          <hr className="border-b-2 border-gray-300 p-0.5" />
          {/* <ItemService /> */}
          <ImageGallery />
          <Footers />
        </div>
      </section>
    </>
  )
}

export default Services
