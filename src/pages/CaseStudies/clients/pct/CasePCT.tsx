import { Dedicated } from 'components/Dedicated'
import { Testimonials } from 'components/shared sections/Testimonials'
import { Testimonial } from 'components/shared sections/Testimonials/Testimonial'
import { BodyText } from 'components/typography/BodyText'
import { Heading } from 'components/typography/Heading'
import { SmallTitle } from 'components/typography/SmallTitle'
import { Layout } from 'containers/layout/Layout'
import { HeroCentered } from 'containers/shared/HeroCentered'
import {
  PCTLogo,
  Request1,
  Request2,
  RequestAvatar1,
  RequestAvatar2,
  Results1,
  Results2
} from 'public/images'
import { Planet, BallOrange, BallBlue, Cloud } from 'public/svgs'
import { Request } from '../Request'
import { Results } from '../Results'
import { Stats } from '../Stats'
export function CaseStudyPCT() {
  return (
    <Layout footerVariant="delivers">
      <HeroCentered>
        <SmallTitle>Business</SmallTitle>
        <Heading level="1" className="text-center">
          Plant Cell Technology
        </Heading>
        <BodyText className="max-w-3xl mx-4 text-center">
          Based in Washington, DC, Plant Cell Technology develops, produces, and
          markets innovative solutions for plant tissue culture operations
          globally. PCT's flagship product, PPM, is essential to the success of
          any and all plant tissue cultures and they have been supplying it
          globally to growers, labs, and distributors for nearly three decades.
        </BodyText>

        <img src={PCTLogo} alt="" className="mx-auto saturate-0" />
        <Planet className="absolute scale-50 -top-4 -right-8 lg:scale-75 lg:right-32" />
        <BallOrange className="absolute right-0 scale-[25%] top-56 lg:scale-75 lg:right-16 lg:top-96" />
        <BallBlue className="absolute top-0 scale-50 left-4 lg:scale-75 lg:left-32 lg:top-16" />
        <Cloud className="hidden rotate-180 sm:block sm:absolute sm:-left-32 sm:bottom-0 sm:-scale-y-50 sm:scale-50 lg:-scale-y-100 lg:scale-x-100 lg:left-0" />
      </HeroCentered>
      <Request image={Request2} avatar={RequestAvatar2}>
        The Plant Cell Technology team approached us with several issues
        surrounding their e-commerce website and its marketing needs. They had a
        great product offering and a highly engaged social media following, but
        their e-commerce conversion rate was lagging far behind expectations.
      </Request>
      <Results image={Results2}>
        {[
          'Identified a host of issues plaguing the website – poor performance and load times due to improper backend configuration low quality server configuration, broken links on critical pages, and a lack of consumer offerings displayed',
          'Re-branded and re-designed e-commerce website',
          'Consistently increasing ROI and weekly sales numbers',
          'Long-term partnership for on-demand development, design, and consultancy services',
          'Ability to make rapid changes and updates to their website frontend or backend in order to optimize sales traffic and conversion ratio'
        ]}
      </Results>
      <Stats />
      <Testimonials title="Generate millions in revenue with  the right website" />
      <Dedicated className="lg:hidden" />
    </Layout>
  )
}
