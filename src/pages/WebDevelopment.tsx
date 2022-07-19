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

export function WebDevelopment() {
  return (
    <Layout footerVariant="simplified">
      <section className="flex flex-col items-center justify-center w-min">
        <HeroCentered className="">
          <SmallTitle className="mx-auto text-center">Our Services</SmallTitle>
          <Heading level="1" className="max-w-4xl mx-auto text-center">
            Web Development
          </Heading>
          <BodyText className="px-5 mx-auto text-center sm:max-w-4xl sm:px-10">
            From startups to established corporations, we utilize the latest
            technologies and platforms to deliver captivating user experiences
            and web interfaces. Our team of top U.S.-based developers write high
            level, production ready code designed to optimize your website’s
            functionality. Experience the benefits of having your own in-house
            digital team without actually hiring one full-time.
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
        <SmallTitle>Development that delights</SmallTitle>
        <Heading level="2">
          Have an exciting vision for your website? More Seconds has the tech
          talent to bring it to life.
        </Heading>
        <BodyText className="max-w-xs sm:max-w-none">
          Your website is essential to the success of your business. We
          understand the importance of every element – design, development,
          speed, security, performance, functionality, hosting, and maintenance.
          Modernizing your web presence boosts sales, supports marketing
          campaigns, increases customer acquisition, and more. We provide
          innovative, custom web development solutions so your website stays
          ahead of the competition
        </BodyText>
      </SideBySide>

      <section className="flex flex-wrap items-center justify-center mx-auto mt-20 mb-60">
        <Card>
          <Heading level="2">Full-cycle Website Design & Development</Heading>
          <BodyText className="pt-5">
            We provide full-cycle development services from market research and
            business analysis to design, development, and launch.
          </BodyText>
        </Card>

        <Card>
          <Heading level="2">Targeted Landing Page Development</Heading>
          <BodyText className="pt-5">
            A pixel-perfect landing page built in record time. Select the
            platform, add any specifications, and we’ll handle the rest. It’s
            that easy!
          </BodyText>
        </Card>

        <Card>
          <Heading level="2">Theme Customization & Development</Heading>
          <BodyText className="pt-5">
            We can help build anew or customize the current functionality of
            your websites CMS theme and backend architecture structure.
          </BodyText>
        </Card>

        <Card>
          <Heading level="2">Custom Plugin & Feature Development</Heading>
          <BodyText className="pt-5">
            We use first-rate technologies to develop and implement new features
            and plugins that drive user satisfaction and successful conversions.
          </BodyText>
        </Card>
      </section>

      <Testimonials title="Websites that wow." />
    </Layout>
  )
}
