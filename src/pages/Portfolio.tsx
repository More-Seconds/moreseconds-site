import { Button } from 'components/Button'
import { Card } from 'components/Card'
import { SectionBlur } from 'components/SectionBlur'
import { Clients } from 'components/shared sections/Clients'
import { Partners } from 'components/shared sections/Partners'
import { Projects } from 'components/shared sections/Projects'
import { Services } from 'components/shared sections/Services'
import { Team } from 'components/shared sections/Team'
import { Testimonials } from 'components/shared sections/Testimonials'
import { BodyText } from 'components/typography/BodyText'
import { Heading } from 'components/typography/Heading'
import { SmallTitle } from 'components/typography/SmallTitle'
import { Hero } from 'containers/shared/Hero'
import { Layout } from 'containers/layout/Layout'
import { Brian } from 'public/images'
import {
  AboutHero,
  BallOrange,
  Cloud,
  CloudFull,
  CloudOpaque,
  Star,
  Smoke,
  Planet,
  ManArtist,
  BallBlue,
  BallPurple,
  StarOutline,
  BigSaturn,
  HollowStar
} from 'public/svgs'

import { HeroCentered } from 'containers/shared/HeroCentered'
import { SideBySide } from 'containers/shared/SideBySide'
import { Signup } from 'components/forms/Signup'

export function Portfolio() {
  return (
    <Layout footerVariant="connect">
      <section className="flex flex-col items-center justify-center w-min h-screen mb-[6rem] pb-[8rem]">
        <HeroCentered className="py-0">
          <SmallTitle className="mx-auto text-center">Our Work</SmallTitle>
          <Heading level="1" className="max-w-4xl mx-auto text-center">
            Take A Peek At What More Seconds Can Do For You
          </Heading>
          <BodyText className="px-5 mx-auto text-center sm:max-w-4xl sm:px-10 xl:text-lg">
            Our top tier, U.S.-based team of developers have completed hundreds
            of stunning projects for our impressive client roster including top
            marketing agencies, venture capital firms, gaming companies, social
            impact initiatives, and more. We can’t wait to work our More Seconds
            magic for you and your clients! Leading companies like Hawke Media,
            March Capital, and Pharrell Williams’ Black Ambition trust More
            Seconds with their web development needs because we are a reliable,
            long-term development partner with the expertise to bring their
            projects to fruition on budget, on time, and with the highest degree
            of accuracy. Check out what we’ve done and you’ll see why so many
            businesses use More Seconds to take all of their web projects from
            headache to handled.
          </BodyText>
          <Button
            href="#contact"
            className="block max-w-xs px-8 py-3 mx-auto mt-6 text-center"
          >
            Get More Seconds
          </Button>
          <Planet className="absolute scale-50 -top-4 -right-8 xl:scale-75 xl:right-32" />
          <BallOrange className="absolute right-0 scale-[25%] top-56 xl:scale-75 xl:right-16 xl:top-96" />
          <BallBlue className="absolute top-0 scale-50 left-4 xl:scale-75 xl:left-32 xl:top-16" />
          <Cloud className="hidden rotate-180 xl:-scale-y-100 xl:scale-x-100 xl:left-0" />
        </HeroCentered>
      </section>

      {/* <Projects /> */}

      {/* <section className="flex flex-col mx-4 sm:flex-row sm:mr-12 xl:mr-32 sm:ml-4 xl:ml-16 sm:gap-8">
        <div className="relative w-full h-min -mt-28 sm:mt-0 xl:w-[150%]">
          <BigSaturn className="w-[70%] mx-auto sm:w-full xl:w-full xl:scale-110" />
          <BallOrange className="absolute scale-50 top-32 sm:top-[130%]" />
          <BallBlue className="absolute scale-50 top-16 right-20 xl:hidden" />
          <Star className="absolute scale-50 -right-4 top-1/2 sm:hidden" />
        </div>
        <div className="w-[120%] relative -mt-16 sm:mt-0 xl:w-full">
          <SmallTitle>DEVELOPMENT THAT DELIGHTS</SmallTitle>
          <Heading
            level="1"
            className="capitalize mt-2 max-w-1xl mb-5 text-[30px] leading-[33px] max-w-xs sm:max-w-md xl:text-[46px] xl:leading-[56px] xl:max-w-[17ch] tracking-tighter"
          >
            Have an exciting vision for your website? More Seconds has the tech
            talent to bring it to life.
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
      </section> */}

      {/* <section className="relative grid items-center justify-center w-full grid-flow-row gap-3 px-4 mt-4 mb-4 sm:grid-cols-4 sm:mt-32 sm:mb-48 sm:px-8 xl:px-32">
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
        <CloudFull className="absolute -bottom-14 -z-10 -left-24 sm:scale-150 sm:-bottom-16" />
        <BallBlue className="absolute -bottom-12 right-2 scale-[80%]" />
      </section> */}
      {/* <div className="hidden max-h-[0px] sm:flex items-center justify-end">
        <CloudFull className="scale-y-110 translate-x-20 -translate-y-10 -scale-x-110" />
      </div> */}
      {/* <Testimonials title="Websites that wow." /> */}
    </Layout>
  )
}
