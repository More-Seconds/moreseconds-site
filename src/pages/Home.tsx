import { Clients } from '../components/shared sections/Clients'
import { Layout } from '../containers/layout/Layout'
import { Hero } from 'containers/shared/Hero'
import { Team } from 'components/shared sections/Team'
import { MDash } from 'components/shared sections/MDash'
import { SectionBlur } from 'components/SectionBlur'
import { Partners } from 'components/shared sections/Partners'
import { Services } from 'components/shared sections/Services'

import { Heading } from 'components/typography/Heading'
import { BodyText } from 'components/typography/BodyText'
import { HomeHeroBG, NoMaintenance } from 'public/svgs'
import { Testimonials } from 'components/shared sections/Testimonials'
import { Button } from 'components/Button'

export function Homepage() {
  return (
    <Layout footerVariant="delivers">
      <Hero svg={HomeHeroBG}>
        <Heading
          level="1"
          className="xs:text-4xl sm:mx-auto sm:text-[2rem] sm:leading-[1.05] md:gap-4 md:text-[2.75rem] md:leading-[1] md:text-[calc(3.05rem_-_0.7vw)] lg:mt-[2rem] lg:max-w-[45rem] lg:text-[3.5rem] lg:leading-[1] xl:max-w-3xl xl:text-[64px] xl:leading-[72.96px] 3xl:max-w-5xl"
        >
          <>The last development </>
          <span className="relative">
            team you’ll ever need.
            <NoMaintenance className="absolute bottom-0 w-[5ch] sm:right-0 sm:w-[15rem] md:right-0 md:bottom-[-10px] md:w-[12ch] lg:bottom-0 xl:right-20 xl:w-auto xl:scale-x-125 xl:translate-x-12" />
          </span>
          <></>
        </Heading>
        <BodyText className="max-w-[30ch] text-[16px] font-thin md:text-[18px] sm:max-w-[45ch] md:max-w-full md:leading-[1.75] md:my-4 lg:max-w-xl xl:max-w-2xl xl:text-lg">
          We set the standard for high quality development teams and built a
          frictionless #dev-ops platform, designed to take your web projects
          from “headache to handled” in seconds.
        </BodyText>

        <div className="flex gap-4 md:gap-8 mt-4 mb-[2rem] md:mb-0">
          <Button
            href="/agencies"
            className="px-10 text-md md:text-[16px] md:px-12 z-[999]"
          >
            Agencies
          </Button>
          <Button
            href="#contact"
            className="px-10 text-md md:px-12 md:text-[16px] z-[999]"
          >
            Get Started
          </Button>
        </div>
      </Hero>
      <Clients className="relative z-10 sm:-top-10 md:-top-16 xl:-top-32" />

      <Team />
      <SectionBlur />
      <Partners />

      <div className="mb-20 grid justify-center text-light flex-row sm:flex-row sm:px-8 sm:mt-[3rem] sm:grid-cols-1 sm:gap-8 md:grid-cols-4 md:pt-[40px] md:px-[45px] lg:px-[64px] lg:gap-[3.25rem] xl:pt-32 xl:mx-auto xl:max-w-[1400px] xl:px-[45px]">
        <div className="pb-8 pr-3 border-b-4 border-indigo-400/20">
          <p className="mb-4 font-bold uppercase font-Poppins text-accent">
            More Speed
          </p>
          <h2 className="z-10 mt-5 mb-3 text-3xl font-bold text-center font-DM sm:text-2xl text-light sm:max-w-2xl sm:mt-0 sm:text-left lg:text-[2rem] xl:max-w-2xl  xl:text-[2.5rem] xl:mt-5">
            3 months
          </h2>
          <p className="mt-[0.8rem] leading-7">
            We reduce the average new website build time from 90 days to 30.
          </p>
        </div>
        <div className="pb-8 pr-3 border-b-4 border-indigo-400/20">
          <p className="mb-4 font-bold uppercase font-Poppins text-accent">
            More Reliability
          </p>
          <h2 className="z-10 mt-5 mb-3 text-3xl font-bold text-center font-DM sm:text-2xl text-light sm:max-w-2xl sm:mt-0 sm:text-left lg:text-[2rem] xl:max-w-2xl  xl:text-[2.5rem] xl:mt-5">
            7 days
          </h2>
          <p className="mt-[0.8rem] leading-7">
            We are active and available for urgent project requests 7 days a
            week.
          </p>
        </div>
        <div className="pb-8 pr-3 border-b-4 border-indigo-400/20">
          <p className="mb-4 font-bold uppercase font-Poppins text-accent">
            More Synced
          </p>
          <h2 className="z-10 mt-5 mb-3 text-3xl font-bold text-center font-DM sm:text-2xl text-light sm:max-w-2xl sm:mt-0 sm:text-left lg:text-[2rem] xl:max-w-2xl  xl:text-[2.5rem] xl:mt-5">
            5 minutes
          </h2>
          <p className="mt-[0.8rem] leading-7">
            We boast an average of 5 minutes or less for response times on
            Slack.
          </p>
        </div>
        <div className="pb-8 pr-3 border-b-4 border-indigo-400/20">
          <p className="mb-4 font-bold uppercase font-Poppins text-accent">
            More Projects
          </p>
          <h2 className="z-10 mt-5 mb-3 text-3xl font-bold text-center font-DM sm:text-2xl text-light sm:max-w-2xl sm:mt-0 sm:text-left lg:text-[2rem] xl:max-w-2xl  xl:text-[2.5rem] xl:mt-5">
            60 seconds
          </h2>
          <p className="mt-[0.8rem] leading-7">
            We can go from detailed brief to project kickoff in under 60
            seconds.
          </p>
        </div>
      </div>
      <MDash />

      <Services />
      {/* <CenteredCTA /> */}
      <Testimonials
        title={[
          <>
            The secret to{' '}
            <span className="text-accent">getting more done </span>is to work
            with More Seconds.
          </>
        ]}
      />
    </Layout>
  )
}
