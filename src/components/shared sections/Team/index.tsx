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
    <section className="relative">
      <SideBySide
        svg={TeamImage}
        hideImageMobile={props.hideImageMobile}
        svgStyles="self-start justify-self-start xl:-translate-x-10"
      >
        <div className="2xl:w-fit 2xl:self-end">
          <SmallTitle className="mx-2 md:mx-8 xl:ml-16 mb-2">
            Our values
          </SmallTitle>
          <Heading
            level="2"
            className="max-w-lg mx-4 mb-10 md:mx-16 xl:ml-16 xl:text-5xl xl:mr-0 xl:min-w-[20ch]"
          >
            A Reliable Web Development Team You Can Trust
          </Heading>
          <ul className="relative z-20 grid gap-3 sm:max-w-md text-light font-Poppins md:-ml-4 xl:ml-12">
            <Accordian title="Customer Service First" image={Headset}>
              We are here for you every step of the way. Your project is our top
              priority and no question or request is ever too much. Our goal is
              to understand and address the unique challenges that your business
              faces.
            </Accordian>
            <Accordian title="Fast" image={Fast}>
              Have a tight deadline to meet? We’ll get the job done on time,
              every time. Our objective is to work as efficiently as possible –
              not unnecessarily bill more hours. More Seconds has the fastest
              turnaround time in the industry.
            </Accordian>
            <Accordian title="Responsive" image={Envelope}>
              We’ll never leave you hanging. We know how frustrating a lack of
              communication can be so rest assured, you will never have to
              follow up with our team. All questions, concerns, and updates are
              addressed on-demand.
            </Accordian>
            <Accordian title="All Inclusive" image={Favorite}>
              The power of a team with a single point of contact. You’ll benefit
              from a range of services without the hassle of managing multiple
              people and taking a piecemeal approach with your project. We do
              all the work.
            </Accordian>
            <Accordian title="Trusted Partners" image={Smile}>
              We care about cultivating a long term relationship with our
              clients which is why they consistently turn to More Seconds
              whenever an issue or new assignment arises. Our commitment to
              excellence, honesty, and communication is reflected in our
              satisfied repeat clientele
            </Accordian>
          </ul>
        </div>
      </SideBySide>
      <HollowStar className="absolute hidden top-40 sm:block" />
    </section>
  )
}
