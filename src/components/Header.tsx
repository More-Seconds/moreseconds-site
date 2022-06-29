import { useEffect, useRef, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ReactComponent as MSLogo } from '../public/ms_logo.svg'
import { ReactComponent as Hamburger } from '../public/hamburger.svg'
import { NavMenu } from './NavMenu'

export function Header() {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false)

  function toggleHamburgerMenu() {
    setHamburgerMenuOpen(!hamburgerMenuOpen)
  }

  return (
    <header className="h-20 grid grid-cols-2 items-center">
      <Link to="/">
        <MSLogo className="mx-4 lg:mx-16" />
      </Link>
      <NavMenu />
      <Link
        to=""
        className="block lg:hidden justify-self-end mr-4 lg:mr-16"
        onClick={() => toggleHamburgerMenu()}
      >
        <Hamburger className="fill-accent" />
      </Link>
      <NavMenu mobile open={hamburgerMenuOpen} />
    </header>
  )
}
