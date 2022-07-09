import { Clients } from '../components/shared sections/Clients'
import { Layout } from '../containers/layout/Layout'
import { Hero } from 'containers/Home/Hero'
import { Team } from 'components/shared sections/Team'
import { SectionBlur } from 'components/SectionBlur'
import { Partners } from 'components/shared sections/Partners'
import { Services } from 'components/shared sections/Services'

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
