import { BodyText } from '../../components/BodyText'
import { Heading } from '../../components/Heading'
import { Signup } from '../../components/Signup'
import { HomeHeroBG } from 'public'

export function Hero() {
  return (
    <section className="relative pt-32 bg-cover lg:min-h-hero sm:min-h-heroTablet">
      <div className="grid max-w-6xl gap-10 mx-auto overflow-hidden">
        <Heading level="1" className="max-w-xl lg:max-w-3xl">
          Take your projects from headache to handled and free up your valuable
          time
        </Heading>
        <BodyText maxWidth="lg">
          We provide the service and speed of an in-house development team for
          the cost of a single developer.
        </BodyText>
        <Signup />
      </div>
      <HomeHeroBG
        className="static object-cover w-full min-w-full 2xl:h-auto sm:absolute sm:top-0"
        width="100%"
        height="auto"
      />
    </section>
  )
}
