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
  const [services, setServices] = useState(false)
  const [cases, setCases] = useState(false)
  const containerRef = useRef(null)
  const submenuStyles = mobile
    ? 'w-full p-2 text-center text-base'
    : 'w-full p-2 text-center text-sm text-darkermid hover:bg-mid border-b border-mid hover:text-light'

  function toggleServices() {
    setServices(!services)
    if (cases == true && services == false) {
      setCases(false)
    }
  }

  function toggleCases() {
    setCases(!cases)
    if (cases == false && services == true) {
      setServices(false)
    }
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
          : 'hidden  xl:mr-12 xl:block xl:max-w-full xl:justify-self-end'
      }
    >
      <ul
        className={
          mobile
            ? 'grid items-center gap-8 font-DM text-light  text-center text-2xl'
            : 'font-DM flex items-center gap-12 text-mid'
        }
      >
        {/* <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-accent' : 'hover:text-accent'
            }
          >
            Home
          </NavLink>
        </li> */}
        <li className="relative">
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? 'text-accent' : 'hover:text-accent'
            }
          >
            Services
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive ? 'text-accent' : 'hover:text-accent'
            }
          >
            Portfolio
          </NavLink>
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
        <li className="ml-auto">
          <a
            href="#contact"
            className="bg-transparent text-accent border-2 py-[0.7rem] px-[0.8rem] roundned-[0.25rem] border-accent hover:text-white hover:bg-accent transition"
          >
            Book a Demo
          </a>
        </li>
      </ul>
    </nav>
    // </div>
  )
}
