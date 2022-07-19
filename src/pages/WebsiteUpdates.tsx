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
  StarOutline
} from 'public/svgs'

import { HeroCentered } from 'containers/shared/HeroCentered'
import { SideBySide } from 'containers/shared/SideBySide'
import { Signup } from 'components/forms/Signup'

export function WebsiteUpdates() {
  return (
    <Layout footerVariant="simplified">
      <section className="flex flex-col items-center justify-center w-min">
        <HeroCentered className="">
          <SmallTitle className="mx-auto text-center">Our Services</SmallTitle>
          <Heading level="1" className="max-w-4xl mx-auto text-center">
            Website Updates
          </Heading>
          <BodyText className="px-5 mx-auto text-center sm:max-w-4xl sm:px-10">
            From on-demand updates to urgent after-hours fixes, More Seconds
            premium web support offers the easiest way to make rapid changes to
            your website. We provide a completely hands-off website maintenance
            and updates service with a dedicated Project Manager to address all
            of your questions, comments, and concerns regarding your website.
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
        <Heading level="2" className="px-4 mt-40 mb-5">
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
        svg={Planet}
        reverse
        className="flex items-center justify-center pb-20 pl-6"
      >
        <SmallTitle>Upgrade your updates</SmallTitle>
        <Heading level="2">
          Do you need on-demand website updates? Get More Seconds’ lightning
          fast support.
        </Heading>
        <BodyText className="max-w-xs sm:max-w-none">
          We offer on-call and on-demand web support that seamlessly integrates
          into your project management workflow. Our expert #dev-ops team is
          always available to handle any issue that arises.
        </BodyText>
      </SideBySide>

      <section className="flex flex-wrap items-center justify-center mt-20 mb-60">
        <Card>
          <Heading level="2">Website & Web Page Updates</Heading>
          <BodyText className="pt-5">
            We are always on call to handle all common issues that may pop up on
            your website.
          </BodyText>
        </Card>

        <Card>
          <Heading level="2">Content & Image Updates</Heading>
          <BodyText className="pt-5">
            We are available to make rapid text, image, and video changes to any
            section of your website or web page that may need updating.
          </BodyText>
        </Card>

        <Card>
          <Heading level="2">Support & Maintenance Work</Heading>
          <BodyText className="pt-5">
            We can help keep your website's plugins, theme, core, and other
            important features updated and running smoothly.
          </BodyText>
        </Card>

        <Card>
          <Heading level="2">Third Party Platform Integrations</Heading>
          <BodyText className="pt-5">
            We're able to sync your website to third party apps like Mailchimp
            as well as common platforms that may require some connection to your
            site.
          </BodyText>
        </Card>
      </section>

      <Testimonials title="We want our clients to win." />
    </Layout>
  )
}
