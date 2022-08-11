import {
  BallBlue,
  BallOrange,
  BallPurple,
  CarouselArrow,
  HollowStar,
  MarketingAgencies,
  Star
} from 'public/svgs'
import { useState } from 'react'
import { Dots } from './Dots'
import { Testimonial } from './Testimonial'

export function Carousel() {
  const [active, setActive] = useState(0)

  function incrementActive() {
    if (active == 4) {
      setActive(-1)
    }
    setActive((active) => active + 1)
  }

  function decrementActive() {
    if (active == 0) {
      setActive(5)
    }
    setActive((active) => active - 1)
  }
  return (
    <section className="relative flex flex-col py-8 mx-4 xl:py-32 sm:mx-32 xl:mx-auto xl:max-w-4xl">
      <div className="flex w-full gap-4 mx-auto mb-5 sm:gap-24 ">
        <Testimonial industry="Marketing Agencies" hidden={active != 0}>
          “We care about cultivating a long term relationship with our clients
          which is why they consistently turn to More Seconds whenever an issue
          or new assignment arises. Our commitment to excellence, honesty, and
          communication is reflected in our satisfied repeat clientele.”
        </Testimonial>
        <Testimonial industry="Startups" hidden={active != 1}>
          "I need a fast, on budget, outsourced team to offload my web
          development needs to. I’m interested in custom solutions unique to my
          startup’s platform and innovative execution that will give my business
          a leg up on competitors. I value creativity, new ideas, and speed.
        </Testimonial>
        <Testimonial industry="Businesses " hidden={active != 2}>
          "I need to ensure the technical side of my business always runs
          smoothly and I don’t have the bandwidth to manage additional projects
          or staff. I want a web team that can hit the ground running and
          deliver on their promises. My website needs to be safe, secure,
          responsive and able to provide my customers with the solutions they
          need.
        </Testimonial>
        <Testimonial industry="Event Producers" hidden={active != 3}>
          "I need to hand over the website to a capable developer so I can focus
          on the other aspects of my event. Completing projects on or before the
          deadline is an absolute must to drive ticket sales. My event has
          multiple stakeholders providing input so responsiveness and clear
          communication is key."
        </Testimonial>
        <Testimonial
          industry="Agencies with In-House Teams"
          hidden={active != 4}
        >
          "I need additional developers on-demand to handle overflow when we’re
          up against a tight deadline on a big project and I can’t afford to
          waste time hiring and managing freelancers. Team extension services
          that can seamlessly integrate into my existing operation are essential
          when our in-house team is overloaded."
        </Testimonial>
        <div className="absolute top-[58.5%] flex items-center justify-center w-8 h-8 border-2 rounded-full right-10 sm:-left-14 sm:top-1/2 hover:border-accent">
          <CarouselArrow
            className="rotate-180 fill-mid hover:fill-accent"
            onClick={decrementActive}
          />
        </div>
        <div className="absolute right-0 top-[58.5%] flex items-center justify-center w-8 h-8 border-2 rounded-full sm:-right-14 sm:top-1/2 hover:border-accent">
          <CarouselArrow
            className="fill-mid hover:fill-accent"
            onClick={incrementActive}
          />
        </div>
      </div>
      <Dots activeIndex={active} />
      <Star className="absolute sm:top-8 sm:-right-24" />
      <HollowStar className="hidden sm:scale-75 sm:block sm:absolute sm:-left-24 sm:top-0" />
      <BallOrange className="hidden xl:block xl:absolute xl:bottom-72 xl:-left-72" />
    </section>
  )
}
