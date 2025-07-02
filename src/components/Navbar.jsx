import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [isOpen, setOpen] = useState(false)
  return (
    <header className="flex items-center mt-6 justify-between px-6 py-3 md:py-4 shadow-sm max-w-5xl rounded-full mx-auto w-full bg-white">
      <nav
        className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:overflow-hidden items-center justify-center transition-[width] bg-white/50 backdrop-blur flex-col md:flex-row flex gap-8 text-gray-900 text-sm font-normal
        ${
          isOpen
            ? 'max-md:w-full max-md:h-full px-8 py-8 z-50'
            : 'max-md:w-0 max-md:h-0'
        }`}
      >
        <Link
          className="hover:text-indigo-600"
          to="/"
          onClick={() => setOpen(false)}
        >
          Accueil
        </Link>
        <Link
          className="hover:text-indigo-600"
          to="/services"
          onClick={() => setOpen(false)}
        >
          Services
        </Link>
        <Link
          className="hover:text-indigo-600"
          to="/teams"
          onClick={() => setOpen(false)}
        >
          Teams
        </Link>

        <Link
          className="hover:text-indigo-600"
          to="/contact"
          onClick={() => setOpen(false)}
        >
          Contact
        </Link>
        <button
          className="md:hidden text-gray-600"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          style={{ display: isOpen ? 'block' : 'none' }}
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
              strockeWidth="1.5"
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
        <button
          className="md:hidden text-gray-600"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          style={{ display: isOpen ? 'none' : 'block' }}
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
  )
}

export default Navbar
