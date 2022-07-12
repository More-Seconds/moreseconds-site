import { Button } from 'components/Button'
import { SectionBlur } from 'components/SectionBlur'
import { Clients } from 'components/shared sections/Clients'
import { Partners } from 'components/shared sections/Partners'
import { Team } from 'components/shared sections/Team'
import { Testimonials } from 'components/shared sections/Testimonials'
import { BodyText } from 'components/typography/BodyText'
import { Heading } from 'components/typography/Heading'
import { Hero } from 'containers/Home/Hero'
import { Layout } from 'containers/layout/Layout'
import { Brian } from 'public/images'
import {
  AboutHero,
  BallOrange,
  Cloud,
  CloudFull,
  CloudOpaque,
  Star
} from 'public/svgs'

export function About() {
  return (
    <Layout>
      <Hero svg={AboutHero}>
        <Heading level="1" className="max-w-4xl">
          We’re here to exponentially increase your most valuable, finite asset
          – your time
        </Heading>
        <BodyText className="max-w-lg">
          More Seconds takes your web development projects from headache to
          handled so that you have time to focus on what you do best – driving
          traffic and sales for your business. If you want to stop scrolling
          through freelancers, sorting through resumes, wasting resources on
          developers who don't deliver, and finally have your tech to-do list
          taken care of – we’re here to help.
        </BodyText>
        <Button href="" className="w-full lg:px-16 lg:w-max">
          Let's Chat
        </Button>
        <CloudFull className="absolute scale-50 -left-20 bottom-32 sm:bottom-24 sm:-left-20" />
      </Hero>
      <section className="mx-4 mt-10 mb-20 sm:mx-8">
        <div className="grid gap-8 px-4 py-8 bg-light rounded-3xl lg:px-64 lg:gap-10">
          <Heading level="2" dark className="text-center lg:mb-10">
            Our Founder
          </Heading>
          <figure className="flex flex-col justify-center gap-4 sm:items-center sm:justify-between sm:flex-row lg:justify-start lg:gap-16">
            <img
              src={Brian}
              alt="Brian Hurst"
              className="w-24 mx-auto sm:mx-0 sm:w-48"
            />
            <figcaption>
              <Heading
                level="3"
                className="mb-4 text-lg text-center sm:text-2xl sm:text-left lg:text-2xl font-Poppins"
                dark
              >
                Brian Hurst
              </Heading>
              <BodyText className="italic text-center sm:text-left sm:text-xl sm:max-w-[40ch] text-accent ">
                “I’d like to create a space where clients can truly focus on
                their ideas and creativity without the restrictions of not
                understanding how to code or how the web works behind the
                scenes.”
              </BodyText>
            </figcaption>
          </figure>
          <BodyText className="text-sm text-center sm:text-lg text-dark">
            Brian Hurst is the Founder and CEO of More Seconds. As a top-rated
            web developer with ten years of experience and a lifelong
            entrepreneur, he is passionate about understanding the challenges
            your business faces and creating custom solutions tailored to your
            individual needs. Brian and his team have helped visionary leaders
            and businesses make their web dreams come true since 2018. In
            addition to his hands-on technical expertise, Brian holds a BS in
            Computer Science from the University at Albany, SUNY.
          </BodyText>
        </div>
      </section>
      <Clients />
      <Partners />
      <Team hideImageMobile />
      <SectionBlur />
      <div className="relative flex items-center justify-end h-0 top-4">
        <Cloud className="z-50 opacity-100" />
      </div>
      <Testimonials />
      <section className="relative mx-4 mb-20 text-center sm:pb-20">
        <Heading
          level="2"
          className="max-w-[15ch] sm:max-w-none mx-auto text-3xl mb-10"
        >
          Your Dedicated Digital Team
        </Heading>
        <BodyText className="text-xl sm:text-lg sm:mx-10 lg:mx-auto lg:max-w-3xl">
          More Seconds is a full-service digital agency that provides premium
          web support for agencies, startups, businesses, and more. If you can
          dream it, More Seconds can make it. We are passionate problem solvers
          who seamlessly deliver the service and speed of an in-house
          development team for a fraction of the cost.
        </BodyText>
        <BallOrange className="absolute hidden sm:block sm:top-1/2 sm:-left-4 sm:scale-50" />
        <Star className="absolute hidden sm:block sm:bottom-0 sm:left-10" />
        <BallOrange className="absolute hidden sm:block sm:-top-10 sm:right-0" />
      </section>
    </Layout>
  )
}
