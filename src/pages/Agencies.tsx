import { Testimonials } from 'components/shared sections/Testimonials'
import { BodyText } from 'components/typography/BodyText'
import { Heading } from 'components/typography/Heading'
import { Hero } from 'containers/shared/Hero'
import { Layout } from 'containers/layout/Layout'
import { PricingTable, PricingTableMobile } from 'public/images'
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
} from 'public/svgs'

export function Agencies() {
  return (
    <Layout footerVariant="simplified">
      <Hero
        svg={PricingHero}
        svgStyles="scale-150 -translate-x-8 sm:scale-100 sm:translate-x-[10%] xl:translate-x-0"
      >
        <Heading
          level="1"
          className="sm:max-w-[18ch] tracking-tighter text-[45px] mr-4 sm:text-[40px] leading-[3rem]"
        >
          <>Only pay for the work you actually need. No monthly retainers. </>
          <br className="sm:hidden" />
          <span className="relative">
            No minimums.
            <NoMaintenance className="absolute left-0 bottom-0 w-full" />
          </span>
          <> Zero risk.</>
        </Heading>
        <BodyText className="max-w-[27ch] xl:max-w-md sm:max-w-[40ch] xl:text-lg">
          Benefit from the power of an entire development team for only $85 an
          hour.
        </BodyText>
        <Sputnik className="absolute -bottom-28 -left-20 scale-[25%] sm:scale-[35%] sm:left-20 xl:scale-75" />
      </Hero>
      <section className="my-10 sm:mx-16 xl:my-20 xl:mx-0 xl:">
        <picture>
          <source media="(min-width: 640px" srcSet={PricingTable} />
          <img
            src={PricingTableMobile}
            alt=""
            className="px-4 pt-4 xl:mx-auto"
          />
        </picture>
      </section>
      <Testimonials title="No commitment. No hidden fees. Just great service" />
      <section className="relative grid grid-cols-1 grid-rows-3 gap-8 py-24 mx-4 sm:grid-cols-3 sm:grid-rows-1 sm:mx-16 sm:gap-4 xl:mx-32">
        <CloudFull className="hidden sm:block sm:absolute sm:top-0 sm:left-0 sm:-translate-x-[50%]" />
        <Cloud className="hidden sm:block sm:absolute sm:right-0 sm:bottom-0 sm:translate-x-[25%] xl:translate-x-32" />
        <BallPurple className="hidden sm:block sm:absolute sm:scale-75 sm:left-0 sm:bottom-0" />
        <BallOrange className="hidden sm:block sm:absolute sm:-top-4 sm:right-0 sm:scale-75" />
      </section>
      <section className="relative grid gap-4 py-10 mx-4 sm:pt-5 sm:pb-24 sm:mx-16 xl:mx-56 xl:pb-40">
        <Rocket className="hidden sm:block sm:absolute sm:-right-8 sm:scale-50 sm:-top-12" />
        <HollowStar className="hidden sm:block sm:absolute sm:top-1/2 sm:-right-12" />
        <BallOrange className="hidden sm:block sm:absolute sm:top-[75%] sm:-left-16 sm:scale-50" />
        <Heading level="2" className="mb-4 text-center">
          FAQ
        </Heading>
      </section>
    </Layout>
  )
}
