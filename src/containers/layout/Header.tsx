import { useEffect, useRef, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { Hamburger, MSLogo } from 'public/svgs'
import { NavMenu } from '../../components/NavMenu'

export function Header() {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false)

  function toggleHamburgerMenu() {
    setHamburgerMenuOpen(!hamburgerMenuOpen)
  }

  return (
    <header className="grid items-center h-20 grid-cols-2">
      <Link to="/">
        <MSLogo className="mx-4 lg:mx-16" />
      </Link>
      <NavMenu />
      <Link
        to=""
        className="block mr-4 lg:hidden justify-self-end lg:mr-16"
        onClick={() => toggleHamburgerMenu()}
      >
        <Hamburger className="fill-accent" />
      </Link>
      <NavMenu mobile open={hamburgerMenuOpen} />
    </header>
  )
}
