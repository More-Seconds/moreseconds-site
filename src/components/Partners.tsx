import { SideBySide } from 'containers/shared/SideBySide'
import { SVGBackground } from 'containers/shared/SVGBackground'
import { DyrdekLogo, HawkeMediaLogo } from 'public/images'
import { Satellite, Smoke } from 'public/svgs'
import { Heading } from './Heading'

export function Partners() {
  return (
    <SVGBackground background={Smoke} className="pt-20 mb-48">
      <SideBySide svg={Satellite} reverse className="pt-32">
        <Heading level="2" className="max-w-lg mb-10">
          We're Trusted Service Partners For The Most Influential Industry
          Leaders
        </Heading>
        <ul className="grid h-48 max-w-lg grid-cols-2 grid-rows-1 gap-4">
          <li className="flex items-center p-8 bg-darkermid rounded-xl">
            <img
              src={HawkeMediaLogo}
              alt="Hawke Media Logo"
              className="w-full"
            />
          </li>
          <li className="flex items-center p-16 bg-darkermid rounded-xl">
            <img
              src={DyrdekLogo}
              alt="Dyrdek Machine Logo"
              className="w-full"
            />
          </li>
        </ul>
      </SideBySide>
    </SVGBackground>
  )
}
