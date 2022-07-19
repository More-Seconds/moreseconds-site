import { Heading } from 'components/typography/Heading'
import { Jason } from 'public/images'
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
    if (active == 6) {
      setActive(-1)
    }
    setActive((active) => active + 1)
  }

  function decrementActive() {
    if (active == 0) {
      setActive(7)
    }
    setActive((active) => active - 1)
  }
  return (
    <section className="relative flex flex-col py-16 mx-4 lg:py-32 sm:mx-32 lg:mx-auto lg:max-w-4xl">
      <Heading
        level="2"
        className="mx-auto mb-10 text-[30px] sm:text-[35px] text-center capitalize lg:text-4xl lg:max-w-none"
      >
        {props.title}
      </Heading>
      <div className="flex gap-4 mx-auto mb-5 sm:gap-24">
        <Testimonial
          image={Jason}
          company="World wide company"
          name="Jason Mandela"
          title="Head of Design"
          hidden={active != 0}
        >
          “We care about cultivating a long term relationship with our clients
          which is why they consistently turn to More Seconds whenever an issue
          or new assignment arises. Our commitment to excellence, honesty, and
          communication is reflected in our satisfied repeat clientele.”
        </Testimonial>
        <Testimonial
          image={Jason}
          company="company"
          name="Someone else"
          title="title"
          hidden={active != 1}
        >
          2 Lorem ipsum dolor sit amet. Et quam consectetur sed exercitationem
          quis vel quos quis sit reiciendis dolor id voluptatem veniam a tempora
          possimus 33 veniam sint. At velit voluptatem est omnis fugit sed
          eligendi nihil et esse omnis et dolores m
        </Testimonial>
        <Testimonial
          image={Jason}
          company="World wide company"
          name="Someone else"
          title="title"
          hidden={active != 2}
        >
          3 Lorem ipsum dolor sit amet. Et quam consectetur sed exercitationem
          quis vel quos quis sit reiciendis dolor id voluptatem veniam a tempora
          possimus 33 veniam sint. At velit voluptatem est omnis fugit sed
          eligendi nihil et esse omnis et dolores modi et eligendi sequi! Aut
          quam quod sit aperiam illum sed iure voluptas ut nulla labore a sint
        </Testimonial>
        <Testimonial
          image={Jason}
          company="World wide company"
          name="Jason Mandela"
          title="Head of Design"
          hidden={active != 3}
        >
          4 Lorem ipsum dolor sit amet. Et quam consectetur sed exercitationem
          quis vel quos quis sit reiciendis dolor id voluptatem veniam a tempora
          possimus 33 veniam sint. At velit voluptatem est omnis fugit sed
          eligendi nihil et esse omnis et dolores modi et eligendi sequi! Aut
          quam quod sit aperiam illum sed iure res modi et eligendi sequi! Aut
        </Testimonial>
        <Testimonial
          image={Jason}
          company="World wide company"
          name="Jason Mandela"
          title="Head of Design"
          hidden={active != 4}
        >
          5 Lorem ipsum dolor sit amet. Et quam consectetur sed exercitationem
          quis vel quos quis sit reiciendis dolor id voluptatem veniam a tempora
          possimus 33 veniam sint. At velit voluptatem est omnis fugit sed
          eligendi nihil et esse omnis et dolores modi et eligendi sequi! Aut
          quam quod sit aperiam illum sed iure voluptas
        </Testimonial>
        <Testimonial
          image={Jason}
          company="World wide company"
          name="Jason Mandela"
          title="Head of Design"
          hidden={active != 5}
        >
          6 res modi et eligendi sequi! Aut dis dolor id voluptatem veniam a
          tempora possimus 33 veniam sint. At velit voluptatem est omnis fugit
          sed eligendi nihil et esse omnis et dolores modi e
        </Testimonial>
        <Testimonial
          image={Jason}
          company="World wide company"
          name="Jason Mandela"
          title="Head of Design"
          hidden={active != 6}
        >
          7 Lorem ipsum dolor sit amet. Et quam consectetur sed exercitationem
          quis vel quos quis sit reiciendis dolor id voluptatem veniam a tempora
          possimus 33 veniam sint. At velit voluptatem est omnis fugit sed
          eligendi nihil et esse omnis et dolores modi et eligendi sequi! Aut
          quam quod sit aperiam illum sed iure voluptas ut nulla labore a sint
        </Testimonial>
        <div className="absolute flex items-center justify-center w-8 h-8 border-2 rounded-full right-10 sm:-left-14 sm:top-1/2 hover:border-accent">
          <CarouselArrow
            className="rotate-180 fill-mid hover:fill-accent"
            onClick={decrementActive}
          />
        </div>
        <div className="absolute right-0 flex items-center justify-center w-8 h-8 border-2 rounded-full sm:-right-14 sm:top-1/2 hover:border-accent">
          <CarouselArrow
            className="fill-mid hover:fill-accent"
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