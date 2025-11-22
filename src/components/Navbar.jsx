import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const navItemClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'text-blue-700' : 'text-slate-700 hover:text-blue-700'
    }`

  return (
    <header className="w-full bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200 sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 text-white flex items-center justify-center font-bold">BP</div>
          <span className="font-semibold text-slate-900">BlueWave Plumbing</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={navItemClass} end>
            Home
          </NavLink>
          <NavLink to="/services" className={navItemClass}>
            Services
          </NavLink>
          <NavLink to="/about" className={navItemClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={navItemClass}>
            Contact
          </NavLink>
        </nav>

        <Link
          to="/contact"
          className="inline-flex md:hidden items-center px-3 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          Get a Quote
        </Link>
      </div>
    </header>
  )
}

export default Navbar
