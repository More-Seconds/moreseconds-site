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
  Planet
} from 'public/svgs'

import { HeroCentered } from 'containers/shared/HeroCentered'
import { SideBySide } from 'containers/shared/SideBySide'
import { Signup } from 'components/forms/Signup'

export function UIUX() {
  return (
    <Layout>
      <section className="flex flex-col items-center justify-center w-min">
        <HeroCentered background = {Smoke} className="flex items-center justify-center px-10 mx-auto mt-32 3xl:px-1 sm:mt-56">
          <SmallTitle className="mx-auto text-center">Our Services</SmallTitle>
          <Heading level="1" className="max-w-4xl mx-auto text-center">UX/UI Design</Heading>
          <BodyText className="mx-auto text-center sm: sm:max-w-4xl sm:px-10">Get a beautifully designed website that doesn’t break the bank. We provide pixel perfect design options to ensure each web project we deliver is an aesthetic masterpiece. Work with our design team to create a website that wows and start maximizing your conversion rate today.</BodyText>
          <Button href="" className="block max-w-xs mx-auto mt-10 text-center">Get More Seconds</Button>
        </HeroCentered>
      </section>


      <SideBySide svg={AboutHero} className="flex items-center justify-center mt-20 mb-20">
        <Heading level="2" className="px-4 mb-5">Need to level up your landing page?</Heading>
        <Signup />
      </SideBySide>


      <SideBySide svg={Planet} reverse className="flex items-center justify-center pb-20 pl-4">
        <SmallTitle>Design that drives conversion</SmallTitle>
        <Heading level="2">More Seconds Delivers Fresh, Modern Design daily</Heading>
        <BodyText className="max-w-xs sm:max-w-none">When a potential customer visits your website for the first time, they need to meaningfully connect with your business in seconds. We are experts at utilizing sophisticated UI design and engaging UX journeys to create captivating landing pages designed to convert casual browsers into paying clients. From custom iconography and illustrations to content architecture and interactive elements, we’ll bring your brand’s best vision to life.</BodyText>
      </SideBySide>

      <section className="flex flex-wrap items-center justify-center mt-20 mb-60">
        <Card childrenHeading="Full Website & Web App Design" childrenText="We provide full-service digital design services to create state-of-the-art web pages and full website design solutions." />
        <Card childrenHeading="Landing Page Design & Revamp" childrenText="Whether you are starting from scratch or simply interested in updating your current page, we’re excited to bring your ideas to life." />
        <Card childrenHeading="Rapid Prototyping & Design Discovery" childrenText="You’ll see exactly how your custom designs are progressing each step of the way with mockups in Figma and your input is always welcome." />
        <Card childrenHeading="Web Branding & Visual Identity Design" childrenText="We’ll create a consistent look and feel for your business across the digital landscape with the development of a brand kit guideline." />
      </section>


    </Layout>
  )
}
