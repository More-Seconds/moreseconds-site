import { BodyText } from 'components/typography/BodyText'
import { Heading } from 'components/typography/Heading'

type Props = {
  image: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  industry: string
  children: string
  hidden: boolean
}

export function Testimonial(props: Props) {
  return (
    <div
      className={
        'w-full flex flex-col sm:flex-row sm:gap-4 lg:gap-32 ' +
        (props.hidden ? 'hidden' : '')
      }
    >
      <figure className="flex flex-col items-center justify-center gap-4 mb-6 sm:w-full text-light">
        {props.image({
          className: 'w-64 h-min'
        })}
        <figcaption>
          <Heading
            level="3"
            className="text-2xl font-medium sm:text-lg font-Poppins"
          >
            {props.industry}
          </Heading>
        </figcaption>
      </figure>
      <div className="flex flex-col w-full sm:max-w-xs sm:mt-4 lg:max-w-lg sm:justify-center">
        <Heading level="3">Who We Help</Heading>
        <BodyText className="text-sm italic sm:text-md lg:text-xl max-w-[25ch] sm:max-w-none">
          {props.children}
        </BodyText>
      </div>
    </div>
  )
}
