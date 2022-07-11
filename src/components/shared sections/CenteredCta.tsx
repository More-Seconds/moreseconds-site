import { Button } from '../Button'
import { BodyText } from '../typography/BodyText'
import { Heading } from '../typography/Heading'

export function CenteredCTA() {
  return (
    <section className="flex flex-col items-center justify-center gap-5 py-60">
      <Heading level="2" className="max-w-md text-center">
        Service and speed delivered seamlessly
      </Heading>
      <BodyText>
        Expertly execute your vision without time-consuming oversight.
      </BodyText>
      <Button href="" className="px-12 mx-auto">
        Let's Chat
      </Button>
    </section>
  )
}
