import { Ref, useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Link, NavLink } from 'react-router-dom'
import { ReactComponent as DownArrow } from '../public/arrow_down.svg'

type Props = {
  mobile?: Boolean
  open?: Boolean
  ref?: React.Ref<HTMLDivElement>
}

export function NavMenu({ mobile, open }: Props) {
  const [subMenu, setSubMenu] = useState(false)
  const containerRef = useRef(null)

  function toggleSubMenu() {
    setSubMenu(!subMenu)
  }

  useEffect(() => {
    if (mobile && open) {
      gsap.to(containerRef.current, { x: '0' })
    } else if (mobile && !open) {
      gsap.to(containerRef.current, { x: '100%' })
    }
  }, [open])
  return (
    <nav
      ref={containerRef}
      className={
        mobile
          ? 'absolute left-0 right-0 top-32 translate-x-full overflow-hidden bg-surface lg:hidden'
          : 'hidden  lg:mx-16 lg:block lg:max-w-2xl lg:justify-self-end'
      }
    >
      <ul
        className={
          mobile
            ? 'grid items-center gap-8 font-DM text-light  text-center text-2xl'
            : 'font-DM flex items-center gap-12 text-mid'
        }
      >
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
            className="hover:text-accent flex flex-nowrap justify-center items-center gap-2"
            onClick={() => toggleSubMenu()}
          >
            Services
            <DownArrow className="inline scale-150" />
          </Link>
          <ul
            className={
              !subMenu
                ? 'hidden'
                : mobile
                ? 'flex flex-col gap-8 mt-8'
                : 'absolute top-full -left-10 -right-10 flex flex-col items-center mt-2 bg-light rounded border-2'
            }
          >
            <li className="w-full text-center p-2 hover:bg-mid hover:text-light">
              <Link to="">Service 1</Link>
            </li>
            <li className="w-full text-center p-2 hover:bg-mid hover:text-light">
              <Link to="">Service 2</Link>
            </li>
            <li className="w-full text-center p-2 hover:bg-mid hover:text-light">
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
  )
}
