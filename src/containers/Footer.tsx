import { Link } from 'react-router-dom'
import { MSLogo, FbIcon, YtIcon, InstaIcon, TwitterIcon } from 'public'

export function Footer() {
  return (
    <footer className="max-w-4xl mx-auto">
      <section className="flex justify-between items-center">
        <MSLogo></MSLogo>
        <ul className="flex gap-4 font-DM text-light py-12">
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
      <hr className="text-darkmid opacity-30 max-w-4xl mx-auto" />
      <section className="grid grid-flow-col grid-cols-3 justify-items-center py-12">
        <ul className="font-DM justify-self-start flex gap-4 text-light">
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
        <span className="font-DM text-light font-medium justify-self-center">
          ©2022 Moreseconds
        </span>
        <ul className="flex gap-4 items-center justify-self-end">
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
