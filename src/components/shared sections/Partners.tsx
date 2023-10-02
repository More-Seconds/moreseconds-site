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
    <section className="relative mb-0 sm:mb-0 sm:pt-20 md:pt-[7rem] xl:pt-40">
      <div className="absolute z-10 w-screen pt-10 sm:top-0">
        <Smoke className="h-auto w-[100vw]" />
      </div>
      <div className="flex flex-col md:mx-4 md:flex-rows md:mr-8">
        <div className="z-20 md:w-1/2">
          <Satellite className="z-20 sm:w-[80%] sm:-translate-x-14 h-auto md:w-full xl:w-2/3 xl:translate-x-14" />
        </div>
        <div className="z-20 sm:px-[1rem] sm:mt-[3rem] sm:text-center md:text-left md:pl-0 md:pr-[64px] md:mt-[5rem]">
          <Heading
            level="2"
            className="text-3xl text-center sm:max-w-2xl sm:mt-8 sm:text-center md:mt-20 md:mb-10 md:text-left md:text-[1.75rem] lg:text-[2.5rem] lg:leading-[1] xl:max-w-2xl xl:text-5xl xl:mt-12"
          >
            We're trusted service partners for the most influential industry
            leaders.
          </Heading>
          <ul className="flex w-full h-48 gap-4 justify-between">
            <li className="flex items-center justify-center w-full border-b-2 bg-darker border-indigo-400/20 rounded-0 xl:w-80 xl:h-64 xl:p-8">
              <img
                src={HawkeMediaLogo}
                alt="Hawke Media Logo"
                className="w-[75%]"
              />
            </li>
            <li className="flex items-center justify-center w-full border-b-2 bg-darker border-indigo-400/20 rounded-0 xl:w-80 xl:h-64 xl:p-6">
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
      <HollowStar className="absolute z-0 -left-full sm:left-1/2 lg:top-[2rem] xl:top-24" />
      <BallBlue className="absolute sm:top-0 scale-[8%] xl:right-[10%] xl:top-10" />
      <Cloud className="absolute right-0 z-0 sm:top-[21rem] md:top-44" />
      <HollowStar className="absolute z-0 top-80 lg:right-10 xl:right-20" />
      <Star className="absolute z-0 scale-50 lg:top-60 lg:right-16 xl:top-48 xl:right-16 md:hidden" />
    </section>
  )
}
