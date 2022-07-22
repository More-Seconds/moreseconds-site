import { BodyText } from 'components/typography/BodyText'
import {
  BallBlue,
  BallOrange,
  BallPurple,
  CaseStudy1,
  CaseStudy2,
  CaseStudy3,
  CaseStudy4,
  CaseStudy5,
  HollowStar,
  SmallSaturn,
  Star,
  UFO
} from 'public/svgs'

export function Planets() {
  return (
    <section className="relative">
      <div className="relative w-32 h-32 mx-auto sm:w-48 sm:h-48 lg:h-64 lg:w-64">
        <CaseStudy1 className="w-full h-min" />
        <BodyText className="absolute w-20 text-sm leading-4 sm:w-auto text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          Marketing Agencies
        </BodyText>
      </div>
      <div className="flex justify-around gap-6 mb-8">
        <div className="relative w-32 h-32 sm:w-48 sm:h-48 lg:h-64 lg:w-64">
          <CaseStudy2 className="w-full h-min" />
          <BodyText className="absolute w-20 text-sm leading-4 sm:w-auto text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            Startups
          </BodyText>
        </div>
        <div className="relative w-32 h-32 sm:w-48 sm:h-48 lg:h-64 lg:w-64">
          <CaseStudy3 className="w-full h-min" />
          <BodyText className="absolute w-20 text-sm leading-4 sm:w-auto text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            Businesses
          </BodyText>
        </div>
      </div>
      <div className="flex justify-evenly">
        <div className="relative w-32 h-32 sm:w-48 sm:h-48 lg:h-64 lg:w-64">
          <CaseStudy4 className="w-full h-min" />
          <BodyText className="absolute w-20 text-sm leading-4 sm:w-auto text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            Event Producers
          </BodyText>
        </div>
        <div className="relative w-32 h-32 sm:w-48 sm:h-48 lg:h-64 lg:w-64">
          <CaseStudy5 className="w-full h-min" />
          <BodyText className="absolute w-20 text-sm leading-4 sm:w-auto text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            Agencies with In-House Teams
          </BodyText>
        </div>
      </div>
      <UFO className="absolute w-24 h-24 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:w-64 sm:h-64 lg:w-[500px] lg:h-[500px]" />
      <BallPurple className="absolute scale-50 top-8 right-8 sm:top-[70%] lg:right-48 lg:scale-75" />
      <BallBlue className="absolute scale-50 bottom-4 left-36 sm:left-80 lg:left-[50%] lg:bottom-24" />
      <BallBlue className="absolute hidden sm:block sm:top-24 sm:left-12" />
      <BallOrange className="absolute scale-[30%] bottom-24 -left-2 sm:left-4 sm:scale-50 lg:bottom-40 lg:left-48 lg:scale-50" />
      <Star className="absolute scale-[35%] left-1/2 -translate-x-1/2 bottom-8 sm:left-1/2 sm:translate-x-0 sm:bottom-16 lg:left-[55%] lg:bottom-40 lg:scale-50" />
      <Star className="absolute hidden lg:block lg:left-[39%] lg:top-64 lg:scale-[25%]" />
      <HollowStar className="absolute scale-50 -right-3 bottom-32 sm:right-48 sm:bottom-48 lg:top-0 lg:right-12 lg:scale-75" />
      <SmallSaturn className="absolute hidden scale-75 sm:block sm:top-32 sm:right-60 lg:right-[35%] lg:top-48" />
    </section>
  )
}
