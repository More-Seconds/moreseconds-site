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
  title: string
}

export function Testimonials(props: Props) {
  const [active, setActive] = useState(0)

  function incrementActive() {
    if (active == 5) {
      setActive(-1)
    }
    setActive((active) => active + 1)
  }

  function decrementActive() {
    if (active == 0) {
      setActive(6)
    }
    setActive((active) => active - 1)
  }
  return (
    <section className="relative flex flex-col py-16 mx-4 lg:py-32 sm:mx-32 lg:mx-auto lg:max-w-4xl">
      <Heading
        level="2"
        className="mx-auto mb-4 sm:mb-12 tracking-tighter text-[30px] sm:text-[35px] text-center capitalize lg:text-[46px] lg:leading-[56px] lg:max-w-none"
      >
        {props.title}
      </Heading>
      <div className="relative flex gap-4 mx-auto mb-5 sm:gap-24">
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
          at all times of the day/night with self inflicted emergencies. They
          quickly got me back on track. I consider them a part of my Team.”
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
          “Working with Brian and his team at More Seconds has been a blessing
          for our company. Not only did they provide innovative ways for us to
          design and develop our website, but implemented them in such a way
          where it was easy to manage following deployment. When we experienced
          problems in our production environment, More Seconds were quick to get
          a hold of and they worked overnight to resolve all issues. I can truly
          say if it wasn't for the amazing staff of More Seconds, our business
          wouldn't be experiencing the growth and profitability that we are
          seeing today.”
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
        <Testimonial
          image={Helen}
          company="Age Perfectly"
          name="Helen Jackman"
          title="CEO / Owner"
          hidden={active != 5}
        >
          “Prompt response, quick resolution.”
        </Testimonial>
        <div className="absolute flex items-center justify-center w-8 h-8 border rounded-full right-10 sm:-left-20 sm:top-1/2 sm:-translate-y-1/2 hover:border-accent lg:w-12 lg:h-12 lg:-translate-y-24 lg:-left-40">
          <CarouselArrow
            className="rotate-180 fill-mid hover:fill-accent w-full h-full scale-125"
            onClick={decrementActive}
          />
        </div>
        <div className="absolute right-0 flex items-center justify-center w-8 h-8 border rounded-full sm:-right-20 sm:top-1/2 sm:-translate-y-1/2 hover:border-accent lg:w-12 lg:h-12 lg:-translate-y-24 lg:-right-40">
          <CarouselArrow
            className="fill-mid hover:fill-accent w-full h-full scale-125"
            onClick={incrementActive}
          />
        </div>
      </div>
      <Dots activeIndex={active} />
      <Star className="absolute scale-75 -right-48 top-52 lg:hidden" />
      <BallPurple className="absolute hidden sm:block sm:top-32 sm:-left-20 lg:-left-48" />
      <BallPurple className="absolute hidden sm:block sm:top-40 sm:-right-24 lg:-right-48 sm:scale-75" />
      <BallBlue className="absolute hidden sm:block sm:bottom-40 sm:-left-28 lg:-left-56" />
    </section>
  )
}
