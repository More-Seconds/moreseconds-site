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
    <section className="relative mb-0 sm:mb-0 sm:pt-20 xl:pt-40">
      <div className="absolute z-10 w-screen pt-10 sm:top-0">
        <Smoke className="h-auto w-[100vw]" />
      </div>
      <div className="flex flex-col mx-4 sm:flex-row sm:mr-8 mr-8">
        <div className="z-20 md:w-1/2">
          <Satellite className="z-20 w-2/3 h-auto md:w-full xl:w-2/3 sm:-translate-x-14 xl:translate-x-14" />
        </div>
        <div className="z-20">
          <Heading
            level="2"
            className="mt-20 mb-10 text-3xl text-center sm:max-w-2xl xl:max-w-2xl sm:mt-0 sm:text-left xl:text-5xl xl:mt-12"
          >
            We're trusted service partners for the most influential industry leaders.
          </Heading>
          <ul className="flex w-full h-48 gap-4 justify-between">
            <li className="flex items-center justify-center w-full border-b-2 bg-darker border-indigo-400/20 rounded-xl xl:w-80 xl:h-64 xl:p-8">
              <img
                src={HawkeMediaLogo}
                alt="Hawke Media Logo"
                className="w-[75%]"
              />
            </li>
            <li className="flex items-center justify-center w-full border-b-2 bg-darker border-indigo-400/20 rounded-xl xl:w-80 xl:h-64 xl:p-6">
              <img
                src={DyrdekLogo}
                alt="Dyrdek Machine Logo"
                className="w-[50%]"
              />
            </li>
          </ul>
        </div>
      </div>
      <BallOrange className="absolute top-0 z-0 sm:block -left-full sm:scale-50 xl:scale-100 sm:left-10" />
      <HollowStar className="absolute z-0 -left-full sm:left-1/2 top-24" />
      <BallBlue className="absolute z-0 top-24 right-20 sm:top-32 sm:right-20 xl:top-40 xl:right-40" />
      <Cloud className="absolute right-0 z-0 top-44" />
      <HollowStar className="absolute z-0 top-80 right-20" />
      <Star className="absolute z-0 scale-50 top-48 right-16 md:hidden" />
    </section>
  )
}
