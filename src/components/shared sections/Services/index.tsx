import { Code, Research, Updates, UX } from 'public/images'
import { Heading } from '../../typography/Heading'
import { Service } from './Service'
import { SmallTitle } from '../../typography/SmallTitle'
import { BallPurple } from 'public/svgs'

export function Services() {
  return (
    <section className="relative">
      <SmallTitle className="mb-2 text-center">Our Services</SmallTitle>
      <Heading
        level="2"
        className="max-w-xl mx-auto mb-20 text-center xl:text-[56px] xl:leading-[56px] xl:max-w-4xl"
      >
        Access a broad slate of services and innovative solutions
      </Heading>
      <ul className="grid max-w-6xl grid-cols-1 grid-rows-5 gap-4 mx-4 sm:mx-auto sm:grid-rows-2 sm:grid-cols-services md:mx-16 xl:mx-auto">
        <Service
          title="Web Development"
          className="col-start-1 row-span-2 row-start-1"
          image={Code}
          slug={'/web-development'}
        />
        <Service
          title="UX/UI Design"
          className="col-start-1 row-span-1 row-start-3 sm:col-span-2 sm:row-start-1"
          image={UX}
          slug={'/uiux'}
        />
        <Service
          title="Website Updates"
          image={Updates}
          slug={'/website-updates'}
        />
        <Service
          title="Research &#38; Analysis"
          image={Research}
          slug={'/research-analysis'}
        />
      </ul>
      <BallPurple className="absolute top-0 scale-50 right-20" />
    </section>
  )
}
