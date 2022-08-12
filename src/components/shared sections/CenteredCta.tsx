import { BallOrange, BallPurple, Cloud, CloudFull, Star } from 'public/svgs'
import { Button } from '../Button'
import { BodyText } from '../typography/BodyText'
import { Heading } from '../typography/Heading'

export function CenteredCTA() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-5 pt-20 mx-4 sm:py-60">
      <Heading
        level="2"
        className="max-w-md text-3xl text-center xl:text-[46px] xl:max-w-xl xl:leading-[56px]"
      >
        Service and speed delivered seamlessly
      </Heading>
      <BodyText className="text-center">
        Expertly execute your vision without time-consuming oversight.
      </BodyText>
      <Button
        href="#contact"
        className="w-full px-12 py-3 mx-auto text-center sm:w-auto"
      >
        Let's Chat
      </Button>
      <Cloud className="absolute -right-10 top-20" />
      <CloudFull className="absolute bottom-48 left-24 -z-10" />
      <Star className="absolute top-0 left-0 scale-50 -rotate-45" />
      <BallPurple className="absolute left-0 scale-75 top-1/2" />
      <BallPurple className="absolute scale-50 bottom-32 right-32" />
      <BallOrange className="absolute bottom-0 scale-75 right-10" />
      <BallOrange className="absolute scale-50 top-48 left-96" />
    </section>
  )
}
