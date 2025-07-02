import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [isOpen, setOpen] = useState(false)
  const [theme, setTheme] = useState('light')
  return (
    <header className="flex items-center justify-between px-6 py-3 mt-6 md:py-4 shadow-sm max-w-5xl rounded-full mx-auto w-full bg-white">
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
          className="hidden md:flex bg-gradient-to-br from-green-700 to-green-500 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition"
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
  )
}

export default Navbar
