import { Button } from 'components/Button'
import { Testimonials } from 'components/shared sections/Testimonials'
import { BodyText } from 'components/typography/BodyText'
import { Heading } from 'components/typography/Heading'
import { SmallTitle } from 'components/typography/SmallTitle'
import { Hero } from 'containers/shared/Hero'
import { Layout } from 'containers/layout/Layout'
import {
  BallOrange,
  Cloud,
  CloudFull,
  Star,
  Planet,
  PricingHero,
  BallBlue,
  BallPurple,
  GradientDot1,
  HomeHeroBG,
  NoMaintenance,
  TeamImage,
  FormCharacter,
  Rocket,
  MusicLady,
  SaturnPurple,
  Highlight
} from 'public/svgs'

import { HeroCentered } from 'containers/shared/HeroCentered'
import Client1 from '../public/images/BAPGradient.png'
import Client2 from '../public/images/MontyGradient.png'
import Client3 from '../public/images/SuncoastGradient.png'

export function Agencies() {
  return (
    <Layout footerVariant="">
      <section className="flex flex-col items-center justify-center w-min h-screen pb-[18rem] pt-[1rem] max-w-full">
        <HeroCentered className="py-0">
          <SmallTitle className="mx-auto text-center">
            WHITE LABEL AGENCY SERVICES
          </SmallTitle>
          <h1 className=" text-white mb-2 md:text-5xl font-semibold max-w-4xl mx-auto text-center">
            Grow Your Agency with More Seconds
          </h1>
          <BodyText className="px-5 mx-auto text-center sm:max-w-4xl sm:px-10 xl:text-lg">
            Are you leaving money on the table because you’ve had bad
            experiences with outsourced web developers and/or haven’t been able
            to successfully supplement your in-house team? Our team of
            U.S.-based developers trusted by top agencies are here to help you
            say, “Yes!” to all of your existing and prospective clients' website
            needs with confidence.
          </BodyText>

          <div className="flex gap-8">
            <Button
              href="#contact"
              className="block px-12 py-3 mx-auto mt-6 text-center"
            >
              Get Started
            </Button>
            <Button
              href="#"
              className="block px-12 py-3 mx-auto mt-6 text-center"
            >
              Learn More
            </Button>
          </div>

          <BallBlue className="absolute top-0 scale-50 left-4 xl:scale-75 xl:left-32 xl:top-16" />
          <Cloud className="hidden rotate-180 xl:-scale-y-100 xl:scale-x-100 xl:left-0" />
          <PricingHero className=" absolute -bottom-[20rem] -left-[7rem] transform scale-x-[-1] h-full w-full max-w-screen-lg" />
          <CloudFull className="absolute top-[25rem] left-[50rem] transform scale-x-[-1] h-[140px] w-[140px]" />
          <CloudFull className="absolute -bottom-[26rem] right-[5rem] transform scale-x-[-1] h-[260px] w-[260px]" />
          <Star className="absolute right-4" />
        </HeroCentered>
      </section>

      <section className="bg-black flex justify-center h-full min-h-full pt-10">
        <div className="flex flex-col sm:text-5xl font-semibold text-white">
          <Heading level="1" className="max-w-4xl my-6">
            Increase Your Revenue
          </Heading>
          <BodyText className="font-thin text-left sm:max-w-3xl xl:text-lg">
            We know this can be a challenging time for agencies. We make it easy
            for agencies to make more money with More Seconds with multiple
            income streams that are a win-win for you and your clients. Offer
            the following services (and more!) to your clients at your preferred
            rate and More Seconds will handle everything else end-to-end while
            you generate profits for your agency.
          </BodyText>

          <div className="services--list p-10">
            <ul className="space-y-2">
              <li>
                <div className="flex items-center">
                  <BallBlue className="h-[40px]" />
                  <h4 className="text-[20px] font-md font-normal ml-4">
                    Website Builds
                  </h4>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <BallOrange className="h-[20px] w-[20px] mr-[1px]" />
                  <h4 className="text-[20px] font-normal ml-4">Web Design</h4>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <BallPurple className="h-[20px] w-[20px] mr-[1px] mt-3" />
                  <h4 className="text-[20px] font-normal ml-4 mt-3">
                    Landing Pages
                  </h4>
                </div>
              </li>
              <li>
                <div className="flex items-center mt-5">
                  <BallOrange className="h-[20px] w-[20px] mr-[1px]" />
                  <h4 className="text-[20px] font-normal ml-4">Templates</h4>
                </div>
              </li>
              <li>
                <div className="flex items-center my-2">
                  <BallBlue className="h-[40px]" />
                  <h4 className="text-[20px] font-normal ml-4 mt-[1px]">
                    24/7 Emergency Fixes
                  </h4>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <BallOrange className="h-[20px] w-[20px] mr-[1px]" />
                  <h4 className="text-[20px] font-normal ml-4">
                    Maintenance Plans
                  </h4>
                </div>
              </li>
              <li>
                <div className="flex items-center mt-5">
                  <BallPurple className="h-[20px] w-[20px] mr-[1px]" />
                  <h4 className="text-[20px] font-normal ml-4">
                    Hosting Services
                  </h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <CloudFull className="absolute -bottom-[23rem] -right-0 transform scale-x-[-1] h-[260px] w-[260px]" />
        <CloudFull className="absolute -bottom-[32rem] left-[2rem] transform scale-x-[-1] h-[200px] w-[200px]" />
      </section>

      <section className="mt-[-20rem]">
        <HomeHeroBG />
      </section>

      <section className="how--it--works h-full flex flex-col items-center  bg-black">
        <span className="relative text-white font-semibold mb-[6rem] lg:text-5xl">
          How It Works
          <NoMaintenance className="absolute left-0 mt-3 w-full" />
        </span>

        <div className="flex flex-col items-center mb-10">
          <div className="flex ml-[22rem] max-w-xl my-[6rem]">
            <TeamImage className="absolute lg:-left-60 lg:-bottom-[125rem] scale-x-[-1] h-[50%]" />
            <BallBlue className="h-[20%] w-[20%] lg:mr-6 relative" />
            <p className="absolute mt-[1rem] ml-[2rem] text-black text-6xl font-semibold">
              1
            </p>
            <div className="mb-10">
              <Heading
                level="2"
                className="text-2xl text-white font-semibold mb-4"
              >
                Sign Up with More Seconds
              </Heading>
              <BodyText className="text-md font-light max-w-lg text-white">
                Our team of web develoBodyTextment experts are ready to take on
                any project. Once you’re set up in our system, simply send over
                any client request and we’ll handle the rest!
              </BodyText>
            </div>
          </div>

          <div className="h-[70%] w-[70%] z-[999]">
            <img src={Client1} alt="" />
          </div>
        </div>

        <div className="flex flex-col items-center mb-[8rem]">
          <div className="flex w-full ml-[24rem] my-20">
            <div className="flex items-center mb-[6rem]">
              <GradientDot1 className="h-[90px] w-[90px] relative" />
              <p className="absolute text-black text-6xl ml-7 font-semibold">
                2
              </p>
              <div className="ml-6">
                <Heading
                  level="2"
                  className="text-2xl text-white font-semibold mb-4"
                >
                  Submit Your Request in Plain English
                </Heading>
                <BodyText className="text-md font-light max-w-lg text-white">
                  No more meetings. No more emails. No more confusing tech
                  terminology. Our proprietary platform, mDash, automatically
                  generates an accurate budget, timeline, and immediately
                  assigns tasks to our team to take you from request to kickoff
                  in seconds.
                </BodyText>
              </div>
            </div>
            <MusicLady className="absolute xl:right-[-1rem] scale-[50%] xl:top-[198rem] z-10" />
            <SaturnPurple className="absolute lg:right-[6rem] lg:mt-20 rotate-14 h-[230px] w-[230px] scale-x-[-1]" />
          </div>
          <div className="h-[70%] w-[70%] z-[999]">
            <img src={Client2} alt="" />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex justify-end w-full mr-[20rem] mb-[10rem]">
            <div className="flex items-center">
              <BallPurple className=" h-[90px] w-[90px] relative" />
              <p className="absolute  text-black text-6xl ml-7 font-semibold">
                3
              </p>
              <div className="ml-6">
                <Heading
                  level="2"
                  className="text-2xl text-white font-semibold mb-4"
                >
                  Receive Updates on Your Project
                </Heading>
                <BodyText className="text-md font-light max-w-[30rem] text-white">
                  We’ll keep you updated on the progress of your project with
                  automatically generated reports tracking every metric and
                  milestone so you can rest easy while staying informed.
                </BodyText>
              </div>

              <FormCharacter className="absolute lg:left-[11rem] lg:h-[300px] w-[300px] scale-x-[-1]" />
            </div>
          </div>
          <div className="h-[70%] w-[70%] z-[999]">
            <img src={Client3} alt="" />
          </div>

          <div className="flex justify-start ml-[26rem] w-full mt-[10rem] mb-[8rem]">
            <div className="flex items-center">
              <BallBlue className=" h-[90px] w-[90px] relative" />
              <p className="absolute text-black text-6xl ml-6 font-semibold">
                4
              </p>
              <div className="ml-6">
                <Heading
                  level="2"
                  className="text-2xl text-white font-semibold mb-4"
                >
                  Launch That Beautiful Website!
                </Heading>
                <div>
                  <Rocket className="absolute -rotate-45 scale-[45%] xl:right-[6.5rem] xl:-mt-[10.5rem]" />
                  <Planet className="absolute right-[7rem] scale-[180%]" />
                </div>

                <BodyText className="text-sm font-light max-w-lg text-white">
                  There’s a reason why tastemakers like Pharrell Williams’ Black
                  Ambition & YELLOW and top agencies like Hawke Media trust More
                  Seconds with their web projects. Your clients will be thrilled
                  with the results!
                </BodyText>
                <Button
                  href="#"
                  className="block mt-6 text-center max-w-[250px]"
                >
                  Get Started
                </Button>
                <Highlight className="absolute right-[685px] scale-x-[-1] h-[25px] w-[25px] mt-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials title={'Good design converts'} />
    </Layout>
  )
}
