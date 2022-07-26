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
  BigSaturn
} from 'public/svgs'

import { HeroCentered } from 'containers/shared/HeroCentered'
import { SideBySide } from 'containers/shared/SideBySide'
import { Signup } from 'components/forms/Signup'

export function UIUX() {
  return (
    <Layout footerVariant="Simplified">
      <section className="flex flex-col items-center justify-center w-min">
        <HeroCentered className="">
          <SmallTitle className="mx-auto text-center">Our Services</SmallTitle>
          <Heading level="1" className="max-w-4xl mx-auto text-center">
            UX/UI Design
          </Heading>
          <BodyText className="px-5 mx-auto text-center sm:max-w-4xl sm:px-10">
            Get a beautifully designed website that doesn’t break the bank. We
            provide pixel perfect design options to ensure each web project we
            deliver is an aesthetic masterpiece. Work with our design team to
            create a website that wows and start maximizing your conversion rate
            today.
          </BodyText>
          <Button href="" className="block max-w-xs mx-auto mt-6 text-center">
            Get More Seconds
          </Button>
          <Planet className="absolute scale-50 -top-4 -right-8 lg:scale-75 lg:right-32" />
          <BallOrange className="absolute right-0 scale-[25%] top-56 lg:scale-75 lg:right-16 lg:top-96" />
          <BallBlue className="absolute top-0 scale-50 left-4 lg:scale-75 lg:left-32 lg:top-16" />
          <Cloud className="hidden rotate-180 sm:block sm:absolute sm:-left-32 sm:bottom-0 sm:-scale-y-50 sm:scale-50 lg:-scale-y-100 lg:scale-x-100 lg:left-0" />
        </HeroCentered>
      </section>

      <SideBySide
        svgStyles="scale-50 translate-x-[26%]"
        svg={ManArtist}
        className="flex items-center justify-center h-96 mb-52 pt-72"
      >
        <Heading level="1" className="max-w-lg px-4 mt-40 mb-5 lg:max-w-3xl 3xl:max-w-5xl">
          Need to level up your landing page?
        </Heading>
        <Signup variant="secondary" />
        <Star className="absolute left-[70%] mt-14" />
        <BallPurple className="absolute mt-48 translate-x-40" />
        <BallPurple className="absolute left-[40%] -translate-y-[1200%] scale-50" />
        <BallPurple className="absolute left-[48%] -translate-y-[1100%] scale-50" />
        <BallBlue className="absolute left-[50%]" />
        <StarOutline className="absolute -translate-y-[1000%]" />
        <StarOutline className="absolute translate-y-20" />
      </SideBySide>

      <SideBySide
        svgStyles="scale-50"
        svg={BigSaturn}
        reverse
        className="flex items-center justify-center pb-20 pl-6"
      >
        <div className="pr-16">
        <SmallTitle>Design that drives conversion</SmallTitle>
        <Heading level="1" className="mt-2 max-w-1xl mb-7">
          More Seconds Delivers Fresh, Modern Design daily
        </Heading>
        <BodyText className="max-w-xs sm:max-w-none">
          When a potential customer visits your website for the first time, they
          need to meaningfully connect with your business in seconds. We are
          experts at utilizing sophisticated UI design and engaging UX journeys
          to create captivating landing pages designed to convert casual
          browsers into paying clients. From custom iconography and
          illustrations to content architecture and interactive elements, we’ll
          bring your brand’s best vision to life.
        </BodyText>
        </div>
      </SideBySide>

      <section className="flex flex-wrap items-center justify-center mt-20 mb-4">
        <Card>
          <Heading level="2">Full Website & Web App Design</Heading>
          <BodyText className="pt-5">
            We provide full-service digital design services to create
            state-of-the-art web pages and full website design solutions.
          </BodyText>
        </Card>

        <Card>
          <Heading level="2">Landing Page Design & Revamp</Heading>
          <BodyText className="pt-5">
            Whether you are starting from scratch or simply interested in
            updating your current page, we’re excited to bring your ideas to
            life.
          </BodyText>
        </Card>

        <Card>
          <Heading level="2">Rapid Prototyping & Design Discovery</Heading>
          <BodyText className="pt-5">
            You’ll see exactly how your custom designs are progressing each step
            of the way with mockups in Figma and your input is always welcome.
          </BodyText>
        </Card>

        <Card>
          <Heading level="2">Web Branding & Visual Identity Design</Heading>
          <BodyText className="pt-5">
            We’ll create a consistent look and feel for your business across the
            digital landscape with the development of a brand kit guideline.
          </BodyText>
        </Card>
      </section>

      <Testimonials title="Good design converts" />
    </Layout>
  )
}
