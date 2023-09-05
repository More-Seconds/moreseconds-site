import { Button } from 'components/Button'
import { Dedicated } from 'components/shared sections/Dedicated'
import { SectionBlur } from 'components/SectionBlur'
import { Clients } from 'components/shared sections/Clients'
import { Partners } from 'components/shared sections/Partners'
import { Team } from 'components/shared sections/Team'
import { Testimonials } from 'components/shared sections/Testimonials'
import { BodyText } from 'components/typography/BodyText'
import { Heading } from 'components/typography/Heading'
import { Hero } from 'containers/shared/Hero'
import { Layout } from 'containers/layout/Layout'
import { Brian } from 'public/images'
import {
  AboutHero,
  BallBlue,
  BallOrange,
  BallPurple,
  CircleHighlight,
  Cloud,
  CloudFull,
  CloudOpaque,
  Highlight,
  Rocket,
  Star
} from 'public/svgs'

export function About() {
  return (
    <Layout footerVariant="connect">
      <Hero svg={AboutHero}>
        <Heading level="1" className="max-w-4xl">
          <span className="relative">We’re </span>
          <span className="relative z-10">
            here
            <CircleHighlight className="absolute hidden sm:block sm:scale-[55%] sm:-left-11 sm:-top-6 xl:scale-100 xl:-top-3 xl:-left-4 z-0" />
          </span>
          <span> </span>
          <>
            to exponentially increase your most valuable, finite asset – your
            time
          </>
        </Heading>
        <BodyText className="max-w-lg sm:max-w-sm xl:max-w-md">
          More Seconds takes your web development projects from headache to
          handled so that you have time to focus on what you do best – driving
          traffic and sales for your business. If you want to stop scrolling
          through freelancers, sorting through resumes, wasting resources on
          developers who don't deliver, and finally have your tech to-do list
          taken care of – we’re here to help.
        </BodyText>
        <div className="flex justify-center sm:justify-start">
          <Button href="#contact" className="w-full sm:px-16 sm:w-min">
            Let's Chat
          </Button>
        </div>
        <CloudFull className="absolute scale-50 -left-20 bottom-32 sm:bottom-24 sm:-left-20" />
      </Hero>
      <section className="relative mx-4 mt-10 mb-20 sm:mx-8 xl:mx-16">
        <div className="grid gap-8 px-4 py-8 bg-light rounded-3xl sm:px-16 xl:px-64 xl:gap-10 xl:py-24">
          <Heading level="2" dark className="text-center xl:mb-10 xl:text-5xl">
            Our Founder
          </Heading>
          <figure className="relative flex flex-col justify-center gap-4 sm:items-center sm:justify-between sm:flex-row xl:justify-start xl:gap-16">
            <img
              src={Brian}
              alt="Brian Hurst"
              className="w-24 mx-auto sm:mx-0 sm:w-48"
            />
            <figcaption className="relative">
              <Heading
                level="3"
                className="mb-4 text-lg text-center sm:text-2xl sm:text-left xl:text-2xl font-Poppins"
                dark
              >
                Brian Hurst
              </Heading>
              <BodyText className="italic text-center sm:text-left sm:text-[22px] sm:leading-[28px] sm:max-w-[40ch] text-accent ">
                “I’d like to create a space where clients can truly focus on
                their ideas and creativity without the restrictions of not
                understanding how to code or how the web works behind the
                scenes.”
              </BodyText>
              <Highlight className="absolute hidden sm:block -bottom-10 -left-10 sm:scale-75 xl:scale-100" />
              <Highlight className="absolute hidden sm:block sm:rotate-180 -right-6 top-2 sm:scale-75 xl:scale-100" />
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
        <Rocket className="hidden sm:block sm:absolute sm:scale-75 sm:right-0 sm:-top-24 xl:right-24 xl:-top-16" />
        <BallBlue className="absolute top-0 scale-[8%] xl:top-40 xl:right-[2%]" />
        <BallOrange className="absolute hidden scale-50 sm:block bottom-10 left-4" />
        <BallPurple className="absolute hidden scale-75 sm:block top-16 left-4" />
      </section>
      <Clients />
      <Partners />
      <Team hideImageMobile />
      <SectionBlur />
      <div className="relative flex items-center justify-end h-0 top-4">
        <Cloud className="z-50 opacity-100" />
      </div>
      <Testimonials title="Our Clients Always Come First" />
      <Dedicated />
    </Layout>
  )
}
