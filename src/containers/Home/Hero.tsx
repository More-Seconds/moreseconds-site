import { BodyText } from 'components/BodyText'
import { Heading } from 'components/Heading'
import { Signup } from 'components/Signup'
import { Clients } from 'containers/shared/Clients'
import { SVGBackground } from 'containers/shared/SVGBackground'
import { HomeHeroBG } from 'public/svgs'

export function Hero() {
  return (
    <SVGBackground background={HomeHeroBG}>
      <Heading level="1" className="max-w-lg lg:max-w-3xl 3xl:max-w-5xl">
        Take your projects from headache to handled and free up your valuable
        time
      </Heading>
      <BodyText className="max-w-[30ch] sm:max-w-md lg:max-w-lg">
        We provide the service and speed of an in-house development team for the
        cost of a single developer.
      </BodyText>
      <Signup />
    </SVGBackground>
  )
}
