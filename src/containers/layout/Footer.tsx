import { Link } from 'react-router-dom'
import { MSLogo, FbIcon, YtIcon, InstaIcon, TwitterIcon } from 'public/svgs'

export function Footer() {
  return (
    <footer className="max-w-4xl mx-auto">
      <section className="flex flex-col items-center justify-between sm:flex-row">
        <MSLogo className="mt-10 sm:mt-0" />
        <ul className="flex flex-col gap-4 py-12 sm:flex-row font-DM text-light">
          <li>
            <Link to="" className="hover:text-accent">
              Item 1
            </Link>
          </li>
          <li>
            <Link to="" className="hover:text-accent">
              Item 2
            </Link>
          </li>
          <li>
            <Link to="" className="hover:text-accent">
              Item 3
            </Link>
          </li>
          <li>
            <Link to="" className="hover:text-accent">
              Item 4
            </Link>
          </li>
          <li>
            <Link to="" className="hover:text-accent">
              Item 5
            </Link>
          </li>
        </ul>
      </section>
      <hr className="max-w-4xl mx-auto text-darkmid opacity-30" />
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
        <ul className="flex items-center gap-4 justify-self-end">
          <li>
            <FbIcon />
          </li>
          <li>
            <YtIcon />
          </li>
          <li>
            <InstaIcon />
          </li>
          <li>
            <TwitterIcon />
          </li>
        </ul>
      </section>
    </footer>
  )
}
