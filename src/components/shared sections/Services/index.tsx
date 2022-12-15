import { Code, Research, Updates, UX } from 'public/images'
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

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 pt-4 pb-16 mx-4 overflow-hidden xl:gap-10 max-w-7xl md:mx-16 lg:mx-16 xl:pt-32 xl:mx-auto xl:pl-8 xl:max-w-[1600px] 3xl:pt-60">
        <div className="2xl:w-fit 2xl:self-start">
          <SmallTitle className="mx-2 mb-2 md:mx-8 xl:ml-16">
            The M-Dash
          </SmallTitle>
          <Heading
            level="2"
            className="max-w-lg mx-4 mb-10 md:mx-16 xl:ml-16 xl:text-5xl xl:mr-0 xl:min-w-[20ch]"
          >
            Take your projects from headache to handled in seconds.
          </Heading>
          <BodyText className="max-w-lsg mx-4 mb-2 md:mx-16 xl:ml-16 xl:text-5xl xl:mr-0 xl:min-w-[20ch] xl:text-lg">
            We build pixel-perfect landing pages in record time. From startups
            to established corporations, we utilize the latest technologies and
            platforms to deliver captivating user experiences and web
            interfaces. Our team of top U.S.-based developers write high level,
            production ready code designed to optimize your website’s
            functionality. Experience the benefits of having your own in-house
            digital team without actually hiring one full-time.
          </BodyText>
        </div>

        <div className="content-end 2xl:w-fit 2xl:self-start justify-self-center xl:justify-self-end xl:pr-24">
          <Button>Start a Project </Button>
        </div>
      </div>

      {/* grid-template-rows: repeat(2,minmax(0,0.5fr)) */}
      <ul className="grid max-w-6xl grid-cols-1 gap-4 px-0 mx-4 sm:grid-cols-2 sm:px-4 sm:mx-auto sm:grid-rows-2 lg:grid-cols-4 md:mx-16 xl:mx-auto">
        <Service
          title="Audit & Reporting"
          className="lg:col-start-1 lg:row-span-2 lg:row-start-1"
          image={Code}
          slug={'/web-development'}
        />
        <Service
          title="Page Design"
          className="lg:col-start-2 lg:row-start-2 lg:col-end-4"
          image={UX}
          slug={'/uiux'}
        />
        <Service
          title="Web Care & Upkeep"
          image={Updates}
          slug={'/website-updates'}
        />
        <Service
          title="Page Building"
          image={Research}
          slug={'/research-analysis'}
        />



        <Service
          title="Features & Functionality"
          className="lg:col-start-4 lg:col-end-5 lg:row-span-2 lg:row-start-1"

          image={Code}
          slug={'/web-development'}
        />
      </ul>

      
      
      <BallPurple className="absolute top-0 scale-50 right-20" />
    </section>
  )
}
