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
          : 'hidden  xl:mx-16 xl:block xl:max-w-3xl xl:justify-self-end'
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
            onClick={() => toggleServices()}
          >
            Capabilities
            <ArrowDown className="inline scale-150 fill-light" />
          </Link>
          <ul
            className={
              !services
                ? 'hidden'
                : mobile
                ? 'flex flex-col gap-8 mt-8'
                : 'absolute top-full left-0 -right-20 flex flex-col items-center mt-2 bg-darkmid border border-mid'
            }
          >
            <li className={submenuStyles}>
              <Link to="/web-development">Web Development</Link>
            </li>
            <li className={submenuStyles}>
              <Link to="/uiux">UI/UX Design</Link>
            </li>
            <li className={submenuStyles}>
              <Link to="/website-updates">Website Updates</Link>
            </li>
            <li className={submenuStyles}>
              <Link to="/research-and-analysis">Research &#38; Analysis</Link>
            </li>
          </ul>
        </li>

        {/* <li className="relative">
          <Link
            to="#"
            className="flex items-center justify-center gap-2 hover:text-accent flex-nowrap"
            onClick={() => toggleCases()}
          >
            Cases
            <ArrowDown className="inline scale-150 fill-light" />
          </Link>
          <ul
            className={
              !cases
                ? 'hidden'
                : mobile
                ? 'flex flex-col gap-8 mt-8'
                : 'absolute top-full left-0 -right-20 flex flex-col items-center mt-2 bg-light border border-darkmid'
            }
          >
            <li className={submenuStyles}>
              <Link to="/case-studies">Case Studies</Link>
            </li>
            <li className={submenuStyles}>
              <Link to="/algorithm-agency">Algorithm Agency</Link>
            </li>
            <li className={submenuStyles}>
              <Link to="/pct">Plant Cell Technology</Link>
            </li>
          </ul>
        </li> */}
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
        <li className="min-w-max">
          <NavLink
            to="/who-we-help"
            className={({ isActive }) =>
              isActive ? 'text-accent' : 'hover:text-accent'
            }
          >
            Why Us
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
