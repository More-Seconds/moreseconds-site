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
      <div className="relative w-32 h-32 mx-auto sm:w-48 sm:h-48 xl:h-64 xl:w-64">
        <CaseStudy1 className="w-full h-min" />
        <BodyText className="absolute w-20 text-sm leading-4 sm:w-auto text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 xl:text-[24px] xl:leading-[30px]">
          Marketing Agencies
        </BodyText>
      </div>
      <div className="flex justify-between sm:justify-around gap-6 mb-8">
        <div className="relative w-32 h-32 sm:w-48 sm:h-48 xl:h-64 xl:w-64">
          <CaseStudy2 className="w-full h-min" />
          <BodyText className="absolute w-20 text-sm leading-4 sm:w-auto text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 xl:text-[24px] xl:leading-[30px]">
            Startups
          </BodyText>
        </div>
        <div className="relative w-32 h-32 sm:w-48 sm:h-48 xl:h-64 xl:w-64">
          <CaseStudy3 className="w-full h-min" />
          <BodyText className="absolute w-20 text-sm leading-4 sm:w-auto text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 xl:text-[24px] xl:leading-[30px]">
            Businesses
          </BodyText>
        </div>
      </div>
      <div className="flex justify-evenly">
        <div className="relative w-32 h-32 sm:w-48 sm:h-48 xl:h-64 xl:w-64">
          <CaseStudy4 className="w-full h-min" />
          <BodyText className="absolute w-20 text-sm leading-4 sm:w-auto text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 xl:text-[24px] xl:leading-[30px]">
            Event Producers
          </BodyText>
        </div>
        <div className="relative w-32 h-32 sm:w-48 sm:h-48 xl:h-64 xl:w-64">
          <CaseStudy5 className="w-full h-min" />
          <BodyText className="absolute w-20 text-sm leading-4 sm:w-auto text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 xl:text-[24px] xl:leading-[30px]">
            Agencies with In-House Teams
          </BodyText>
        </div>
      </div>
      <UFO className="absolute w-24 h-24 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:w-64 sm:h-64 xl:w-[500px] xl:h-[500px]" />
      <BallPurple className="absolute scale-50 top-8 right-8 sm:top-[70%] xl:right-48 xl:scale-75" />
      <BallBlue className="absolute scale-50 bottom-4 left-36 sm:left-80 xl:left-[50%] xl:bottom-24" />
      <BallBlue className="absolute hidden sm:block sm:top-24 sm:left-12" />
      <BallOrange className="absolute scale-[30%] bottom-24 -left-2 sm:left-4 sm:scale-50 xl:bottom-40 xl:left-48 xl:scale-50" />
      <Star className="absolute scale-[35%] left-1/2 -translate-x-1/2 bottom-8 sm:left-1/2 sm:translate-x-0 sm:bottom-16 xl:left-[55%] xl:bottom-40 xl:scale-50" />
      <Star className="absolute hidden xl:block xl:left-[39%] xl:top-64 xl:scale-[25%]" />
      <HollowStar className="absolute scale-50 -right-3 bottom-32 sm:right-48 sm:bottom-48 xl:top-0 xl:right-12 xl:scale-75" />
      <SmallSaturn className="absolute hidden scale-75 sm:block sm:top-32 sm:right-60 xl:right-[35%] xl:top-48" />
    </section>
  )
}
