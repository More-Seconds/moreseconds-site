import { Code, Research, Updates, UX } from 'public/images'
import { Heading } from './Heading'
import { Service } from './Service'
import { SmallTitle } from './SmallTitle'

export function Services() {
  return (
    <section>
      <SmallTitle className="mb-2 text-center">Our Services</SmallTitle>
      <Heading level="2" className="max-w-xl mx-auto mb-20 text-center">
        Access a broad slate of services and innovative solutions
      </Heading>
      <ul className="grid max-w-6xl grid-rows-2 gap-4 mx-auto grid-cols-services">
        <Service
          title="Web Development"
          className="col-start-1 row-span-2 row-start-1"
          image={Code}
          slug={''}
        />
        <Service
          title="UX/UI Design"
          className="col-span-2 col-start-2 row-start-1"
          image={UX}
          slug={''}
        />
        <Service title="Website Updates" image={Updates} slug={''} />
        <Service title="Research &#38; Analysis" image={Research} slug={''} />
      </ul>
    </section>
  )
}
