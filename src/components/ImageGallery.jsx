import React from 'react'

function ImageGallery() {
  return (
    <div className="py-20 max-w-full mx-auto px-5 p-10">
      <h1 class="text-3xl font-semibold text-center mx-auto">
        Our Latest Creations
      </h1>
      <p class="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
        A visual collection of our most recent works - each piece crafted with
        intention, emotion, and style.
      </p>

      <div class="flex items-center gap-6 h-[400px] w-full max-w-5xl mt-10 mx-auto">
        <div class="relative group flex-grow transition-all w-56 h-[400px] duration-500 ">
          <img
            class="h-full w-full object-cover object-center"
            src="src/assets/premium_photo-1682724028871-80fe21ac920b.avif"
            alt="image"
          />
        </div>
        <div class="relative group flex-grow transition-all w-56 h-[400px] duration-500 ">
          <img
            class="h-full w-full object-cover object-center"
            src="src/assets/OIP-921763793.jpeg"
            alt="image"
          />
        </div>
        <div class="relative group flex-grow transition-all w-56 h-[400px] duration-500 ">
          <img
            class="h-full w-full object-cover object-center"
            src="src/assets/photo-1489514354504-1653aa90e34e.avif"
            alt="image"
          />
        </div>
        <div class="relative group flex-grow transition-all w-56 h-[400px] duration-500 ">
          <img
            class="h-full w-full object-cover object-center"
            src="src/assets/premium_photo-1682724028871-80fe21ac920b.avif"
            alt="image"
          />
        </div>
      </div>
      <p>
        arm what leg skin upper air rebel milk dust march whisper cup dash nasty
        note voyage soda buffalo alley mention twist game cup crucial
      </p>
    </div>
  )
}

export default ImageGallery
