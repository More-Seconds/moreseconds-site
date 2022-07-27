import { Link } from 'react-router-dom'
import { MSLogo, FbIcon, YtIcon, InstaIcon, TwitterIcon } from 'public/svgs'

export function Footer() {
  return (
    <footer className="max-w-4xl mx-auto sm:mx-16 sm:mt-10 lg:mt-0 md:mx-16 md:max-w-6xl lg:mx-auto">
      <section className="flex flex-col items-center justify-between lg:flex-row ">
        <MSLogo className="mt-10 sm:mt-0" />
        <ul className="flex flex-col gap-4 py-12 sm:flex-row font-DM text-light">
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
            <Link to="/case-studies" className="hover:text-accent">
              Cases
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
      <section className="grid grid-flow-col py-12 mx-4 sm:grid-cols-3 sm:justify-items-center">
        <ul className="hidden gap-4 sm:flex font-DM justify-self-start text-light">
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
        <span className="font-medium font-DM text-light justify-self-start sm:justify-self-center">
          ©2022 Moreseconds
        </span>
        <ul className="flex items-center gap-6 justify-self-end">
          <li>
            <a href="https://www.facebook.com/More-Seconds-104270218954241">
              <FbIcon />
            </a>
          </li>
          <li>
            <a href="">
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
