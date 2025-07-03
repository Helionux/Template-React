import React from 'react'

const cardData = [
  {
    title: 'Unlock Your Creative Flow',
    image:
      'https://images.unsplash.com/photo-1543487945-139a97f387d5?w=1200&auto=format&fit=crop&q=60',
  },
  {
    title: 'Design Your Digital Future',
    image:
      'https://images.unsplash.com/photo-1529254479751-faeedc59e78f?w=1200&auto=format&fit=crop&q=60',
  },
  {
    title: 'Build with Passion, Ship with Pride',
    image:
      'https://images.unsplash.com/photo-1618327907215-4e514efabd41?w=1200&auto=format&fit=crop&q=60',
  },
  {
    title: 'Think Big, Code Smart',
    image:
      'https://images.unsplash.com/photo-1583407723467-9b2d22504831?w=1200&auto=format&fit=crop&q=60',
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

      <section className="relative overflow-hidden border-b-2 border-gray-500 p-19 max-w-full">
        <div
          className="overflow-hidden w-full relative max-w-6xl mx-auto"
          onMouseEnter={() => setStopScroll(true)}
          onMouseLeave={() => setStopScroll(false)}
          aria-label="Défilement des cartes"
        >
          {/* Dégradé gauche */}
          <div className="absolute left-0 top-15 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-[#F5F7FF] to-transparent" />
          {/* Marquee */}
          <div
            className={`marquee-inner flex w-fit ${stopScroll ? 'paused' : ''}`}
          >
            <div className="flex mt-25 pb-10">
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
                  <div className="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-300 absolute bottom-0 left-0 w-full h-full bg-black/40 backdrop-blur-sm">
                    <p className="text-white text-lg font-semibold text-center drop-shadow">
                      {card.title}
                    </p>
                  </div>
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
