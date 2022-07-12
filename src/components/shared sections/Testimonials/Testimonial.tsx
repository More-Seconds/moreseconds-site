import { BodyText } from 'components/typography/BodyText'

type Props = {
  image: string
  company: string
  name: string
  title: string
  children: string
  hidden: boolean
}

export function Testimonial(props: Props) {
  return (
    <div
      className={
        'flex flex-col sm:flex-row gap-16 lg:gap-24 ' +
        (props.hidden ? 'hidden' : '')
      }
    >
      <figure className="grid gap-4 mb-10 sm:w-full text-light">
        <img src={props.image} alt={props.name} className="w-20 sm:w-56" />
        <figcaption>
          <h3 className="text-xs font-medium uppercase sm:text-lg font-Poppins">
            {props.company}
          </h3>
          <h4 className="font-semibold texts-xs m:text-2xl font-Poppins">
            {props.name}
          </h4>
          <h5>{props.title}</h5>
        </figcaption>
      </figure>
      <div className=" md:max-w-sm lg:max-w-md">
        <BodyText className="text-sm italic md:text-xl">
          {props.children}
        </BodyText>
      </div>
    </div>
  )
}
