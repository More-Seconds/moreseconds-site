import { BodyText } from '../components/BodyText'
import { Heading } from '../components/Heading'
import { Signup } from '../components/Signup'
import { Clients } from '../components/Clients'
import { SVGBackground } from '../containers/shared/SVGBackground'
import { Layout } from '../containers/layout/Layout'
import { HomeHeroBG } from '../public/svgs'
import { Hero } from 'containers/Home/Hero'

export function Homepage() {
  return (
    <Layout>
      <Hero />
      <Clients className="relative z-10 sm:-top-16 lg:-top-32" />
    </Layout>
  )
}
