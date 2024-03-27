import { SideBySide } from 'containers/shared/SideBySide'
import {
  Envelope,
  Fast,
  Favorite,
  Headset,
  HollowStar,
  Smile,
  TeamImage
} from 'public/svgs'
import { Accordian } from './Accordian'
import { Heading } from '../../typography/Heading'
import { SmallTitle } from '../../typography/SmallTitle'

type Props = {
  hideImageMobile?: boolean
}

export function Team(props: Props) {
  return (
    <section className="relative sm:px-8 md:pl-[45px] md:pr-0 lg:pl-[64px] xl:mx-auto xl:max-w-[1400px] xl:px-[45px]">
      <SideBySide
        svg={TeamImage}
        hideImageMobile={props.hideImageMobile}
        svgStyles="relative self-start justify-self-start lg:-right-[10%] xl:-translate-x-10 xl:-right-[5%]"
      >
        <div className="2xl:w-fit 2xl:self-end my-[3rem] md:mt-0">
          <SmallTitle className="mb-4">Our promise</SmallTitle>
          <Heading
            level="2"
            className=" mb-6 md:mb-10 md:text-[2.5rem] md:leading-[1] xl:max-w-lg xl:text-5xl xl:mr-0 xl:min-w-[20ch]"
          >
            {[
              <>
                Get the <span className="text-accent">speed & service</span> of
                an in-house development team for the cost of a single developer.
              </>
            ]}
          </Heading>
          <ul className="relative z-20 grid gap-3 sm:max-w-xl text-light font-Poppins">
            <Accordian title="Your Go To #dev-ops team" image={Headset} open>
              Get access to a dedicated team of digital professionals that you
              can count on. Each More Seconds dev team includes a technical
              project manager, project coordinator, lead Engineer, and two
              skilled design engineers.
            </Accordian>
            <Accordian
              title="Exceptional Development - Consistent Results"
              image={Fast}
            >
              Our developers are high-performance, solution generating,
              best-in-class specialists. Whether it involves spinning up a
              conversion optimized landing page, integrating the latest API into
              a website, or solving a complex problem, we’ve always got you
              covered.
            </Accordian>
            <Accordian
              title="High-Quality - Delivery On Demand"
              image={Envelope}
            >
              Our development processes are fine-tuned for maximum efficiency
              and high quality product delivery. We know that urgent means
              urgent, and that brand reputation is everything. We’ll be ready to
              tackle your next project at a moment's notice, just send the
              request.
            </Accordian>
            <Accordian title="Full Service - All Inclusive" image={Favorite}>
              Unlock the power of an experienced team through a single point of
              contact. You’ll benefit from a wide range of services without the
              hassle of managing multiple people and taking a piecemeal approach
              with your project. We do all the work, you can sit back and enjoy
              the results.
            </Accordian>
            <Accordian
              title="Trusted Partners - White Label Service"
              image={Smile}
            >
              We care about cultivating a long term relationship with our
              clients, which is why they consistently turn to More Seconds
              whenever an issue or new assignment arises. Our commitment to
              excellence, honesty, and communication is reflected in our
              satisfied repeat clientele.
            </Accordian>
          </ul>
        </div>
      </SideBySide>
      <HollowStar className="absolute hidden sm:block lg:top-50 xl:top-40" />
    </section>
  )
}
