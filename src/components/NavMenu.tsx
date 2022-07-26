import { Ref, useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Link, NavLink } from 'react-router-dom'
import { ArrowDown } from 'public/svgs'

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
      gsap.to(containerRef.current, {
        x: '0'
      })
    } else if (mobile && !open) {
      gsap.to(containerRef.current, {
        x: '-100%'
      })
    }
  }, [open])
  return (
    // <div className="absolute z-30 bg-surface sm:static">
    <nav
      ref={containerRef}
      className={
        mobile
          ? 'absolute z-30 top-16 w-[100vw] bg-surface inset-0 h-screen -translate-x-full pt-10'
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
        <li className="relative">
          <Link
            to="#"
            className="flex items-center justify-center gap-2 hover:text-accent flex-nowrap"
            onClick={() => toggleSubMenu()}
          >
            Services
            <ArrowDown className="inline scale-150 fill-light" />
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
            <li className="w-full p-2 text-center hover:bg-mid hover:text-light">
              <Link to="/uiux">UI/UX Design</Link>
            </li>
            <li className="w-full p-2 text-center hover:bg-mid hover:text-light">
              <Link to="/web-development">Web Development</Link>
            </li>
            <li className="w-full p-2 text-center hover:bg-mid hover:text-light">
              <Link to="/research-and-analysis">Research &#38; Analysis</Link>
            </li>
            <li className="w-full p-2 text-center hover:bg-mid hover:text-light">
              <Link to="/website-updates">Website Updates</Link>
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
          <a href="#contact" className="hover:text-accent">
            Contact
          </a>
        </li>
      </ul>
    </nav>
    // </div>
  )
}
