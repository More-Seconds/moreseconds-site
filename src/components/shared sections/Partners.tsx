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
            className="mt-20 mb-10 text-3xl text-center sm:max-w-2xl lg:max-w-2xl sm:mt-0 sm:text-left lg:text-5xl lg:mt-12"
          >
            We're Trusted Service Partners For The Most Influential Industry
            Leaders
          </Heading>
          <ul className="flex w-full h-48 gap-4">
            <li className="flex items-center justify-center bg-darkermid rounded-xl w-full lg:w-80 lg:h-64 lg:p-8">
              <img
                src={HawkeMediaLogo}
                alt="Hawke Media Logo"
                className="w-[75%]"
              />
            </li>
            <li className="flex items-center justify-center bg-darkermid rounded-xl w-full lg:w-80 lg:h-64 lg:p-6">
              <img
                src={DyrdekLogo}
                alt="Dyrdek Machine Logo"
                className="w-[50%]"
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
      <Star className="absolute z-0 scale-50 top-48 right-16 md:hidden" />
    </section>
  )
}
