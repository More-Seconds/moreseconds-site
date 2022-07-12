import { SideBySide } from 'containers/shared/SideBySide'
import { SVGBackground } from 'containers/shared/SVGBackground'
import { DyrdekLogo, HawkeMediaLogo } from 'public/images'
import {
  BallBlue,
  BallOrange,
  BallPurple,
  Cloud,
  HollowStar,
  Planet,
  Satellite,
  Smoke,
  Star
} from 'public/svgs'
import { Heading } from '../typography/Heading'

export function Partners() {
  return (
    <section className="relative mb-20 sm:mb-48 sm:pt-20 lg:pt-40">
      <div className="absolute z-10 w-screen pt-10 sm:top-0">
        <Smoke className="h-auto w-[100vw]" />
      </div>
      <div className="flex flex-col mx-4 sm:flex-row sm:mr-16">
        <div className="z-20 md:w-1/2">
          <Satellite className="z-20 w-2/3 h-auto md:w-full lg:w-2/3 sm:-translate-x-14 lg:translate-x-14" />
        </div>
        <div className="z-20">
          <Heading
            level="2"
            className="mt-20 mb-10 text-3xl text-center sm:max-w-2xl lg:max-w-lg sm:mt-0 sm:text-left"
          >
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
        </div>
      </div>
      <BallOrange className="absolute top-0 z-0 sm:block -left-full sm:scale-50 lg:scale-100 sm:left-10" />
      <HollowStar className="absolute z-0 -left-full sm:left-1/2 top-24" />
      <BallBlue className="absolute z-0 top-24 right-20 sm:top-32 sm:right-20 lg:top-40 lg:right-40" />
      <Cloud className="absolute right-0 z-0 top-44" />
      <HollowStar className="absolute z-0 top-80 right-20" />
      <Star className="absolute z-0 scale-50 top-48 right-16 md:hidden lg:-bottom-20 lg:right-1/3" />
    </section>
  )
}
