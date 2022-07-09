import { BodyText } from 'components/typography/BodyText'
import { Heading } from 'components/typography/Heading'
import { Signup } from 'components/forms/Signup'
import { SVGBackground } from 'containers/shared/SVGBackground'
import { HomeHeroBG } from 'public/svgs'

//todo: refactor to just a shared hero container that takes a layout prop
// to switch between the two default hero layouts from the design
export function Hero() {
  return (
    <SVGBackground background={HomeHeroBG}>
      <div className="grid gap-10 pt-4 mx-4 overflow-hidden max-w-7xl md:mx-16 lg:pt-32 3xl:pt-60">
        <Heading level="1" className="max-w-lg lg:max-w-3xl 3xl:max-w-5xl">
          Take your projects from headache to handled and free up your valuable
          time
        </Heading>
        <BodyText className="max-w-[30ch] sm:max-w-md lg:max-w-lg">
          We provide the service and speed of an in-house development team for
          the cost of a single developer.
        </BodyText>
        <Signup />
      </div>
    </SVGBackground>
  )
}
