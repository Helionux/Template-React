import React from 'react'

const cardData = [
  {
    title: 'Unlock Your Creative Flow',
    image: 'src/assets/premium_photo-1682724028871-80fe21ac920b.avif',
  },
  {
    title: 'Design Your Digital Future',
    image: 'src/assets/istockphoto-2189202711-612x612.webp',
  },
  {
    title: 'Build with Passion, Ship with Pride',
    image: 'src/assets/Image12.avif',
  },
  {
    title: 'Think Big, Code Smart',
    image: 'src/assets/istockphoto-1282518866-612x612.webp',
  },
  {
    title: 'Think Big, Code Smart',
    image: 'src/assets/OIP-528143261.jpeg',
  },
  {
    title: 'Think Big, Code Smart',
    image: 'src/assets/OIP-1727394745.jpeg',
  },
  {
    title: 'Think Big, Code Smart',
    image: 'src/assets/photo-1489514354504-1653aa90e34e.avif',
  },
  {
    title: 'Think Big, Code Smart',
    image: 'src/assets/photo-1615406020658-6c4b805f1f30.avif',
  },
  {
    title: 'Think Big, Code Smart',
    image: 'src/assets/photo-1508450859948-4e04fabaa4ea.avif',
  },
  {
    title: 'Think Big, Code Smart',
    image: 'src/assets/photo-1714562377019-e6d03ea94ba2.avif',
  },
]

function Slide() {
  const [stopScroll, setStopScroll] = React.useState(false)
  const animationDuration = cardData.length * 5.5 // secondes

  return (
    <div>
      <style>{`
        .marquee-inner {
          animation: marqueeScroll ${animationDuration}s linear infinite;
          will-change: transform;
        }
        .marquee-inner.paused {
          animation-play-state: paused;
        }
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <section className="relative overflow-hidden border-b-2 border-gray-500 p-10 max-w-full">
        <div
          className="overflow-hidden w-full relative max-w-6xl mx-auto"
          onMouseEnter={() => setStopScroll(true)}
          onMouseLeave={() => setStopScroll(false)}
          aria-label="Défilement des cartes"
        >
          <div className="absolute left-0 top-15 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-[#F5F7FF] to-transparent" />
          <div
            className={`marquee-inner flex w-fit ${stopScroll ? 'paused' : ''}`}
          >
            <div className="flex mt-20 pb-10">
              {[...cardData, ...cardData].map((card, index) => (
                <div
                  key={index}
                  className="w-56 mx-4 h-[20rem] relative group hover:scale-95 transition-transform duration-300 rounded-lg overflow-hidden shadow-lg"
                  tabIndex={0}
                  aria-label={card.title}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Dégradé droit */}
          <div className="absolute right-0 top-15 h-full w-20 md:w-20 z-10 pointer-events-none bg-gradient-to-l from-[#F5F7FF] to-transparent" />
        </div>
      </section>
    </div>
  )
}

export default React.memo(Slide)
