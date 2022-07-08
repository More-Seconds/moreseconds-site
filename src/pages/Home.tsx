import { Clients } from '../components/Clients'
import { Layout } from '../containers/layout/Layout'
import { Hero } from 'containers/Home/Hero'
import { Headset, Fast } from 'public/svgs'
import { Heading } from 'components/Heading'
import { BodyText } from 'components/BodyText'
import { Accordian } from 'components/Accordian'
import { Team } from 'components/Team'

export function Homepage() {
  return (
    <Layout>
      <Hero />
      <Clients className="relative z-10 sm:-top-16 lg:-top-32" />
      <Team />
    </Layout>
  )
}
