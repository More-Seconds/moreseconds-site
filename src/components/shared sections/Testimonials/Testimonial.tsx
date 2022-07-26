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
        'flex flex-col sm:flex-row sm:gap-4 lg:gap-32 ' +
        (props.hidden ? 'hidden' : '')
      }
    >
      <figure className="grid gap-4 mb-10 sm:w-full text-light">
        <img
          src={props.image}
          alt={props.name}
          className="w-20 sm:w-56 lg:w-60"
        />
        <figcaption className="grid gap-2">
          <h3 className="text-xs font-medium uppercase sm:text-lg font-Poppins">
            {props.company}
          </h3>
          <h4 className="font-semibold texts-xs lg:text-2xl font-Poppins">
            {props.name}
          </h4>
          <h5>{props.title}</h5>
        </figcaption>
      </figure>
      <div className=" sm:max-w-xs sm:mt-4 lg:max-w-md">
        <BodyText className="text-sm italic sm:text-md lg:text-[20px] font-normal leading-6">
          {props.children}
        </BodyText>
      </div>
    </div>
  )
}
