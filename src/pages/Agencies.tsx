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
      <section className="flex flex-col items-center justify-center md:pb-[18rem] md:h-screen max-w-full">
        <HeroCentered className="pt-[4rem] md:pt-0 md:py-0 ">
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

          <div className="flex gap-4 md:gap-8 mt-10 mb-[5rem] md:mb-0">
            <Button
              href="#contact"
              className="px-4 text-sm md:text-md md:px-12 z-[999]"
            >
              Get Started
            </Button>
            <Button
              href="/services"
              className="px-4 text-sm md:px-12 md:text-md z-[999]"
            >
              Learn More
            </Button>
          </div>

          <BallBlue className="hidden md:absolute top-0 scale-50 left-4 xl:scale-75 xl:left-32 xl:top-16" />
          <Cloud className="hidden rotate-180 xl:-scale-y-100 xl:scale-x-100 xl:left-0" />
          <PricingHero className="absolute left-0 h-[350px] w-[350px] top-[80%] md:top-[95%] lg:top-[80%] lg:left-[-10%] 2xl:left-[-5%] transform scale-x-[-1] md:w-[90%] lg:h-[90%] 2xl:h-full 2xl:w-full lg:w-full max-w-screen-lg" />
          <CloudFull className="hidden lg:block absolute top-[30rem] xl:left-[60rem] 2xl:left-[60rem] transform scale-x-[-1] h-[140px] w-[140px]" />
          <CloudFull className="hidden md:block absolute lg:top-[190%] lg:right-0 2xl:right-[20rem] transform scale-x-[-1] h-[240px] w-[240px]" />
          <CloudFull className="hidden md:block absolute lg:-bottom-[48rem] lg:left-[0rem] 2xl:right-[20rem] transform scale-x-[-1] h-[210px] w-[210px]" />
          <GrayStar className="absolute h-[15px] top-[15%] right-[15%] lg:top-[50%] lg:right-14 lg:h-[30px]" />
          <Star className="absolute scale-x-[-1] h-[20px] w-[20px] md:h-[35px] md:w-[35px] top-[40rem] right-[10rem]" />
        </HeroCentered>
      </section>

      <section className="bg-black flex justify-center lg:mt-10 lg:h-full min-h-full">
        <div className="flex flex-col sm:text-5xl font-semibold text-white mt-[12rem] md:mt-0">
          <Heading
            level="1"
            className="sm:px-10 lg:max-w-4xl mb-6 text-center md:text-left"
          >
            Increase Your Revenue
          </Heading>
          <BodyText className="px-5 text-sm mx-auto font-thintext-center md:text-left sm:max-w-4xl sm:px-10 lg:text-lg">
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
        <span className="mt-10 md:mt-0 relative text-white font-semibold mb-[4rem] md:mb-[6rem] text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl">
          How It Works
          <NoMaintenance className="absolute left-0 mt-3 w-full" />
        </span>

        <div className="flex flex-col items-center justify-center md:mb-10">
          <div className="flex flex-col md:flex-row items-center px-6 md:ml-[17rem] lg:ml-[22rem] md:max-w-xl my-[4rem] md:my-[6rem] md:px-10 lg:px-2">
            <TeamImage className="hidden md:block absolute right-[37%] md:right-[20%] scale-x-[-1] h-[30%] md:h-[20%] lg:h-[50%] xl:top-[308%] xl:left-[-15%] 2xl:top-[305%] 2xl:left-[-6%] 2xl:h-[60%]" />
            <BallLightBlue className="sm:h-[60px] sm:w-[60px] md:h-[60px] md:w-[60px] lg:h-[110px] lg:w-[110px] relative" />
            <p className="absolute text-black text-3xl lg:text-6xl mt-3 md:mt-0 md:ml-[1.5rem] lg:ml-8 font-semibold">
              1
            </p>
            <div className="ml-6 ">
              <Heading
                level="2"
                className="sm:text-[16px] text-center md:text-left md:text-lg lg:text-2xl 2xl:text-3xl text-white font-semibold mb-4 mt-10 md:mt-0"
              >
                Sign Up with More Seconds
              </Heading>
              <BodyText className="text-xs max-w-xs text-center md:text-left lg:text-base 2xl:text-lg font-light xl:max-w-lg 2xl:max-w-xl text-white">
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

        <div className="flex flex-col items-center justify-center mb-[6rem] md:mb-[8rem]">
          <div className="flex md:w-full md:ml-[12rem] lg:ml-[16rem] my-20">
            <div className="flex flex-col md:flex-row items-center md:mb-[6rem] px-6 md:px-0">
              <GradientDot1 className="sm:h-[60px] sm:w-[60px] md:h-[60px] md:w-[60px] lg:h-[90px] lg:w-[90px] relative" />
              <p className="absolute text-black text-3xl lg:text-6xl mt-3 md:mt-0 md:ml-[1.5rem] lg:ml-8 font-semibold">
                2
              </p>
              <div className="md:ml-6">
                <Heading
                  level="2"
                  className="sm:text-[16px] text-center md:text-left md:text-lg lg:text-2xl 2xl:text-3xl text-white font-semibold mb-4 mt-10 md:mt-0"
                >
                  Submit Your Request in Plain English
                </Heading>
                <BodyText className="text-xs max-w-xs text-center md:text-left lg:text-base 2xl:text-lg font-light xl:max-w-lg 2xl:max-w-xl text-white">
                  No more meetings. No more emails. No more confusing tech
                  terminology. Our proprietary platform, mDash, automatically
                  generates an accurate budget, timeline, and immediately
                  assigns tasks to our team to take you from request to kickoff
                  in seconds.
                </BodyText>
              </div>
            </div>

            <MusicLady className="hidden md:block absolute right-[-8%] md:right-[-18%] top-[336%] scale-[30%] md:scale-[35%] xl:right-[2%] lg:scale-[55%] 2xl:scale-[60%] md:top-[288%] xl:top-[428%] 2xl:top-[425%] 2xl:right-[14rem] z-10" />
            <SaturnPurple className="hidden md:block h-[160px] w-[160px] absolute right-[8%] md:right-[4%] lg:right-[8%] 2xl:right-[14rem] mt-[4rem] md:mt-[7rem] lg:mt-[4rem] rotate-14 md:h-[180px] md:w-[180px] lg:h-[235px] lg:w-[235px] 2xl:h-[250px] 2xl:w-[320px] 2xl:top-[445%] scale-x-[-1]" />
          </div>
          <div className="h-[70%] w-[70%] z-[999]">
            <img src={Client2} alt="" />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex px-6 md:px-0 justify-center md:justify-end w-full md:mr-[6rem] lg:mr-[20rem] mb-[6rem] md:mb-[10rem] lg:mb-[12rem]">
            <div className="flex flex-col md:flex-row items-center">
              <BallPurple className="sm:h-[60px] sm:w-[60px] md:h-[60px] md:w-[60px] lg:h-[90px] lg:w-[90px] relative" />
              <p className="absolute text-black text-3xl lg:text-6xl mt-3 md:mt-0  md:ml-5 lg:ml-7 font-semibold">
                3
              </p>
              <div className="ml-6">
                <Heading
                  level="2"
                  className="sm:text-[16px] text-center md:text-left md:text-lg lg:text-2xl 2xl:text-3xl text-white font-semibold mb-4 mt-10 md:mt-0"
                >
                  Receive Updates on Your Project
                </Heading>
                <BodyText className="text-xs md:max-w-xs text-center md:text-left lg:text-base 2xl:text-lg font-light xl:max-w-lg 2xl:max-w-xl text-white">
                  We’ll keep you updated on the progress of your project with
                  automatically generated reports tracking every metric and
                  milestone so you can rest easy while staying informed.
                </BodyText>
              </div>

              <FormCharacter className="hidden md:block absolute h-[260px] w-[260px] left-[5%] xl:left-[10%] xl:top-[575%] 2xl:h-[380px] 2xl:w-[380px] xl:h-[320px] xl:w-[320px] md:h-[200px] md:w-[200px] 2xl:left-[15%] 2xl:top-[560%] scale-x-[-1]" />
            </div>
          </div>
          <div className="h-[70%] w-[70%] z-[999]">
            <img src={Client3} alt="" />
          </div>

          <div className="flex justify-start md:ml-[10rem] lg:ml-[26rem] w-full mt-[5rem] mb-[6rem]">
            <div className="flex flex-col md:flex-row items-center px-6 md:px-0">
              <BallLightBlue className="sm:h-[60px] sm:w-[60px] md:h-[60px] md:w-[60px] lg:h-[90px] lg:w-[90px] relative" />
              <p className="absolute text-black text-3xl lg:text-6xl mt-3 md:mt-0  md:ml-5 lg:ml-7 font-semibold">
                4
              </p>
              <div className="ml-6 flex flex-col items-center md:items-start">
                <Heading
                  level="2"
                  className="sm:text-[16px] text-center md:text-left md:text-lg lg:text-2xl 2xl:text-3xl text-white font-semibold mb-4 mt-10 md:mt-0"
                >
                  Launch That Beautiful Website!
                </Heading>
                <div>
                  <Rocket className="hidden md:block absolute -rotate-45 scale-[35%] right-[4%] md:right-[3%] xl:scale-[60%] 2xl:scale-[65%] xl:right-[9%] 2xl:right-[17%] 2xl:top-[680%] top-[546%] md:top-[428%] lg:top-[695%]" />
                  <Planet className="hidden md:block absolute xl:right-[10%] 2xl:right-[17%] 2xl:top-[705%] scale-[125%] md:top-[442%] lg:top-[718%] right-[5%] xl:scale-[160%] 2xl:scale-[270%]" />
                </div>

                <BodyText className="text-xs md:max-w-xs text-center md:text-left lg:text-base 2xl:text-lg font-light xl:max-w-lg 2xl:max-w-xl text-white">
                  There’s a reason why tastemakers like Pharrell Williams’ Black
                  Ambition & YELLOW and top agencies like Hawke Media trust More
                  Seconds with their web projects. Your clients will be thrilled
                  with the results!
                </BodyText>
                <Button
                  href="#contact"
                  className="block mt-6 text-center py-2 text-xs max-w-[150px] xl:text-base xl:max-w-[250px] xl:py-3"
                >
                  Get Started
                </Button>
                <Highlight className="absolute right-[22%] md:right-[54%] xl:left-[35%] 2xl:left-[35%] 2xl:mt-[15rem] scale-x-[-1] h-[20px] w-[20px] md:h-[25px] md:w-[25px] md:mt-[10.5rem] mt-[12.5rem] lg:mt-[14rem]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials title={'Good design converts'} />
    </Layout>
  )
}
