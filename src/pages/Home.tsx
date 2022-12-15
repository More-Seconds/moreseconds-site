import { Clients } from '../components/shared sections/Clients'
import { Layout } from '../containers/layout/Layout'
import { Hero } from 'containers/shared/Hero'
import { Team } from 'components/shared sections/Team'
import { SectionBlur } from 'components/SectionBlur'
import { Partners } from 'components/shared sections/Partners'
import { Services } from 'components/shared sections/Services'

import { Heading } from 'components/typography/Heading'
import { BodyText } from 'components/typography/BodyText'
import { SmallTitle } from '../components/typography/SmallTitle'
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
          className="max-w-lg xl:max-w-3xl 3xl:max-w-5xl xl:text-[64px] xl:leading-[72.96px]"
        >
           <>The last development </>
          <span className="relative">
          team you'll ever need.
            <NoMaintenance className="absolute right-20 bottom-0 w-[5ch] sm:w-[70%] xl:w-auto xl:scale-x-125 xl:translate-x-12" />
          </span>
          <></>
        </Heading>
        <BodyText className="max-w-[30ch] sm:max-w-md xl:max-w-2xl xl:text-lg">
        We set the standard for high quality development teams and built a frictionless #dev-ops platform, designed to take your web projects from “headache to handled” in seconds.
        </BodyText>
        <Signup variant="primary" />
      </Hero>
      <Clients className="relative z-10 sm:-top-16 xl:-top-32" />
      <Team />
      <SectionBlur />
      <Partners />
      <div className="mb-20 flex justify-center m-auto text-light flex-row sm:flex-row max-w-7xl md:mx-16 lg:mx-16 xl:pt-32 xl:mx-auto xl:pl-32 xl:max-w-[1600px] 3xl:pt-60">
        <div class="border-b border-dark mr-8 pr-3 pb-8">
        <p className="font-bold uppercase font-Poppins text-accent">More Speed</p>
          <h2 className="font-DM font-bold z-10 sm:text-2xl text-light mb-3 mt-5 text-3xl text-center sm:max-w-2xl xl:max-w-2xl sm:mt-0 sm:text-left xl:text-4xl xl:mt-5">3 months</h2>
          <p>We reduce the average new website build time from 90 days to 30.</p>
        </div>
        <div class="border-b border-dark mr-8 pr-3 pb-8">
        <p className="font-bold uppercase font-Poppins text-accent">More Reliability</p>
          <h2 className="font-DM font-bold z-10 sm:text-2xl text-light mb-3 mt-5 text-3xl text-center sm:max-w-2xl xl:max-w-2xl sm:mt-0 sm:text-left xl:text-4xl xl:mt-5">7 Days</h2>
          <p>We are active and available for urgent project requests 7 days a week.</p>
        </div>
        <div class="border-b border-dark mr-8 pr-3 pb-8">
        <p className="font-bold uppercase font-Poppins text-accent">More Sync</p>
          <h2 className="font-DM font-bold z-10 sm:text-2xl text-light mb-3 mt-5 text-3xl text-center sm:max-w-2xl xl:max-w-2xl sm:mt-0 sm:text-left xl:text-4xl xl:mt-5">5 Minutes</h2>
          <p>We boast an average of 5 minutes or less for response times on Slack.</p>
        </div>
        <div class="border-b border-dark mr-8 pr-3 pb-8">
        <p className="font-bold uppercase font-Poppins text-accent">More Projects</p>
          <h2 className="font-DM font-bold z-10 sm:text-2xl text-light mb-3 mt-5 text-3xl text-center sm:max-w-2xl xl:max-w-2xl sm:mt-0 sm:text-left xl:text-4xl xl:mt-5">60 Seconds</h2>
          <p>We can go from detailed brief to project kickoff in under 60 seconds.</p>
        </div>
      </div>
      
      <Services />
      {/* <CenteredCTA /> */}
      <Testimonials title={[<>The secret to <span className="text-accent">getting more done </span>is to work with More Seconds.</>]} />
    </Layout>
  )
}
