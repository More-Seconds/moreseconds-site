import { Button } from 'components/Button'
import { Card } from 'components/Card'
import { SectionBlur } from 'components/SectionBlur'
import { Clients } from 'components/shared sections/Clients'
import { Partners } from 'components/shared sections/Partners'
import { Projects } from 'components/shared sections/Projects'
import { Services } from 'components/shared sections/Services'
import { Team } from 'components/shared sections/Team'
import { Testimonials } from 'components/shared sections/Testimonials'
import { BodyText } from 'components/typography/BodyText'
import { Heading } from 'components/typography/Heading'
import { SmallTitle } from 'components/typography/SmallTitle'
import { Hero } from 'containers/shared/Hero'
import { Layout } from 'containers/layout/Layout'
import { Brian } from 'public/images'
import {
  AboutHero,
  BallOrange,
  Cloud,
  CloudFull,
  CloudOpaque,
  Star,
  Smoke,
  Planet,
  PricingHero,
  ManArtist,
  BallBlue,
  BallPurple,
  StarOutline,
  BigSaturn,
  HollowStar,
  HomeHeroBG
} from 'public/svgs'

import { HeroCentered } from 'containers/shared/HeroCentered'

export function Agencies() {
  return (
    <Layout footerVariant="">
      <section className="flex flex-col items-center justify-center w-min h-full pb-[18rem]">
        <HeroCentered className="py-0">
          <SmallTitle className="mx-auto text-center">
            WHITE LABEL AGENCY SERVICES
          </SmallTitle>
          <Heading level="1" className="max-w-4xl mx-auto text-center">
            Grow Your Agency with More Seconds
          </Heading>
          <BodyText className="px-5 mx-auto text-center sm:max-w-4xl sm:px-10 xl:text-lg">
            Are you leaving money on the table because you’ve had bad
            experiences with outsourced web developers and/or haven’t been able
            to successfully supplement your in-house team? Our team of
            U.S.-based developers trusted by top agencies are here to help you
            say, “Yes!” to all of your existing and prospective clients' website
            needs with confidence.
          </BodyText>

          <div className="flex gap-12">
            <Button
              href="#contact"
              className="block max-w-xs px-8 py-3 mx-auto mt-6 text-center"
            >
              Get Started
            </Button>
            <Button
              href="#"
              className="block max-w-xs px-8 py-3 mx-auto mt-6 text-center"
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

      <section className="bg-black flex justify-center h-full min-h-full pt-10 ">
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
    </Layout>
  )
}
