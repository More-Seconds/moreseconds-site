import { BallBlue, BallOrange, BallPurple, HollowStar, Star } from 'public/svgs'
import { BodyText } from '../typography/BodyText'
import { Heading } from '../typography/Heading'

type Props = {
  className?: string
}

export function Dedicated(props: Props) {
  return (
    <section
      className={
        'relative mx-4 sm:mb-20 text-center sm:pb-20 ' + props.className ?? ''
      }
    >
      <Heading
        level="2"
        className="max-w-[15ch] sm:max-w-none mx-auto text-3xl mb-10 sm:text-3xl lg:text-[46px] tracking-tighter"
      >
        Your Dedicated Digital Team
      </Heading>
      <BodyText className="text-xl sm:text-lg sm:mx-10 lg:mx-auto lg:max-w-[41rem]">
        More Seconds is a full-service digital agency that provides premium web
        support for agencies, startups, businesses, and more. If you can dream
        it, More Seconds can make it. We are passionate problem solvers who
        seamlessly deliver the service and speed of an in-house development team
        for a fraction of the cost.
      </BodyText>
      <BallOrange className="absolute hidden sm:block sm:top-1/2 sm:-left-4 sm:scale-50" />
      <Star className="absolute hidden sm:block sm:bottom-0 sm:left-10" />
      <BallOrange className="absolute hidden sm:block sm:-top-10 sm:right-0" />
      <HollowStar className="relative scale-50 left-72 sm:hidden" />
      <BallPurple className="relative scale-50 top-8 sm:hidden" />
    </section>
  )
}
