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
    <div className={'flex gap-24 ' + (props.hidden ? 'hidden' : '')}>
      <figure className="text-light">
        <img src={props.image} alt={props.name} />
        <figcaption>
          <h3 className="text-lg font-medium uppercase font-Poppins">
            {props.company}
          </h3>
          <h4 className="text-2xl font-semibold font-Poppins">{props.name}</h4>
          <h5>{props.title}</h5>
        </figcaption>
      </figure>
      <div className="max-w-md">
        <BodyText className="text-xl italic">{props.children}</BodyText>
      </div>
    </div>
  )
}
