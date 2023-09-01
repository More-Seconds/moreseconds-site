import { Heading } from 'components/typography/Heading'
import {
  CodyJ,
  DanielM,
  Helen,
  JaredLindo,
  Jason,
  KellyT,
  MikeD
} from 'public/images'
import { BallBlue, BallPurple, CarouselArrow, Star } from 'public/svgs'
import { useState } from 'react'
import { Dots } from './Dots'
import { Testimonial } from './Testimonial'

type Props = {
  title: string | JSX.Element[]
}

export function Testimonials(props: Props) {
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
    <section className="relative flex flex-col py-16 sm:px-[25px] md:mx-4 md:mx-32 lg:pt-20 xl:mx-auto xl:max-w-4xl xl:py-32">
      <Heading
        level="2"
        className="mx-auto mb-4 sm:mb-12 tracking-tighter text-[30px] sm:text-2xl sm:text-center md:text-center md:text-[35px] text-center md:max-w-[45rem] md:text-[2.5rem] md:leading-[1.35] xl:text-[46px] xl:leading-[56px] xl:max-w-[45rem]"
      >
        {props.title}
      </Heading>
      <div className="relative flex gap-4 mx-auto mb-5 sm:gap-24 md:w-[90%] md:justify-center">
        <Testimonial
          image={JaredLindo}
          company="Siro Solutions"
          name="Jared Lindo"
          title="CEO / Owner"
          hidden={active != 0}
        >
          “Brian and his team have been amazing to work with. They do
          exceptional work, communicate frequently, and have a serious depth of
          knowledge.”
        </Testimonial>
        <Testimonial
          image={KellyT}
          company="Listing Language"
          name="Kelley Tanzola"
          title="Founder"
          hidden={active != 1}
        >
          “More Seconds is part of my Team. I have worked with More Seconds for
          over 3 years now. My goals and vision were embraced from the very
          beginning. As my vision grew More Seconds has been by my side, making
          sure I understand each step, each new development along the way. Their
          response time and patience have been fantastic as I have reached out
          at all times of the day/night with self inflicted emergencies.”
        </Testimonial>
        <Testimonial
          image={MikeD}
          company="HelpGood"
          name="Mike Damanskis"
          title="Senior Content Producer"
          hidden={active != 2}
        >
          “More Seconds helped deliver us a beautiful, functional, and effective
          site for our client on an accelerated timeline. We're overjoyed that
          our animal shelter client has a new gorgeous site that can more
          effectively showcase these pets—and find more homes for these
          abandoned pups!”
        </Testimonial>
        <Testimonial
          image={CodyJ}
          company="DualStrike LLC"
          name="Cody Johnson"
          title="Co-Founder"
          hidden={active != 3}
        >
          “Not only did More Seconds provide innovative ways for us to design
          and develop our website, but implemented them in such a way where it
          was easy to manage. When we experienced problems in our production
          environment, More Seconds worked overnight to resolve all issues. If
          it wasn't for the amazing staff of More Seconds, our business wouldn't
          be experiencing the growth and profitability that we are seeing
          today.”
        </Testimonial>
        <Testimonial
          image={DanielM}
          company="Algorithm Agency"
          name="Daniel Mickelson"
          title="CEO & Founder"
          hidden={active != 4}
        >
          "I couldn't be happier with the design, development, and technical
          support that we receive from Brian and the More Seconds team. Last
          week, we hit our highest engagement score on record."
        </Testimonial>

        <div className="absolute flex items-center justify-center w-8 h-8 border rounded-full right-10 sm:-left-[3rem] sm:top-1/2 sm:-translate-y-1/2 sm:-left-20 lg:top-[35%] xl:w-12 xl:h-12 xl:-translate-y-24 xl:-left-[10rem] hover:border-accent">
          <CarouselArrow
            className="w-full h-full scale-125 rotate-180 cursor-pointer fill-mid hover:fill-accent"
            onClick={decrementActive}
          />
        </div>
        <div className="absolute right-0 flex items-center justify-center w-8 h-8 border rounded-full sm:-right-[3rem] sm:top-1/2 sm:-translate-y-1/2 md:-right-20 lg:top-[35%] xl:w-12 xl:h-12 xl:-translate-y-24 xl:-right-[15rem] hover:border-accent">
          <CarouselArrow
            className="w-full h-full scale-125 cursor-pointer fill-mid hover:fill-accent"
            onClick={incrementActive}
          />
        </div>
      </div>
      <Dots activeIndex={active} />
      <Star className="absolute scale-75 -right-48 top-52 xl:hidden" />
      <BallPurple className="absolute hidden sm:block sm:top-32 sm:-left-20 xl:-left-48" />
      <BallPurple className="absolute hidden sm:block sm:top-40 sm:-right-24 xl:-right-48 sm:scale-75" />
      <BallBlue className="absolute hidden sm:block sm:bottom-40 h-8 sm:-left-28 xl:-left-56" />
    </section>
  )
}
