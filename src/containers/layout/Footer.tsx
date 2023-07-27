import { Link } from 'react-router-dom'
import { MSLogo, FbIcon, YtIcon, InstaIcon, TwitterIcon } from 'public/svgs'

export function Footer() {
  return (
    <footer className="max-w-4xl mx-auto sm:mx-16 sm:mt-10 xl:mt-0 md:mx-16 md:max-w-6xl xl:mx-auto">
      <section className="flex flex-col items-center justify-between xl:flex-row ">
        <MSLogo className="mt-10 sm:mt-0" />
        <ul className="font-DM text-light sm:grid sm:gap-[2rem] sm:py-[2rem] smgrid-cols-1 md:flex md:flex-row md:gap-4 md:py-12">
          <li className="text-center">
            <Link to="/" className="hover:text-accent">
              Home
            </Link>
          </li>
          <li className="text-center">
            <Link to="/uiux" className="hover:text-accent">
              Services
            </Link>
          </li>
          <li className="text-center">
            <Link to="/about" className="hover:text-accent">
              About
            </Link>
          </li>
          <li className="text-center">
            <Link to="/pricing" className="hover:text-accent">
              Pricing
            </Link>
          </li>
          <li className="text-center">
            <Link to="/who-we-help" className="hover:text-accent">
              Why Us
            </Link>
          </li>
          <li className="text-center">
            <Link to="#contact" className="hover:text-accent">
              Contact
            </Link>
          </li>
        </ul>
      </section>
      <hr className="max-w-4xl mx-auto text-darkmid opacity-30 md:max-w-6xl" />
      <section className="grid grid-flow-col py-12 sm:justify-items-center sm:grid-rows-3 sm:gap-0 sm:pt-4 sm:grid-cols-1 sm:items-center sm:text-center md:grid-cols-3 md:pt-4 md:mx-4 md:grid-rows-1 lg:pt-8">
        <ul className="hidden gap-4 sm:flex sm:w-full sm:justify-center font-DM justify-self-start text-light">
          <li>
            <Link to="" className="hover:text-accent">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="" className="hover:text-accent">
              Terms of Use
            </Link>
          </li>
        </ul>
        <span className="font-medium font-DM text-light justify-self-start sm:justify-self-center sm:order-3 sm:mt-[.8rem] md:order-[unset] md:mt-0">
          ©2023 Moreseconds. All rights reserved
        </span>
        <ul className="flex items-center gap-6 sm:justify-center sm:w-full md:w-auto md:justify-self-end">
          <li>
            <a href="https://www.facebook.com/More-Seconds-104270218954241">
              <FbIcon />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCooFeC30xA943Uear0-3yKA">
              <YtIcon />
            </a>
          </li>
          <li>
            <a href="https://instagram.com/getmoreseconds">
              <InstaIcon />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/getmoreseconds">
              <TwitterIcon />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  )
}
