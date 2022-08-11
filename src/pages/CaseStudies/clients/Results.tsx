import { BodyText } from 'components/typography/BodyText'
import { Heading } from 'components/typography/Heading'
import { BallOrange, Star } from 'public/svgs'

type Props = {
  children: Array<string>
  image: string
}

export function Results(props: Props) {
  return (
    <section className="relative flex flex-col-reverse mb-20 sm:flex-row-reverse sm:justify-between sm:mx-16 xl:mx-32 xl:items-center 2xl:max-w-[1600px] 2xl:mx-auto 2xl:px-32 2xl:pb-32">
      <div className="w-full mx-4 sm:w-[50%] xl:w-[40%]">
        <Heading level="2" className="mb-2 sm:text-4xl xl:mb-4">
          Results
        </Heading>
        <div className="grid gap-4 sm:gap-2">
          {props.children.map((result, index) => {
            return (
              <BodyText className="text-sm leading-6 xl:text-lg" key={index}>
                {'● ' + result}
              </BodyText>
            )
          })}
        </div>
      </div>
      <div className="relative w-full sm:w-[40%] sm:h-full px-4 mb-10 sm:mb-0">
        <img src={props.image} alt="request" className="h-full rounded-lg" />
      </div>
      <Star className="absolute -right-4 top-56 sm:top-[100%] sm:scale-50" />
      <BallOrange className="hidden sm:block sm:absolute sm:left-0 sm:-bottom-16 sm:scale-50 xl:left-24 xl:-bottom-20" />
    </section>
  )
}
