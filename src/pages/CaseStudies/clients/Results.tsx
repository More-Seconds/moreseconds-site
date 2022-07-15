import { BodyText } from 'components/typography/BodyText'
import { Heading } from 'components/typography/Heading'

type Props = {
  children: Array<string>
  image: string
}

export function Results(props: Props) {
  return (
    <section className="flex flex-col-reverse mb-20 sm:flex-row-reverse sm:justify-between sm:mx-16 lg:mx-32 lg:items-center">
      <div className="w-full mx-4 sm:w-[50%] lg:w-[40%]">
        <Heading level="2" className="mb-2 sm:text-4xl lg:mb-4">
          Results
        </Heading>
        <div className="grid gap-4">
          {props.children.map((result, index) => {
            return (
              <BodyText className="text-sm leading-6 lg:text-lg" key={index}>
                {'● ' + result}
              </BodyText>
            )
          })}
        </div>
      </div>
      <div className="relative w-full sm:w-[40%] sm:h-full px-4 mb-10 sm:mb-0">
        <img src={props.image} alt="request" className="h-full rounded-lg" />
      </div>
    </section>
  )
}
