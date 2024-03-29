import { Card } from 'components/Card'
import { Projects } from 'components/shared sections/Projects'
import { BodyText } from 'components/typography/BodyText'
import { Heading } from 'components/typography/Heading'
import { SmallTitle } from 'components/typography/SmallTitle'
import { Layout } from 'containers/layout/Layout'
import {
  BallOrange,
  Cloud,
  CloudFull,
  Star,
  Planet,
  BallBlue,
  BigSaturn,
  HollowStar
} from 'public/svgs'

import { HeroCentered } from 'containers/shared/HeroCentered'

export function Portfolio() {
  return (
    <Layout footerVariant="connect">
      <section className="flex flex-col md:items-center md:h-screen lg:h-full md:justify-center md:w-min">
        <HeroCentered className="lg:my-16">
          <SmallTitle className="mx-auto text-center">Our Work</SmallTitle>
          <Heading
            level="1"
            className="max-w-4xl mx-auto text-center mb-[1.35rem] mx-4 md:mx-0"
          >
            <span>Take A Peek At What More Seconds</span>
            <span className="text-accent"> Can Do For You</span>
          </Heading>
          <BodyText className="mx-auto text-center sm:max-w-4xl sm:px-3 xl:text-lg">
            Our top tier, U.S.-based team of developers have completed hundreds
            of stunning projects for our impressive client roster including top
            marketing agencies, venture capital firms, gaming companies, social
            impact initiatives, and more. We can’t wait to work our More Seconds
            magic for you and your clients!
          </BodyText>

          <Planet className="absolute hidden md:block scale-50 -top-4 -right-8 xl:scale-75 xl:right-32" />
          <BallOrange className="absolute right-0 scale-[25%] top-56 xl:scale-75 xl:right-16 xl:top-96" />
          <BallBlue className="absolute top-0  left-4 scale-[8%] xl:left-24 xl:top-4" />
          <Cloud className="hidden rotate-180 xl:-scale-y-100 xl:scale-x-100 xl:left-0" />
        </HeroCentered>
      </section>

      <Projects />

      <section className="flex flex-col sm:px-8 md:flex-row xl:mr-32 xl:ml-16 sm:gap-8">
        <div className="hidden md:block relative w-full h-min sm:mt-0 xl:w-[150%]">
          <BigSaturn className="w-[70%] mx-auto sm:w-full xl:w-full xl:scale-110" />
          <BallOrange className="absolute scale-50 top-32 sm:top-[130%]" />
          <BallBlue className="absolute scale-[8%] top-16 right-20 xl:hidden" />
          <Star className="absolute scale-50 -right-4 top-1/2 sm:hidden" />
        </div>
        <div className="relative  sm:mt-0 xl:w-full">
          <SmallTitle>DEVELOPMENT THAT DELIGHTS</SmallTitle>
          <Heading
            level="1"
            className="capitalize mt-2 max-w-1xl mb-5 text-[30px] leading-[33px] max-w-xs sm:max-w-md xl:text-[46px] xl:leading-[56px] xl:max-w-[17ch] tracking-tighter"
          >
            <span>
              Have an exciting vision for your website? More Seconds has the
              tech talent to
            </span>
            <span className="text-accent"> bring it to life.</span>
          </Heading>
          <BodyText className="max-w-[35ch] sm:max-w-none xl:text-lg xl:max-w-[53ch]">
            Your website is essential to the success of your business. We
            understand the importance of every element – design, development,
            speed, security, performance, functionality, hosting, and
            maintenance. Modernizing your web presence boosts sales, supports
            marketing campaigns, increases customer acquisition, and more. We
            provide innovative, custom web development solutions so your website
            stays ahead of the competition.
          </BodyText>
          <HollowStar className="absolute right-16 top-12 scale-75 sm:top-[10%] sm:-right-16 sm:scale-50" />
        </div>
      </section>

      <section className="relative sm:mt-[6rem] sm:mb-[14rem] md:my-0 sm:flex sm:flex-col lg:grid items-center justify-center w-full grid-flow-row gap-3 sm:grid-cols-4 md:mt-32 md:mb-48 sm:px-8 xl:px-32">
        <Card className="w-full h-full gap-2 py-10 sm:py-8 xl:gap-8">
          <Heading
            level="2"
            className="max-w-[16ch] mx-auto text-lg sm:text-base xl:text-2xl"
          >
            Full-cycle Website Design & Development
          </Heading>
          <BodyText className="text-xs xl:text-lg">
            We provide full-cycle development services from market research and
            business analysis to design, development, and launch.
          </BodyText>
        </Card>

        <Card className="w-full h-full gap-2 py-10 sm:py-8 xl:gap-8">
          <Heading
            level="2"
            className="max-w-[16ch] mx-auto text-lg sm:text-base xl:text-2xl"
          >
            Targeted Landing Page Development
          </Heading>
          <BodyText className="text-xs xl:text-lg">
            A pixel-perfect landing page built in record time. Select the
            platform, add any specifications, and we’ll handle the rest. It’s
            that easy!
          </BodyText>
        </Card>

        <Card className="w-full h-full gap-2 py-10 sm:py-8 sm:gap-4 xl:gap-8">
          <Heading
            level="2"
            className="max-w-[16ch] mx-auto text-lg sm:text-sm xl:text-2xl"
          >
            Theme Customization & Development
          </Heading>
          <BodyText className="text-xs xl:text-lg">
            We can help build anew or customize the current functionality of
            your websites CMS theme and backend architecture structure.
          </BodyText>
        </Card>

        <Card className="w-full h-full gap-2 py-10 sm:py-8 sm:gap-4 xl:gap-9">
          <Heading
            level="2"
            className="max-w-[16ch] mx-auto text-lg sm:text-sm xl:text-2xl"
          >
            Custom Plugin & Feature Development
          </Heading>
          <BodyText className="text-xs xl:text-lg">
            We use first-rate technologies to develop and implement new features
            and plugins that drive user satisfaction and successful conversions.
          </BodyText>
        </Card>
        <CloudFull className="hidden md:block absolute -bottom-14 -z-10 -left-24 sm:scale-150 sm:-bottom-16" />
        <BallBlue className="absolute sm:bottom-[-25%] sm:right-52 md:-bottom-12 md:right-2 scale-[8%]" />
      </section>
      <div className="hidden max-h-[0px] md:flex items-center justify-end">
        <CloudFull className="scale-y-110 translate-x-20 -translate-y-10 -scale-x-110" />
      </div>
    </Layout>
  )
}
