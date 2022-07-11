import { Heading } from 'components/typography/Heading'
import { Jason } from 'public/images'
import { CarouselArrow } from 'public/svgs'
import { useState } from 'react'
import { Dots } from './Dots'
import { Testimonial } from './Testimonial'

export function Testimonials() {
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
    <section className="flex flex-col items-center justify-center py-32">
      <Heading level="2" className="mb-10 text-center">
        Our Clients Stick With Us For A Reason
      </Heading>
      <div className="flex gap-24 mx-auto">
        <CarouselArrow
          className="self-center rotate-180"
          onClick={decrementActive}
        />
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
        <CarouselArrow className="self-center" onClick={incrementActive} />
      </div>
      <Dots activeIndex={active} />
    </section>
  )
}
