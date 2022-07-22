import { Dedicated } from 'components/shared sections/Dedicated'
import { Signup } from 'components/forms/Signup'
import { Testimonials } from 'components/shared sections/Testimonials'
import { BodyText } from 'components/typography/BodyText'
import { Heading } from 'components/typography/Heading'
import { Layout } from 'containers/layout/Layout'
import { SideBySide } from 'containers/shared/SideBySide'
import {
  BallBlue,
  BallOrange,
  CaseStudy1,
  CaseStudy2,
  CaseStudy3,
  CaseStudy4,
  CaseStudy5,
  Cloud,
  CloudFull,
  ManWithPhone,
  Planet,
  Sputnik,
  Star,
  UFO
} from 'public/svgs'
import { CTA } from './CTA'
import { Hero } from './Hero'
import { Planets } from './Planets'

export function CaseStudies() {
  return (
    <Layout footerVariant="connect">
      <Hero />
      <Planets />
      <CTA />
      <div className="flex justify-between">
        <CloudFull className="relative scale-75 -bottom-14 -left-20" />
        <Cloud className="w-96 w:auto" />
      </div>
      <Testimonials title="Generate millions in revenue with the right website  " />
      <Dedicated />
    </Layout>
  )
}
