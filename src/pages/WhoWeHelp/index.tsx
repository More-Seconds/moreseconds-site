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
  HollowStar,
  NoMaintenance,
  Pillow,
  Planet,
  Star,
  WhoWeHelpHero
} from 'public/svgs'
import { Carousel } from './Carousel'

export function WhoWeHelp() {
  return (
    <Layout footerVariant="connect">
      <section className="relative px-4 sm:px-16 xl:px-32">
        <section className="relative z-10 sm:mb-32 xl:mb-64">
          <div className="mt-4 xl:mt-64 max-w-[1600px]">
            <Heading
              level="1"
              className="mb-4 tracking-tighter w-[10ch] text-[45px] sm:w-[15ch] sm:mt-24 xl:mb-8 sm:text-[50px] sm:leading-[57px] xl:text-[64px] xl:leading-[72px] xl:max-w-3xl"
            >
              <>Unparalleled quality at </>
              <span className="relative">
                an unbeatable
                <NoMaintenance className="absolute w-[8ch] sm:left-0 bottom-0 sm:w-full -scale-x-100 -scale-y-100" />
              </span>
              <> value</>
            </Heading>
            <BodyText className="max-w-[27ch] mb-4 xl:max-w-md xl:mb-8 xl:text-lg">
              Join cutting-edge companies taking their businesses, campaigns,
              and clients’ projects to the next level.
            </BodyText>
            <Signup variant="secondary" />
          </div>
          <div className="w-full sm:w-fit sm:absolute sm:-top-52 sm:-right-[170px] xl:-top-32 xl:right-0 -z-10">
            <WhoWeHelpHero className="w-full scale-75 h-min translate-x-14 sm:scale-50 xl:scale-100 xl:translate-x-0" />
            <Pillow className="hidden xl:block xl:absolute xl:translate-x-14 xl:top-80 xl:right-48 -z-20" />
          </div>
        </section>
        <Cloud className="absolute scale-75 bottom-6 sm:right-0 sm:translate-x-[25%] sm:-bottom-28 xl:scale-100 xl:translate-x-0" />
        <Cloud className="z-0 hidden sm:block sm:absolute sm:-scale-x-50 sm:scale-y-50 sm:-top-24 sm:-left-8 sm:-translate-x-[20%]" />
        <CloudFull className="absolute bottom-56 -left-32 scale-75 sm:scale-100 sm:-left-12 sm:-bottom-32 xl:left-24 xl:-bottom-52 xl:scale-150" />
        <BallOrange className="hidden sm:block sm:absolute sm:-top-8 sm:left-0 sm:scale-[25%] xl:-top-24 xl:left-64 xl:scale-50" />
        <BallOrange className="hidden sm:block sm:absolute sm:-bottom-4 sm:right-6 sm:scale-[30%] xl:hidden" />
        <BallBlue className="hidden sm:block sm:absolute sm:bottom-2 sm:left-6 sm:scale-50 xl:-top-40 xl:left-[95%] xl:scale-75" />
        <HollowStar className="hidden sm:block sm:absolute sm:-bottom-20 sm:left-56 sm:scale-50" />
      </section>
      <section className="relative mx-4 sm:py-8">
        <Heading
          level="2"
          className=" relative max-w-[15ch] mx-auto text-center capitalize mb-4 mt-8 sm:max-w-[27ch] sm:text-[36px] xl:text-[46px] xl:max-w-[30ch] xl:mb-6"
        >
          <>
            We’re disrupting traditional dev shops, one happy client at a time
          </>
          <Highlight className="absolute left-0 scale-y-75 rotate-180 -scale-x-75 -top-8 sm:-left-12" />
        </Heading>
        <BodyText className="text-center font-Poppins max-w-[26ch] mx-auto mb-8 sm:max-w-[55ch] xl:mb-16 xl:text-[18px]">
          Our team of top-tier developers combined with our proprietary project
          management platform enables clients to achieve exceptional results far
          more efficiently than our competitors.
        </BodyText>
        <ul className="grid gap-4 sm:grid-cols-3 sm:mx-16 xl:mx-auto max-w-5xl justify-center">
          <li className="flex flex-col items-center justify-center gap-4 px-10 py-8 rounded-lg bg-darkermid sm:p-4 xl:p-10">
            <BodyText className="text-lg text-center xl:text-2xl">
              AVERAGE CLIENT SATISFACTION RATING
            </BodyText>
            <BodyText className="text-center xl:text-lg">
              we retain a 93% per-project satisfaction rate, as stated by our
              clients*
            </BodyText>
          </li>
          <li className="flex flex-col items-center justify-center gap-4 px-10 py-8 rounded-lg bg-darkermid sm:p-4 xl:p-10">
            <BodyText className="text-lg text-center xl:text-2xl">
              AVERAGE CLIENT SATISFACTION RATING
            </BodyText>
            <BodyText className="text-center xl:text-lg">
              we retain a 93% per-project satisfaction rate, as stated by our
              clients*
            </BodyText>
          </li>
          <li className="flex flex-col items-center justify-center gap-4 px-10 py-8 rounded-lg bg-darkermid sm:p-4 xl:p-10 hover:bg-gradient-to-b from-accent">
            <BodyText className="text-lg text-center xl:text-2xl">
              AVERAGE PROJECT COMPLETION ACCURACY
            </BodyText>
            <BodyText className="text-center xl:text-lg">
              we complete projects within a 92% accuracy rating, as stated by
              our clients*
            </BodyText>
          </li>
        </ul>
        <BallPurple className="hidden sm:block sm:absolute sm:top-56 sm:scale-50 xl:scale-50 sm:left-24 xl:absolute xl:right-8 xl:top-52" />
        <BallPurple className="hidden sm:block sm:absolute sm:top-48 sm:right-8 sm:scale-75" />
        <Star className="hidden xl:block xl:absolute xl:left-10 xl:top-8" />
      </section>
      <Carousel />
      <section className="relative flex flex-col py-32 mx-4">
        <Heading
          level="2"
          className="px-2 mb-4 tracking-tighter text-center sm:text-3xl sm:max-w-[20ch] sm:mx-auto sm:mb-8 xl:text-[46px] xl:leading-[56px] capitalize"
        >
          Unparalleled quality at an unbeatable value
        </Heading>
        <Button className="sm:w-min sm:mx-auto" href="">
          Get More Seconds
        </Button>
        <Cloud className="bottom-0 right-0 hidden sm:block sm:absolute sm:scale-75 sm:-right-32" />
        <CloudFull className="hidden sm:block sm:absolute sm:top-0 sm:-right-16 sm:-scale-x-110 sm:scale-y-110" />
        <Planet className="hidden sm:block sm:absolute sm:-left-4 sm:bottom-10 sm:scale-75 xl:left-32 xl:scale-110" />
        <BallOrange className="hidden sm:block sm:absolute sm:bottom-40 sm:right-24 sm:scale-50" />
        <BallBlue className="hidden sm:block sm:absolute sm:-top-16 sm:right-24 sm:scale-50" />
        <HollowStar className="hidden sm:block sm:absolute sm:bottom-24 sm:left-48 sm:scale-75 xl:top-0" />
      </section>
      <Testimonials title="Trusted by top executives" />
      <Dedicated />
    </Layout>
  )
}
