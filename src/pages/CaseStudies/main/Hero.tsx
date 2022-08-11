import { BodyText } from 'components/typography/BodyText'
import { Heading } from 'components/typography/Heading'
import { BallOrange, Planet, BallBlue, Cloud, CloudFull } from 'public/svgs'

export function Hero() {
  return (
    <section className="relative py-10 sm:pt-32 sm:pb-0 xl:py-48">
      <Heading
        level="1"
        className="text-[45px] mx-auto text-center break-words mb-5 max-w-[13ch] sm:max-w-none"
      >
        <span className="text-[#3939FA] sm:text-5xl xl:text-[64] xl:leading-[72px]">
          #
        </span>
        <span className="break-words sm:text-5xl xl:text-6xl">
          MoreSecondsMadeThat
        </span>
      </Heading>
      <BodyText className="w-[30ch] text-center mx-auto sm:w-auto xl:text-lg">
        If you can dream it, More Seconds can make it.
      </BodyText>
      <BallOrange className="absolute top-4 scale-[25%] sm:right-0 sm:top-32 xl:top-72 xl:right-8" />
      <BallOrange className="absolute hidden sm:block sm:right-96 sm:top-0 sm:scale-75" />
      <Planet className="absolute scale-50 -bottom-8 -left-16 sm:-top-8 sm:-left-12 xl:left-16 xl:top-12 xl:scale-75" />
      <BallBlue className="absolute scale-50 right-2 top-1/2 sm:top-1 sm:right-[65%]" />
      <BallBlue className="absolute hidden scale-50 sm:block sm:top-1 sm:right-12" />
      <div className="hidden h-12 sm:flex sm:justify-between">
        <CloudFull className="relative -left-32" />
        <Cloud className="w-72" />
      </div>
    </section>
  )
}
