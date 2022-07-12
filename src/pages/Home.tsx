import { Clients } from '../components/shared sections/Clients'
import { Layout } from '../containers/layout/Layout'
import { Hero } from 'containers/Home/Hero'
import { Team } from 'components/shared sections/Team'
import { SectionBlur } from 'components/SectionBlur'
import { Partners } from 'components/shared sections/Partners'
import { Services } from 'components/shared sections/Services'

import { Heading } from 'components/typography/Heading'
import { BodyText } from 'components/typography/BodyText'
import { HomeHeroBG } from 'public/svgs'
import { Testimonials } from 'components/shared sections/Testimonials'
import { CenteredCTA } from 'components/shared sections/CenteredCta'
import { Signup } from 'components/forms/Signup'

export function Homepage() {
  return (
    <Layout>
      <Hero svg={HomeHeroBG}>
        <Heading level="1" className="max-w-lg lg:max-w-3xl 3xl:max-w-5xl">
          Take your projects from headache to handled and free up your valuable
          time
        </Heading>
        <BodyText className="max-w-[30ch] sm:max-w-md lg:max-w-lg">
          We provide the service and speed of an in-house development team for
          the cost of a single developer.
        </BodyText>
        <Signup />
      </Hero>
      <Clients className="relative z-10 sm:-top-16 lg:-top-32" />
      <Team />
      <SectionBlur />
      <Partners />
      <Services />
      <CenteredCTA />
      <Testimonials />
    </Layout>
  )
}
