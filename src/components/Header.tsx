import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { ReactComponent as MSLogo } from '../public/ms_logo.svg'

export function Header() {
  const [subMenu, setSubMenu] = useState(false)
  function toggleSubMenu() {
    setSubMenu(!subMenu)
  }
  return (
    <header className="h-20 grid grid-cols-2 items-center">
      <Link to="/">
        <MSLogo className="mx-16" />
      </Link>
      <nav className="hidden md:mx-16 md:block md:max-w-2xl md:justify-self-end">
        <ul className="font-DM text-mid flex items-center gap-12">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-accent' : 'hover:text-accent'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/careers"
              className={({ isActive }) =>
                isActive ? 'text-accent' : 'hover:text-accent'
              }
            >
              Careers
            </NavLink>
          </li>
          <li className="relative">
            <Link
              to=""
              className="hover:text-accent"
              onClick={() => toggleSubMenu()}
            >
              Services<span className="ml-2 -translate-y-2">&#8964;</span>
            </Link>
            <ul
              className={
                !subMenu
                  ? 'hidden'
                  : 'absolute top-full -left-10 -right-10 flex flex-col items-center mt-2 bg-light rounded border-2'
              }
            >
              <li className="border-b-2 w-full text-center p-2 hover:bg-mid hover:text-light">
                <Link to="">Service 1</Link>
              </li>
              <li className="border-b-2 w-full text-center p-2 hover:bg-mid hover:text-light">
                <Link to="">Service 2</Link>
              </li>
              <li className="border-b-2 w-full text-center p-2 hover:bg-mid hover:text-light">
                <Link to="">Service 3</Link>
              </li>
              <li className="w-full text-center p-2 hover:bg-mid hover:text-light">
                <Link to="">Service 4</Link>
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'text-accent' : 'hover:text-accent'
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                isActive ? 'text-accent' : 'hover:text-accent'
              }
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/team"
              className={({ isActive }) =>
                isActive ? 'text-accent' : 'hover:text-accent'
              }
            >
              Team
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'text-accent' : 'hover:text-accent'
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
