import { PageBuilding, PageDesign, WebCare, FeatureFunction, AuditReport } from 'public/images'
import { Heading } from '../../typography/Heading'
import { Service } from './Service'
import { SmallTitle } from '../../typography/SmallTitle'
import { BallPurple } from 'public/svgs'
import { BodyText } from 'components/typography/BodyText'
import { Button } from 'components/Button'


export function Services() {
  return (
    <section className="relative">
      {/* <SmallTitle className="mb-2 text-center">Our Services</SmallTitle>
      <Heading
        level="2"
        className="max-w-xl mx-auto mb-20 text-center xl:text-[56px] xl:leading-[56px] xl:max-w-4xl"
      >
        Access a broad slate of services and innovative solutions
      </Heading> */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 pt-4 pb-16 overflow-hidden xl:gap-10 xl:pt-32 xl:mx-auto xl:max-w-[1400px] xl:px-[45px] 3xl:pt-60">
        <div className="2xl:w-fit 2xl:self-start">
          <SmallTitle className="mb-4">
            Our Services
          </SmallTitle>
          <Heading
            level="2"
            className="mb-6 xl:text-5xl xl:mr-0 xl:min-w-[20ch]"
          >
            {[<>Access a broad slate of services and <span className="text-accent">innovative solutions.</span></>]}
            
          </Heading>
          <BodyText className="mb-2 xl:text-5xl xl:mr-0 xl:min-w-[20ch] xl:text-lg">
          Transform your marketing, creative, and management teams into digital superheroes—literally. Whether it’s an eye-catching site redesign, a couple of landing page builds, an api integration, or a unique problem, you can rest easy knowing that we’re on top of everything and then some.
          </BodyText>
        </div>

        <div className="content-end 2xl:w-fit 2xl:self-start justify-self-center xl:justify-self-end">
          <Button href="/case-studies">View our work</Button>
        </div>
      </div>

      {/* grid-template-rows: repeat(2,minmax(0,0.5fr)) */}
      {/* xl:max-w-[1600px] */}
      <ul className="grid grid-cols-1 gap-4 px-0 mx-4 sm:grid-cols-2 sm:px-4 sm:mx-auto sm:grid-rows-2 lg:grid-cols-4 md:mx-16 xl:mx-auto">
        <Service
          title="Page Building"
          className="lg:col-start-1 lg:row-span-2 lg:row-start-1"
          image={PageBuilding}
          slug={'/web-development'}
        />
        <Service
          title="Features & Functionality"
          className="lg:col-start-2 lg:row-start-1 lg:col-end-4"
          image={FeatureFunction}
          slug={'/web-development'}
        />
        <Service
          title="Webcare & Upkeep"
          image={WebCare}
          slug={'/website-updates'}
        />
        <Service
          title="Web Audit & Reporting"
          image={AuditReport}
          slug={'/research-analysis'}
        />
        <Service
          title="Page Design"
          className="lg:col-start-4 lg:col-end-5 lg:row-span-2 lg:row-start-1"
          image={PageDesign}
          slug={'/uiux'}
        />
      </ul>

      
      
      <BallPurple className="absolute top-0 scale-50 right-20" />
    </section>
  )
}
