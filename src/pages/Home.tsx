import { Clients } from '../components/shared sections/Clients'
import { Layout } from '../containers/layout/Layout'
import { Hero } from 'containers/shared/Hero'
import { Team } from 'components/shared sections/Team'
import { SectionBlur } from 'components/SectionBlur'
import { Partners } from 'components/shared sections/Partners'
import { Services } from 'components/shared sections/Services'

import { Heading } from 'components/typography/Heading'
import { BodyText } from 'components/typography/BodyText'
import { HomeHeroBG, NoMaintenance } from 'public/svgs'
import { Testimonials } from 'components/shared sections/Testimonials'
import { CenteredCTA } from 'components/shared sections/CenteredCta'
import { Signup } from 'components/forms/Signup'

export function Homepage() {
  return (
    <Layout footerVariant="delivers">
      <Hero svg={HomeHeroBG}>
        <Heading
          level="1"
          className="max-w-lg xl:max-w-4xl 3xl:max-w-5xl xl:text-[64px] xl:leading-[72.96px]"
        >
          <>Take your projects from </>
          <span className="relative">
            headache to handled
            <NoMaintenance className="absolute left-0 bottom-0 w-[5ch] sm:w-[70%] xl:w-auto xl:scale-x-125 xl:translate-x-12" />
          </span>
          <> and free up your valuable time</>
        </Heading>
        <BodyText className="max-w-[30ch] sm:max-w-md xl:max-w-lg xl:text-lg">
          We provide the service and speed of an in-house development team for
          the cost of a single developer.
        </BodyText>
        <Signup variant="primary" />
      </Hero>
      <Clients className="relative z-10 sm:-top-16 xl:-top-32" />
      <Team />
      <SectionBlur />
      <Partners />
      <Services />
      <CenteredCTA />
      <Testimonials title="Our Clients Stick With Us For A Reason" />
    </Layout>
  )
}
