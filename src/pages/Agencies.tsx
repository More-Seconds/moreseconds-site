import { Button } from 'components/Button'
import { Testimonials } from 'components/shared sections/Testimonials'
import { BodyText } from 'components/typography/BodyText'
import { Heading } from 'components/typography/Heading'
import { SmallTitle } from 'components/typography/SmallTitle'
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
  Highlight,
  BallLightBlue,
  PurplePinkBall,
  GrayStar
} from 'public/svgs'

import { HeroCentered } from 'containers/shared/HeroCentered'
import Client1 from '../public/images/BAPGradient.png'
import Client2 from '../public/images/MontyGradient.png'
import Client3 from '../public/images/SuncoastGradient.png'

export function Agencies() {
  return (
    <Layout footerVariant="">
      <section className="flex flex-col items-center justify-center md:h-screen lg:pb-[19rem] md:mt-[4rem] max-w-full">
        <HeroCentered className="pt-[4rem] md:pt-[10rem]">
          <SmallTitle className="mx-auto text-center">
            WHITE LABEL AGENCY SERVICES
          </SmallTitle>
          <h1 className=" text-white mb-2 md:text-5xl font-semibold max-w-4xl mx-auto text-center">
            Grow Your Agency with More Seconds
          </h1>
          <BodyText className="px-5 text-sm mx-auto text-center sm:max-w-4xl sm:px-10 lg:text-lg">
            Are you leaving money on the table because you’ve had bad
            experiences with outsourced web developers and/or haven’t been able
            to successfully supplement your in-house team? Our team of
            U.S.-based developers trusted by top agencies are here to help you
            say, “Yes!” to all of your existing and prospective clients' website
            needs with confidence.
          </BodyText>

          <GrayStar className="absolute h-[30px] top-[30%] right-24" />

          <div className="flex gap-4 md:gap-8">
            <Button
              href="#contact"
              className="block px-4 lg:px-12 py-3 mx-auto mt-6 text-center text-xs md:text-base"
            >
              Get Started
            </Button>
            <Button
              href="#"
              className="block px-4 lg:px-12 py-3 mx-auto mt-6 text-center text-xs md:text-base"
            >
              Learn More
            </Button>
          </div>

          <BallBlue className="hidden md:absolute top-0 scale-50 left-4 xl:scale-75 xl:left-32 xl:top-16" />
          <Cloud className="hidden rotate-180 xl:-scale-y-100 xl:scale-x-100 xl:left-0" />
          <PricingHero className="absolute left-0 h-[350px] w-[350px] top-[80%] lg:-bottom-[20rem] lg:left-[0%] transform scale-x-[-1] lg:h-full lg:w-full max-w-screen-lg" />
          <CloudFull className="hidden md:block absolute top-[40rem] xl:left-[50rem] 2xl:left-[60rem] transform scale-x-[-1] h-[140px] w-[140px]" />
          <CloudFull className="hidden md:block absolute lg:-bottom-[26rem] lg:right-[5rem] 2xl:right-[20rem] transform scale-x-[-1] h-[260px] w-[260px]" />
          <CloudFull className="hidden md:block absolute lg:-bottom-[48rem] lg:right-[0rem] 2xl:right-[12rem]] transform scale-x-[-1] h-[320px] w-[320px]" />
          <CloudFull className="hidden md:block absolute lg:-bottom-[65rem] lg:left-[0rem] 2xl:right-[20rem] transform scale-x-[-1] h-[200px] w-[200px]" />
          <Star className="absolute scale-x-[-1] h-[20px] w-[20px] md:h-[35px] md:w-[35px] top-[30rem] md:top-[40rem] right-[10rem]" />
        </HeroCentered>
      </section>

      <section className="bg-black flex justify-center h-full mt-[10rem] md:mt-10 lg:mt-[15rem]">
        <div className="flex flex-col sm:text-5xl font-semibold text-white">
          <Heading
            level="1"
            className="px-8 lg:max-w-4xl my-6 text-center md:text-left"
          >
            Increase Your Revenue
          </Heading>
          <BodyText className="font-thin px-8 text-center md:text-left text-xs md:text-sm md:max-w-xl xl:max-w-3xl xl:text-lg">
            We know this can be a challenging time for agencies. We make it easy
            for agencies to make more money with More Seconds with multiple
            income streams that are a win-win for you and your clients. Offer
            the following services (and more!) to your clients at your preferred
            rate and More Seconds will handle everything else end-to-end while
            you generate profits for your agency.
          </BodyText>

          <div className="services--list p-10">
            <ul className="space-y-2 lg:space-y-4">
              <li>
                <div className="flex items-center">
                  <BallLightBlue className="h-[17px] w-[17px] lg:h-[20px] lg:w-[20px] mr-[0.3rem] lg:mr-[1px]" />
                  <h4 className="text-base lg:text-[20px] font-md font-normal ml-4">
                    Website Builds
                  </h4>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <GradientDot1 className="h-[17px] w-[17px] lg:h-[20px] lg:w-[20px] mr-[0.3rem] lg:mr-[1px]" />
                  <h4 className="text-base lg:text-[20px] font-md font-normal ml-4">
                    Web Design
                  </h4>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <PurplePinkBall className="h-[17px] w-[17px] lg:h-[20px] lg:w-[20px] mr-[0.3rem] lg:mr-[1px]" />
                  <h4 className="text-base lg:text-[20px] font-md font-normal ml-4">
                    Landing Pages
                  </h4>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <BallOrange className="h-[17px] w-[17px] lg:h-[20px] lg:w-[20px] mr-[0.3rem] lg:mr-[1px]" />
                  <h4 className="text-base lg:text-[20px] font-md font-normal ml-4">
                    Templates
                  </h4>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <BallLightBlue className="h-[17px] w-[17px] lg:h-[20px] lg:w-[20px] mr-[0.3rem] lg:mr-[1px]" />
                  <h4 className="text-base lg:text-[20px] font-md font-normal ml-4">
                    24/7 Emergency Fixes
                  </h4>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <GradientDot1 className="h-[17px] w-[17px] lg:h-[20px] lg:w-[20px] mr-[0.3rem] lg:mr-[1px]" />
                  <h4 className="text-base lg:text-[20px] font-md font-normal ml-4">
                    Maintenance Plans
                  </h4>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <PurplePinkBall className="h-[17px] w-[17px] lg:h-[20px] lg:w-[20px] mr-[0.3rem] lg:mr-[1px]" />
                  <h4 className="text-base lg:text-[20px] font-md font-normal ml-4">
                    Hosting Services
                  </h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-0 lg:mt-[-20rem]">
        <HomeHeroBG />
      </section>

      <section className="how--it--works h-full flex flex-col items-center bg-black">
        <span className="relative text-white font-semibold lg:mb-[6rem] text-4xl lg:text-5xl 2xl:text-6xl">
          How It Works
          <NoMaintenance className="absolute left-0 mt-3 w-full" />
        </span>

        <div className="flex flex-col items-center justify-center mb-10">
          <div className="flex items-center px-2 md:ml-[17rem] lg:ml-[22rem] md:max-w-xl my-[6rem] md:my-[6rem]">
            <TeamImage className="hidden md:block absolute right-[37%] scale-x-[-1] h-[30%] lg:h-[45%] lg:top-[355%] lg:left-[-16%] 2xl:top-[345%] 2xl:left-[-7rem] 2xl:h-[60%]" />
            <BallLightBlue className="h-[60px] w-[60px] lg:h-[90px] lg:w-[90px] 2xl:w-[110px] 2xl:h-[110px] relative" />
            <p className="absolute text-black text-3xl lg:text-6xl ml-5 lg:ml-7 font-semibold">
              1
            </p>
            <div className="ml-6 ">
              <Heading
                level="2"
                className="md:text-lg lg:text-2xl 2xl:text-3xl text-white font-semibold mb-4"
              >
                Sign Up with More Seconds
              </Heading>
              <BodyText className="text-xs lg:text-base max-w-sm 2xl:text-lg font-light xl:max-w-lg 2xl:max-w-xl text-white">
                Our team of web development experts are ready to take on any
                project. Once you’re set up in our system, simply send over any
                client request and we’ll handle the rest!
              </BodyText>
            </div>
          </div>

          <div className="h-[70%] w-[70%] z-[999]">
            <img src={Client1} alt="" />
          </div>
        </div>

        <div className="flex flex-col items-center mb-[8rem]">
          <div className="flex w-full md:ml-[24rem] mt-10 md:my-20">
            <div className="flex items-center mb-[6rem]">
              <GradientDot1 className="h-[60px] w-[60px] lg:h-[90px] lg:w-[90px] 2xl:w-[110px] 2xl:h-[110px] relative" />
              <p className="absolute text-black text-3xl lg:text-6xl ml-5 lg:ml-7 2xl:ml-10 font-semibold">
                2
              </p>
              <div className="ml-6">
                <Heading
                  level="2"
                  className="md:text-lg lg:text-2xl 2xl:text-3xl text-white font-semibold mb-4"
                >
                  Submit Your Request in Plain English
                </Heading>
                <BodyText className="text-xs lg:text-base max-w-sm 2xl:text-lg font-light xl:max-w-lg 2xl:max-w-xl text-white">
                  No more meetings. No more emails. No more confusing tech
                  terminology. Our proprietary platform, mDash, automatically
                  generates an accurate budget, timeline, and immediately
                  assigns tasks to our team to take you from request to kickoff
                  in seconds.
                </BodyText>
              </div>
            </div>

            <MusicLady className="absolute right-[-8%] top-[336%] scale-[30%] xl:right-[2%] lg:scale-[50%] 2xl:scale-[60%] xl:top-[465%] 2xl:top-[467%] 2xl:right-[14rem] z-10" />
            <SaturnPurple className="hidden md:block absolute right-[8%] lg:right-[8%] h-[160px] w-[160px] 2xl:right-[14rem] mt-[4rem] lg:mt-10 rotate-14 lg:h-[250px] lg:w-[250px] 2xl:h-[250px] 2xl:w-[320px] 2xl:top-[490%] scale-x-[-1]" />
          </div>
          <div className="h-[70%] w-[70%] z-[999]">
            <img src={Client2} alt="" />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex ml-[10rem] md:ml-0 justify-end w-full mr-[20rem] mb-[10rem] lg:mb-[12rem]">
            <div className="flex items-center">
              <BallPurple className="h-[60px] w-[60px] lg:h-[90px] lg:w-[90px] 2xl:w-[110px] 2xl:h-[110px] relative" />
              <p className="absolute text-black text-3xl lg:text-6xl ml-5 lg:ml-7 2xl:ml-10 font-semibold">
                3
              </p>
              <div className="ml-6">
                <Heading
                  level="2"
                  className="md:text-lg lg:text-2xl 2xl:text-3xl text-white font-semibold mb-4"
                >
                  Receive Updates on Your Project
                </Heading>
                <BodyText className="text-xs lg:text-base max-w-sm 2xl:text-lg font-light xl:max-w-lg 2xl:max-w-xl text-white">
                  We’ll keep you updated on the progress of your project with
                  automatically generated reports tracking every metric and
                  milestone so you can rest easy while staying informed.
                </BodyText>
              </div>

              <FormCharacter className="hidden md:block absolute h-[260px] w-[260px] left-[5%] xl:left-[16%] xl:top-[610%] 2xl:h-[380px] 2xl:w-[380px] xl:h-[320px] xl:w-[320px] 2xl:left-[15%] 2xl:top-[600%] scale-x-[-1]" />
            </div>
          </div>
          <div className="h-[70%] w-[70%] z-[999]">
            <img src={Client3} alt="" />
          </div>

          <div className="flex justify-start ml-[26rem] w-full mt-[10rem] mb-[8rem]">
            <div className="flex items-center">
              <BallLightBlue className=" h-[90px] w-[90px] relative" />
              <p className="absolute text-black text-6xl ml-6 font-semibold">
                4
              </p>
              <div className="ml-6">
                <Heading
                  level="2"
                  className="lg:text-2xl 2xl:text-3xl text-white font-semibold mb-4"
                >
                  Launch That Beautiful Website!
                </Heading>
                <div>
                  <Rocket className="absolute -rotate-45 scale-[35%] right-[4%] xl:scale-[55%] 2xl:scale-[65%] xl:right-[13%] 2xl:right-[17%] 2xl:top-[716%] top-[546%] lg:top-[738%]" />
                  <Planet className="absolute xl:right-[13%] 2xl:right-[17%] 2xl:top-[740%] scale-[125%] lg:top-[764%] right-[5%] xl:scale-[240%] 2xl:scale-[270%]" />
                </div>

                <BodyText className="text-xs lg:text-base max-w-sm 2xl:text-lg font-light xl:max-w-lg 2xl:max-w-xl text-white">
                  There’s a reason why tastemakers like Pharrell Williams’ Black
                  Ambition & YELLOW and top agencies like Hawke Media trust More
                  Seconds with their web projects. Your clients will be thrilled
                  with the results!
                </BodyText>
                <Button
                  href="#"
                  className="block mt-6 text-center py-2 text-xs max-w-[150px] xl:text-base xl:max-w-[250px] xl:py-3"
                >
                  Get Started
                </Button>
                <Highlight className="absolute right-[10%] xl:left-[574px] 2xl:left-[735px] scale-x-[-1] h-[25px] w-[25px] mt-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials title={'Good design converts'} />
    </Layout>
  )
}
