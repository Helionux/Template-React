import { memo, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const leaderImages = [
  {
    src: 'https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?q=80&w=735&auto=format&fit=crop',
    alt: 'Leader 1',
    name: 'Helionux',
    Poste: 'PDG',
  },
  {
    src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=687&auto=format&fit=crop',
    alt: 'Leader 2',
    name: 'Helionux',
    Poste: 'DAF',
  },
  {
    src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop',
    alt: 'Leader 3',
    name: 'Helionux',
    Poste: 'DRH',
  },
  {
    src: 'https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=687&auto=format&fit=crop',
    alt: 'Leader 4',
    name: 'Helionux',
    Poste: 'Technicien',
  },
  {
    src: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=764&auto=format&fit=crop',
    alt: 'Leader 5',
    name: 'Helionux',
    Poste: 'Secrétaire',
  },
]

function Hero() {
  useEffect(() => {
    document.title = 'Bienvenue sur Helionux-Agency'
  }, [])

  const [isOpen, setOpen] = useState(false)
  const [theme, setTheme] = useState('light')

  return (
    <section className="bg-gradient-to-bl from-cyan-400/20 to-gray-800/25 px-5 sm:px-10  pt-6 h-full dark:bg-gray-900 text-gray-900 dark:text-gray-100 dar">
      <header className="flex items-center justify-between px-6 py-3 md:py-4 shadow-sm max-w-5xl rounded-full mx-auto w-full bg-[#fdfdfdef]">
        <nav
          className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:overflow-hidden items-center justify-center transition-[width] backdrop-blur flex-col md:flex-row flex gap-8 text-gray-900 text-sm font-normal
        ${
          isOpen
            ? 'max-md:w-full max-md:h-full px-8 py-8 z-50'
            : 'max-md:w-0 max-md:h-0'
        }`}
        >
          <Link
            className="hover:text-blue-600"
            to="/"
            onClick={() => setOpen(false)}
          >
            Accueil
          </Link>
          <Link
            className="hover:text-blue-600"
            to="/services"
            onClick={() => setOpen(false)}
          >
            Services
          </Link>
          <Link
            className="hover:text-blue-600"
            to="/teams"
            onClick={() => setOpen(false)}
          >
            Teams
          </Link>

          <Link
            className="hover:text-blue-600"
            to="/contact"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
          <button
            className="md:hidden text-gray-600"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            style={{ display: isOpen ? 'flex' : 'none' }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strockeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </nav>
        <div className="flex items-center space-x-4">
          <button
            className="size-8 flex items-center justify-center hover:bg-gray-100 transition border border-slate-300 rounded-md"
            aria-label="Settings"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'light' ? (
              // Icône lune (mode sombre)
              <svg
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79z"
                  stroke="#353535"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              // Icône soleil (mode clair)// Icône soleil (mode clair)
              <svg
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="5"
                  stroke="#353535"
                  strokeWidth="1.5"
                />
                <path
                  d="M12 1v2m0 18v2m10-11h-2M4 12H2m16.95-7.05l-1.41 1.41M5.05 18.36l-1.41 1.41m13.94-13.94l-1.41 1.41M5.05 5.05l-1.41 1.41"
                  stroke="#353535"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
          <Link
            className="hidden md:flex bg-gradient-to-l from-cyan-700 to-gray-800/88 text-white px-5 py-2 rounded-full text-sm font-medium hover:text-blue-600 transition"
            to="/login"
          >
            Se connecter
          </Link>
          <button
            className="md:hidden text-gray-600"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            style={{ displaye: isOpen ? 'none' : 'flex' }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strockeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
      <main className="flex-grow flex flex-col items-center max-w-7xl mx-auto w-full">
        <button
          className="mt-16 mb-6 flex font-semibold items-center space-x-2 border border-gray-600 text-gray-700 text-xs rounded-full px-4 pr-1.5 py-1.5 hover:bg-indigo-50 transition"
          type="button"
        >
          <span>Bonjour</span>
          <span className="flex items-center justify-center size-6 p-1 rounded-full bg-gradient-to-l from-cyan-700 to-gray-800/88">
            <svg
              width="14"
              height="11"
              viewBox="0 0 16 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 6.5h14M9.5 1 15 6.5 9.5 12"
                stroke="#fff"
                strockeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
        <h1 className="text-center text-gray-900 font-extrabold text-3xl sm:text-4xl md:text-5xl max-w-2xl leading-tight">
          Soyez les bien Bienvenus à{' '}
          <span className="text-cyan-800">Helionux-Agency</span>
        </h1>
        <p className="mt-4 text-center text-black-600 max-w-md text-sm sm:text-base leading-relaxed">
          Learn why professionals trust our solution to complete their customer
          journey.
        </p>
        <button
          className="mt-8 bg-gradient-to-l from-cyan-700 to-gray-800/88 text-white px-6 pr-2.5 py-2.5 rounded-full text-sm font-medium flex items-center space-x-2 hover:bg-indigo-700 transition"
          type="button"
        >
          <Link to="/teams">Notre Equipes</Link>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.821 11.999h13.43m0 0-6.714-6.715m6.715 6.715-6.715 6.715"
              stroke="#fff"
              strockeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div
          aria-label="Photos of leaders"
          className="mt-12 flex max-md:overflow-x-auto gap-6 max-w-4xl w-full pb-6"
        >
          {leaderImages.map((img) => (
            <div key={img.src} className="flex flex-col items-center">
              <img
                alt={img.alt}
                className="w-36 h-44 hover:-translate-y-1 transition duration-300 rounded-lg object-cover flex-shrink-0"
                height="140"
                src={img.src}
                width="120"
                loading="lazy"
              />
              <span className="mt-2 font-semibold text-gray-800 text-sm">
                {img.name}
              </span>
              <span className="text-gray-800 text-xs b ">{img.Poste}</span>
            </div>
          ))}
        </div>
      </main>
    </section>
  )
}

export default memo(Hero)
