import { Clients } from '../components/Clients'
import { Layout } from '../containers/layout/Layout'
import { Hero } from 'containers/Home/Hero'
import { Team } from 'components/Team'
import { SectionBlur } from 'components/SectionBlur'
import { Partners } from 'components/Partners'
import { Services } from 'components/Services'

export function Homepage() {
  return (
    <Layout>
      <Hero />
      <Clients className="relative z-10 sm:-top-16 lg:-top-32" />
      <Team />
      <SectionBlur />
      <Partners />
      <Services />
    </Layout>
  )
}
