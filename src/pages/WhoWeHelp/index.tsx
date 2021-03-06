import { Button } from 'components/Button'
import { Card } from 'components/Card'
import { Dedicated } from 'components/shared sections/Dedicated'
import { Signup } from 'components/forms/Signup'
import { SectionBlur } from 'components/SectionBlur'
import { Testimonials } from 'components/shared sections/Testimonials'
import { BodyText } from 'components/typography/BodyText'
import { Heading } from 'components/typography/Heading'
import { Layout } from 'containers/layout/Layout'
import { SideBySide } from 'containers/shared/SideBySide'
import {
  BallBlue,
  BallOrange,
  BallPurple,
  Cloud,
  CloudFull,
  Highlight,
  NoMaintenance,
  Planet,
  Star,
  WhoWeHelpHero
} from 'public/svgs'
import { Carousel } from './Carousel'

export function WhoWeHelp() {
  return (
    <Layout footerVariant="connect">
      <section className="relative ">
        <SideBySide
          svg={WhoWeHelpHero}
          svgStyles="mt-8 sm:mt-0 sm:-translate-x-[20%]"
          className="relative z-10 sm:mb-10"
        >
          <div className="mt-4 lg:mt-40 max-w-[1600px] lg:ml-32">
            <Heading
              level="1"
              className="mb-4 w-[10ch] text-[45px] sm:w-[16ch] sm:mt-24 lg:mb-8 sm:text-[40px] lg:text-[64px] lg:max-w-3xl"
            >
              <>Unparalleled quality at </>
              <span className="relative">
                an unbeatable
                <NoMaintenance className="absolute w-[8ch] sm:left-0 bottom-0 sm:w-full" />
              </span>
              <> value</>
            </Heading>
            <BodyText className="max-w-[27ch] mb-4 lg:max-w-md lg:mb-8 lg:text-lg">
              Benefit from the power of an entire development team for only $85
              an hour.
            </BodyText>
            <Signup variant="secondary" />
          </div>
        </SideBySide>
        <Cloud className="absolute scale-50 translate-x-[12%] -bottom-64 sm:right-0 sm:translate-x-[25%] sm:bottom-0" />
        <Cloud className="z-0 hidden sm:block sm:absolute sm:-scale-x-75 sm:scale-y-75 sm:top-6 sm:-translate-x-[20%]" />
        <BallOrange className="hidden lg:block lg:absolute lg:top-4 lg:left-64 lg:scale-50" />
        <BallBlue className="hidden lg:block lg:bottom-32 lg:left-16 lg:scale-75 lg:absolute" />
      </section>
      <section className="relative mx-4 sm:py-8">
        <Heading
          level="2"
          className=" relative max-w-[15ch] mx-auto text-center capitalize mb-4 mt-8 sm:max-w-[27ch] sm:text-[36px] lg:text-[46px] lg:max-w-[30ch] lg:mb-6"
        >
          <>
            We???re disrupting traditional dev shops, one happy client at a time
          </>
          <Highlight className="absolute scale-y-75 rotate-180 -scale-x-75 -top-8 left-0 sm:-left-12" />
        </Heading>
        <BodyText className="text-center font-Poppins max-w-[26ch] mx-auto mb-8 sm:max-w-[55ch] lg:mb-16 lg:text-[18px]">
          Our team of top-tier developers combined with our proprietary project
          management platform enables clients to achieve exceptional results far
          more efficiently than our competitors.
        </BodyText>
        <ul className="grid gap-4 sm:grid-cols-3 sm:mx-16 lg:mx-auto max-w-5xl justify-center">
          <li className="flex flex-col items-center justify-center gap-4 px-10 py-8 rounded-lg bg-darkermid sm:p-4 lg:p-8">
            <BodyText className="text-lg text-center">
              AVERAGE CLIENT SATISFACTION RATING
            </BodyText>
            <BodyText className="text-center">
              we retain a 93% per-project satisfaction rate, as stated by our
              clients*
            </BodyText>
          </li>
          <li className="flex flex-col items-center justify-center gap-4 px-10 py-8 rounded-lg bg-darkermid sm:p-4 lg:p-8">
            <BodyText className="text-lg text-center">
              AVERAGE CLIENT SATISFACTION RATING
            </BodyText>
            <BodyText className="text-center">
              we retain a 93% per-project satisfaction rate, as stated by our
              clients*
            </BodyText>
          </li>
          <li className="flex flex-col items-center justify-center gap-4 px-10 py-8 rounded-lg bg-darkermid sm:p-4 lg:p-8">
            <BodyText className="text-lg text-center">
              AVERAGE PROJECT COMPLETION ACCURACY
            </BodyText>
            <BodyText className="text-center">
              we complete projects within a 92% accuracy rating, as stated by
              our clients*
            </BodyText>
          </li>
        </ul>
        <BallPurple className="hidden lg:block lg:absolute lg:right-8 lg:top-52" />
        <Star className="hidden lg:block lg:absolute lg:left-10 lg:top-8" />
      </section>
      <Carousel />
      <section className="relative flex flex-col py-8 mx-4">
        <Heading
          level="2"
          className="px-2 mb-4 tracking-tighter text-center sm:text-3xl sm:max-w-[20ch] sm:mx-auto sm:mb-8"
        >
          Unparalleled quality at an unbeatable value
        </Heading>
        <Button className="sm:w-min sm:mx-auto" href="">
          Get More Seconds
        </Button>
        <Cloud className="bottom-0 right-0 hidden translate-x-16 sm:block sm:absolute" />
        <Planet className="hidden sm:block sm:absolute sm:left-4 sm:top-4 sm:scale-75 lg:left-32" />
      </section>
      <Testimonials title="Trusted by top executives" />
      <Dedicated />
    </Layout>
  )
}
