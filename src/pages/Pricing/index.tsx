import { Testimonials } from 'components/shared sections/Testimonials'
import { BodyText } from 'components/typography/BodyText'
import { Heading } from 'components/typography/Heading'
import { Hero } from 'containers/shared/Hero'
import { Layout } from 'containers/layout/Layout'
import {
  CodyThumbnail,
  DanThumbnail,
  StephThumbnail,
} from 'public/images'
import {
  BallOrange,
  BallPurple,
  Cloud,
  CloudFull,
  HollowStar,
  NoMaintenance,
  PricingHero,
  Rocket,
  Sputnik
} from '../../public/svgs'
import { FAQ } from './FAQ'
import { VideoModal } from './VideoModal'
import { Button } from 'components/Button'

export function Pricing() {
  return (
    <Layout footerVariant="simplified">
      <Hero
        svg={PricingHero}
        svgStyles="scale-150 -translate-x-8 sm:scale-100 sm:translate-x-[10%] xl:translate-x-0 pt-[10rem]"
      >
        <Heading
          level="1"
          className="sm:max-w-[18ch] tracking-tighter text-[45px] mr-4 sm:text-[40px] leading-[3rem]"
        >
          <span>Only pay for the work you actually need. </span>
          <span className="text-accent">
            No monthly retainers. No minimums. Zero risk.
          </span>
        </Heading>
        <BodyText className="max-w-[27ch] xl:max-w-md sm:max-w-[40ch] xl:text-lg">
         <>Benefit from the power of an entire development team for only </> 
          <span className="relative text-accent md:text-xl lg::text-3xl">
          $85 an hour             
          <NoMaintenance className="absolute bottom-0 sm:right-[-1rem] sm:w-[7.3rem] md:right-0 md:bottom-[-4px] md:w-[rem] lg:bottom-0 xl:right-[3.5rem] xl:w-[8ch] xl:scale-x-125 xl:translate-x-12" />
          </span>
         <> for most projects. We also offer a competitive fixed rate for
          large builds and affordable maintenance options.</> 
          <></>

        </BodyText>

        <Button href="#contact" className="xl:max-w-[10rem] px-8 md:w-full py-3 mt-6">
          Get an Estimate
        </Button>
        <Sputnik className="hidden md:block -bottom-28 -left-20 scale-[25%] sm:scale-[35%] sm:left-20 xl:scale-75" />
      </Hero>

      <section className="relative grid gap-4 py-10 mx-4 sm:pt-5 sm:pb-24 sm:mx-16 xl:mx-56 xl:pb-40">
        <Rocket className="hidden sm:block sm:absolute sm:right-[7rem] sm:h-[80px] sm:-top-[18rem] md:top-[-30rem]" />
        <HollowStar className="hidden sm:block sm:absolute sm:top-1/2 sm:-right-12" />
        <BallOrange className="hidden sm:block sm:absolute sm:top-[75%] sm:-left-16 sm:scale-50" />
        <Heading level="2" className="mb-4 sm:mt-10 md:mt-0 text-center">
          FAQ
        </Heading>
        <FAQ title="What languages and platforms do you work with?">
          <BodyText className="text-black">
            We regularly work with the following languages:
          </BodyText>
          <ul className="text-DM">
            <li>● PHP</li>
            <li>● Javascript / Jquery / Handlebars.js</li>
            <li>● HTML5</li>
            <li>● CSS3</li>
          </ul>
          <BodyText className="text-black">
            Occasionally, we work on projects involving the following languages:
          </BodyText>
          <ul className="text-DM">
            <li>● React.js / Next.js</li>
            <li>● Typescript</li>
            <li>● Mongo DB</li>
            <li>● SASS</li>
          </ul>
          <BodyText className="text-black">
            We specialize in the following Content Management Systems and
            Platforms:
          </BodyText>
          <ul className="text-DM">
            <li>● WordPress</li>
            <li>● BigCommerce</li>
            <li>● HTML5</li>
            <li>● Webflow</li>
            <li>● Shopify</li>
            <li>● AWS</li>
            <li>● Heroku</li>
          </ul>
        </FAQ>
        <FAQ title="Do you only work with WordPress? I need a solution for my low code/no code website.">
          We are WordPress experts and find that as businesses scale, they often
          outgrow the capabilities of low code/no code website builds. However,
          we are more than happy to create solutions that work with your
          existing web platform.
        </FAQ>
        <FAQ title="How does More Seconds seamlessly integrate into my agency’s workflow for client projects?">
          We provide each of our clients with a dedicated Technical Project
          Manager. This PM will join you on Slack, as well as your favorite
          project management or project ticket platform: Rebooth, Jira,
          Teamwork, etc. From there you’ll be able to send over project
          requests, questions, dad jokes, whatever you’d like.
        </FAQ>
        <FAQ title="Can More Seconds handle the Project Management end?">
          <span>
            Each project request, ticket, or task is stored and mirrored within
            our project management system. We have an open client portal that
            you and your team can join to interact with our team and your
            projects in real-time.
          </span>
        </FAQ>
        <FAQ title="Has More Seconds worked on [type of project] for [type of company]?">
          Most likely, yes! In the rare case that we haven’t, we’ll be upfront
          with you about our experience and propose an innovative solution
          you’ll love.
        </FAQ>
        <FAQ title="I’ve had bad experiences with freelancers and agencies in the past. What makes More Seconds different?">
          We completely understand how stressful it can be to deal with flakey,
          unqualified, and unresponsive freelance developers and agencies. At
          More Seconds, service is our top priority. We are interested in
          cultivating long-term relationships, not pursuing immediate financial
          gain. Our 90% client retention rate demonstrates this commitment to
          excellence.
        </FAQ>
        <FAQ title="Will you be there for me when I have an urgent client web issue in the middle of the night?">
          <span>
            Of course! We’re happy to help with those dreaded late night, urgent
            calls. Create a ticket for an urgent link <a href="#">here</a>
          </span>
        </FAQ>
      </section>

      <section className="relative grid grid-cols-1 grid-rows-3 gap-8 py-24 mx-4 sm:grid-cols-3 sm:grid-rows-1 sm:mx-16 sm:gap-4 xl:mx-32">
        <VideoModal
          thumbnail={DanThumbnail}
          videoId="cltmKuk7ezU"
          name="Daniel Mickelson - Algorithm Agency"
        />
        <VideoModal
          thumbnail={CodyThumbnail}
          videoId="Mzqp3MuI3vE"
          name="Cody Johnson - Dualstrike"
        />
        <VideoModal
          thumbnail={StephThumbnail}
          videoId="Wu9SJumUemc"
          name="Stephanie Wilson - Plant Cell Technology"
        />
        <CloudFull className="hidden sm:block sm:absolute sm:top-0 sm:left-0 sm:-translate-x-[50%]" />
        <Cloud className="hidden sm:block sm:absolute sm:right-0 sm:bottom-0 sm:translate-x-[25%] xl:translate-x-32" />
        <BallPurple className="hidden sm:block sm:absolute sm:scale-75 sm:left-0 sm:bottom-0" />
        <BallOrange className="hidden sm:block sm:absolute sm:-top-4 sm:right-0 sm:scale-75" />
      </section>

      <Testimonials title="No commitment. No hidden fees. Just great service" />
 
    </Layout>
  )
}
