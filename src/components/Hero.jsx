import { memo } from 'react'
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

const Hero = () => (
  <section className="bg-gradient-to-b px-3 sm:px-10 from-[#F5F7FF] via-[#fffbee] to-[#E6EFFF] pt-6 h-full">
    <header className="flex items-center justify-between px-6 py-3 md:py-4 shadow-sm max-w-5xl rounded-full mx-auto w-full bg-white">
      <nav className="max-md:absolute max-md:top-0 max-md:left-0 max-md:overflow-hidden items-center justify-center max-md:h-full max-md:w-0 transition-[width] bg-white/50 backdrop-blur flex-col md:flex-row flex gap-8 text-gray-900 text-sm font-normal">
        <Link className="hover:text-indigo-600" to="/">
          Accueil
        </Link>
        <Link className="hover:text-indigo-600" to="/services">
          Services
        </Link>
        <Link className="hover:text-indigo-600" to="/teams">
          Teams
        </Link>

        <Link className="hover:text-indigo-600" to="/contact">
          Contact
        </Link>
        <button className="md:hidden text-gray-600" aria-label="Close menu">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strocke-Width="2"
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
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 10.39a2.889 2.889 0 1 0 0-5.779 2.889 2.889 0 0 0 0 5.778M7.5 1v.722m0 11.556V14M1 7.5h.722m11.556 0h.723m-1.904-4.596-.511.51m-8.172 8.171-.51.511m-.001-9.192.51.51m8.173 8.171.51.511"
              stroke="#353535"
              strocke-Width="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <Link
          className="hidden md:flex bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition"
          to="/login"
        >
          Se connecter
        </Link>
        <button className="md:hidden text-gray-600" aria-label="Open menu">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strocke-Width="2"
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
        className="mt-16 mb-6 flex items-center space-x-2 border border-indigo-600 text-indigo-600 text-xs rounded-full px-4 pr-1.5 py-1.5 hover:bg-indigo-50 transition"
        type="button"
      >
        <span>Bonjour</span>
        <span className="flex items-center justify-center size-6 p-1 rounded-full bg-indigo-600">
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
              strocke-Width="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <h1 className="text-center text-gray-900 font-extrabold text-3xl sm:text-4xl md:text-5xl max-w-2xl leading-tight">
        Soyez les bien Bienvenus à{' '}
        <span className="text-indigo-600">Helionux-Agency</span>
      </h1>
      <p className="mt-4 text-center text-gray-600 max-w-md text-sm sm:text-base leading-relaxed">
        Learn why professionals trust our solution to complete their customer
        journey.
      </p>
      <button
        className="mt-8 bg-indigo-600 text-white px-6 pr-2.5 py-2.5 rounded-full text-sm font-medium flex items-center space-x-2 hover:bg-indigo-700 transition"
        type="button"
      >
        <span>Notre Equipes</span>
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
            strocke-Width="1.8"
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

export default memo(Hero)
