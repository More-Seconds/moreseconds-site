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
import { Hero } from 'containers/Home/Hero'
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
  StarOutline
} from 'public/svgs'

import { HeroCentered } from 'containers/shared/HeroCentered'
import { SideBySide } from 'containers/shared/SideBySide'
import { Signup } from 'components/forms/Signup'

export function ResearchAndAnalysis() {
  return (
    <Layout footerVariant="delivers">
      <section className="flex flex-col items-center justify-center w-min">
        <HeroCentered className="">
          <SmallTitle className="mx-auto text-center">Our Services</SmallTitle>
          <Heading level="1" className="max-w-4xl mx-auto text-center">
            Research & Analysis
          </Heading>
          <BodyText className="px-5 mx-auto text-center sm:max-w-4xl sm:px-10">
            Take full advantage of our web research and discovery expertise. We’ll take a look at your overall website performance issues, server configurations, and site architecture as well as help plan all new functionality or design needs. You’ll be armed with a versatile Swiss-Army knife of web development, design, and optimization tools.
          </BodyText>
          <Button href="" className="block max-w-xs mx-auto mt-6 text-center">
            Get More Seconds
          </Button>
          <Planet className="absolute scale-50 -top-4 -right-8 lg:scale-75 lg:right-32"/>
          <BallOrange className="absolute right-0 scale-[25%] top-56 lg:scale-75 lg:right-16 lg:top-96"/>
          <BallBlue className="absolute top-0 scale-50 left-4 lg:scale-75 lg:left-32 lg:top-16"/>
          <Cloud className = "hidden rotate-180 sm:block sm:absolute sm:-left-32 sm:bottom-0 sm:-scale-y-50 sm:scale-50 lg:-scale-y-100 lg:scale-x-100 lg:left-0"/>

        </HeroCentered>
      </section>

      <SideBySide svgStyles='scale-50 translate-x-[26%]'
        svg={ManArtist}
        className="flex items-center justify-center h-96 mb-52 pt-72">
        <Heading level="2" className="px-4 mt-40 mb-5">
          Need to level up your landing page?
        </Heading>
        <Signup variant="secondary" />
        <Star className="absolute left-[70%] mt-14"/>
        <BallPurple className="absolute mt-48 translate-x-40"/>
        <BallPurple className="absolute left-[40%] -translate-y-[1200%] scale-50"/>
        <BallPurple className="absolute left-[48%] -translate-y-[1100%] scale-50"/>
        <BallBlue className="absolute left-[50%]"/>
        <StarOutline className="absolute -translate-y-[1000%]"/>
        <StarOutline className="absolute translate-y-20"/>
      </SideBySide>

      <SideBySide
        svg={Planet}
        reverse
        className="flex items-center justify-center pb-20 pl-6"
      >
        <SmallTitle>RESEARCH FOR RESULTS</SmallTitle>
        <Heading level="2">
          Looking to uncover opportunities to improve your development workflow? We identify solutions that drive ROI.
        </Heading>
        <BodyText className="max-w-xs sm:max-w-none">
          We are experts at analyzing multiple data points related to user satisfaction and goal conversions. From there, we produce detailed and executable blueprints designed to make implementing our solutions a breeze. Our aim is to deepen the knowledge and digital resource base that will continue to power your business long-term.
        </BodyText>
      </SideBySide>

      <section className="flex flex-wrap items-center justify-center mt-20 mb-60">
        <Card>
          <Heading level="2">Rebrand Your Business & Website Design</Heading>
          <BodyText className="pt-5">
            We'll help you upgrade your site design, build new marketing-ready pages to drive customer traffic, and upgrade your site's functionality.
          </BodyText>
        </Card>

        <Card>
          <Heading level="2">Improve Your Workflow & Processes</Heading>
          <BodyText className="pt-5">
            Upgrade, improve, and implement development workflows and new website processes designed to improve your customer and user satisfaction.
          </BodyText>
        </Card>

        <Card>
          <Heading level="2">Audit Your Existing Digital Efforts</Heading>
          <BodyText className="pt-5">
            We'll examine your website and prepare a development & design report including implementable ideas guaranteed to optimize your web presence.
          </BodyText>
        </Card>

        <Card>
          <Heading level="2">Company CTO Advisement & Extension</Heading>
          <BodyText className="pt-5">
            We offer on-demand access to a qualified technical advisor - a major asset for all modern business owners.
          </BodyText>
        </Card>
      </section>

      <Testimonials title="Stay one step ahead of the competition." />
      
    </Layout>
  )
}
