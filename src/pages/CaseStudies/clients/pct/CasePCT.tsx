import { Dedicated } from 'components/Dedicated'
import { Testimonials } from 'components/shared sections/Testimonials'
import { Testimonial } from 'components/shared sections/Testimonials/Testimonial'
import { BodyText } from 'components/typography/BodyText'
import { Heading } from 'components/typography/Heading'
import { Layout } from 'containers/layout/Layout'
import {
  Request1,
  Request2,
  RequestAvatar1,
  RequestAvatar2,
  Results1,
  Results2
} from 'public/images'
import { Request } from '../Request'
import { Results } from '../Results'
import { Stats } from '../Stats'
export function CaseStudyPCT() {
  return (
    <Layout footerVariant="delivers">
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
      <Dedicated />
    </Layout>
  )
}
