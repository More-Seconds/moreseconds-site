import { Link } from 'react-router-dom'
import { MSLogo, FbIcon, YtIcon, InstaIcon, TwitterIcon } from 'public'

export function Footer() {
  return (
    <footer className="max-w-4xl mx-auto">
      <section className="flex items-center justify-between">
        <MSLogo></MSLogo>
        <ul className="flex gap-4 py-12 font-DM text-light">
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
      <section className="grid grid-flow-col grid-cols-3 py-12 justify-items-center">
        <ul className="flex gap-4 font-DM justify-self-start text-light">
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
        <span className="font-medium font-DM text-light justify-self-center">
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
