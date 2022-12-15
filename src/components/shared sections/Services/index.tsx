import { Code, Research, Updates, UX } from 'public/images'
import { Heading } from '../../typography/Heading'
import { Service } from './Service'
import { SmallTitle } from '../../typography/SmallTitle'
import { BallPurple } from 'public/svgs'
import { Button } from '../../Button'

export function Services() {
  return (
    <section className="relative max-w-7xl md:mx-16 lg:mx-16 xl:pt-32 xl:mx-auto xl:pl-32 xl:max-w-[1600px] 3xl:pt-60">
      <SmallTitle className="mb-2 text-left">Our Services</SmallTitle>

      <div className="flex">
        <Heading
          level="2"
          className="max-w-xl mb-10 text-left xl:text-[56px] xl:leading-[56px] xl:max-w-2xl"
        >
          {[
            <>
              Access a broad slate of services and{' '}
              <span className="text-accent">innovative solutions.</span>
            </>
          ]}
        </Heading>
        <Button
          href="#contact"
          className="self-start w-full px-12 ml-auto py-3 text-center sm:w-auto rounded"
        >
          View our Work
        </Button>
      </div>
      <p className="text-light mb-8 xl:max-w-2xl">
        Transform your marketing, creative, and management teams into digital
        superheroes—literally. Whether it’s an eye-catching site redesign, a
        couple of landing page builds, an api integration, or a unique problem,
        you can rest easy knowing that we’re on top of everything and then some.
      </p>
      <ul className="grid max-w-9xl grid-cols-1 grid-rows-5 gap-4 mx-4 sm:mx-auto sm:grid-rows-2 sm:grid-cols-services md:mx-16 xl:mx-auto">
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
