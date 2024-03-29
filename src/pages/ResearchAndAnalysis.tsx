import { Button } from 'components/Button'
import { Card } from 'components/Card'
import { SectionBlur } from 'components/SectionBlur'
import { Clients } from 'components/shared sections/Clients'
import { Partners } from 'components/shared sections/Partners'
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

export function ResearchAndAnalysis() {
  return (
    <Layout footerVariant="delivers">
      <section className="flex flex-col items-center justify-center w-min">
        <HeroCentered className="py-0">
          <SmallTitle className="mx-auto text-center">Our Services</SmallTitle>
          <Heading level="1" className="max-w-4xl mx-auto text-center">
            Research & Analysis
          </Heading>
          <BodyText className="px-5 mx-auto text-center sm:max-w-4xl sm:px-10 xl:text-lg">
            Take full advantage of our web research and discovery expertise.
            We’ll take a look at your overall website performance issues, server
            configurations, and site architecture as well as help plan all new
            functionality or design needs. You’ll be armed with a versatile
            Swiss-Army knife of web development, design, and optimization tools.
          </BodyText>
          <Button
            href="#contact"
            className="block max-w-xs mx-auto mt-6 text-center py-3 px-8"
          >
            Get More Seconds
          </Button>
          <Planet className="absolute scale-50 -top-4 -right-8 xl:scale-75 xl:right-32" />
          <BallOrange className="absolute right-0 scale-[25%] top-56 xl:scale-75 xl:right-16 xl:top-96" />
          <BallBlue className="absolute top-0 scale-50 left-4 xl:scale-75 xl:left-32 xl:top-16" />
          <Cloud className="hidden rotate-180 xl:-scale-y-100 xl:scale-x-100 xl:left-0" />
        </HeroCentered>
      </section>

      <section className="relative block items-center sm:py-72">
        <div className="flex items-center -translate-y-16 w-screen h-96 relative -right-20 justify-self-start sm:absolute sm:top-28 sm:-right-2 sm:w-[378px] xl:translate-y-64 xl:right-40">
          <ManArtist className="h-full sm:scale-150 xl:scale-[300%]" />
          <Star className="absolute -left-12 top-8 scale-50 sm:-left-[40vw] sm:-top-12 sm:-scale-x-75 sm:scale-y-75 xl:-top-72 xl:-left-[50vw] xl:-scale-x-100 xl:scale-y-100" />
          <Star className="hidden sm:block sm:absolute sm:-top-40 sm:right-32 sm:scale-50" />
          <CloudFull className="absolute -left-52 scale-75 top-10 sm:-scale-x-150 sm:scale-y-150 sm:-left-[65vw] sm:top-0 xl:-top-56 xl:-scale-x-[200%] xl:scale-y-[200%]" />
          <HollowStar className="absolute top-32 scale-75 sm:-top-8 sm:right-80 xl:-top-72 xl:-left-56 xl:scale-100" />
          <HollowStar className="hidden xl:block xl:absolute xl:-left-[65vw] xl:-bottom-20" />
          <HollowStar className="hidden xl:block xl:absolute xl:-top-20 xl:-left-[65vw]" />
          <BallPurple className="absolute -left-20 bottom-16 scale-[25%] sm:bottom-52 sm:-left-32 xl:-top-20 xl:-left-80" />
          <BallPurple className="hidden xl:block xl:absolute xl:-top-24 xl:-left-[550px] scale-[25%]" />
        </div>
        <div className="mx-4 sm:ml-16 xl:ml-32 -translate-y-20 sm:translate-y-0 xl:pb-64 xl:pt-32">
          <Heading
            level="1"
            className="capitalize text-2xl max-w-[15ch] px-4 mb-8 sm:max-w-md xl:max-w-xl xl:text-[46px] xl:leading-[56px] tracking-tighter "
          >
            Need to level up your landing page?
          </Heading>
          <Signup variant="secondary" className="sm:min-w-[500px] " />
        </div>
        <BallPurple className="hidden sm:block sm:absolute sm:left-4 sm:bottom-32 xl:bottom-72 xl:left-32" />
        <BallOrange className="hidden sm:block sm:absolute sm:left-64 sm:bottom-36 sm:scale-50 xl:left-96" />
        <BallBlue className="hidden sm:block sm:absolute sm:right-52 xl:left-1/2 sm:bottom-96" />
        <Star className="hidden sm:block sm:absolute sm:bottom-16 sm:right-12 xl:right-[600px] xl:bottom-64" />
      </section>

      <section className="flex flex-col sm:flex-row mx-4 sm:mr-12 xl:mr-32 sm:ml-4 xl:ml-16 sm:gap-8">
        <div className="relative w-full h-min -mt-28 sm:mt-0 xl:w-[150%]">
          <BigSaturn className="w-[70%] mx-auto sm:w-full xl:w-full xl:scale-110" />
          <BallOrange className="absolute scale-50 top-32 sm:top-[130%]" />
          <BallBlue className="absolute scale-50 top-16 right-20 xl:hidden" />
          <Star className="absolute -right-4 top-1/2 scale-50 sm:hidden" />
        </div>
        <div className="w-[120%] relative -mt-16 sm:mt-0 xl:w-full">
          <SmallTitle>RESEARCH FOR RESULTS</SmallTitle>
          <Heading
            level="1"
            className="capitalize mt-2 max-w-1xl mb-5 text-[30px] leading-[33px] max-w-xs sm:max-w-md xl:text-[46px] xl:leading-[56px] xl:max-w-[17ch] tracking-tighter"
          >
            Looking to uncover opportunities to improve your development
            workflow? We identify solutions that drive ROI.
          </Heading>
          <BodyText className="max-w-[35ch] sm:max-w-none xl:text-lg xl:max-w-[53ch]">
            We are experts at analyzing multiple data points related to user
            satisfaction and goal conversions. From there, we produce detailed
            and executable blueprints designed to make implementing our
            solutions a breeze. Our aim is to deepen the knowledge and digital
            resource base that will continue to power your business long-term.
          </BodyText>
          <HollowStar className="absolute right-16 top-12 scale-75 sm:top-[10%] sm:-right-16 sm:scale-50" />
        </div>
      </section>

      <section className="relative grid grid-flow-row w-full sm:grid-cols-4 items-center justify-center mt-4 sm:mt-32 mb-4 sm:mb-48 gap-3 px-4 sm:px-8 xl:px-32">
        <Card className="w-full sm:py-8 py-10 h-full gap-2 xl:gap-8">
          <Heading
            level="2"
            className="max-w-[16ch] mx-auto text-lg sm:text-base xl:text-2xl"
          >
            Rebrand Your Business & Website Design
          </Heading>
          <BodyText className="text-xs xl:text-lg">
            We’ll help you upgrade your site design, build new marketing-ready
            pages to drive customer traffic, and upgrade your site’s
            functionality.
          </BodyText>
        </Card>

        <Card className="w-full sm:py-8 py-10 h-full gap-2 xl:gap-8">
          <Heading
            level="2"
            className="max-w-[16ch] mx-auto text-lg sm:text-base xl:text-2xl"
          >
            Improve Your Workflow & Processes
          </Heading>
          <BodyText className="text-xs xl:text-lg">
            Upgrade, improve, and implement development workflows and new
            website processes designed to improve your customer and user
            satisfaction.
          </BodyText>
        </Card>

        <Card className="w-full sm:py-8 py-10 h-full gap-2 sm:gap-2 xl:gap-8">
          <Heading
            level="2"
            className="max-w-[16ch] mx-auto text-lg sm:text-base xl:text-2xl"
          >
            Audit Your Existing Digital Efforts
          </Heading>
          <BodyText className="text-xs xl:text-lg">
            We’ll examine your website and prepare a development & design report
            including implementable ideas guaranteed to optimize your web
            presence.
          </BodyText>
        </Card>

        <Card className="w-full sm:py-8 py-10 h-full gap-2 sm:gap-1 xl:gap-0">
          <Heading
            level="2"
            className="max-w-[16ch] mx-auto text-lg sm:text-base xl:text-2xl"
          >
            Company CTO Advisement & Extension
          </Heading>
          <BodyText className="text-xs xl:text-lg">
            We offer on-demand access to a qualified technical advisor - a major
            asset for all modern business owners.
          </BodyText>
        </Card>
        <CloudFull className="absolute -bottom-14 -z-10 -left-24 sm:scale-150 sm:-bottom-16" />
        <BallBlue className="absolute -bottom-12 right-2 scale-[80%]" />
      </section>
      <div className="hidden max-h-[0px] sm:flex items-center justify-end">
        <CloudFull className="translate-x-20 -translate-y-10 -scale-x-110 scale-y-110" />
      </div>
      <Testimonials title="Stay one step ahead of the competition." />
    </Layout>
  )
}
