import { Link } from 'react-router-dom'
import { BodyText } from '../../typography/BodyText'

type Props = {
  title: string
  className?: string
  image: string
  slug: string
}

export function Service(props: Props) {
  return (
    <li className={'relative ' + props.className}>
      <Link to={props.slug} reloadDocument>
        <div className="h-full overflow-hidden rounded-xl">
          <img
            src={props.image}
            alt={props.title}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-end w-full h-full p-8">
          <BodyText className="text-2xl font-DM">{props.title}</BodyText>
          <p className="text-lg uppercase text-light">Learn More</p>
        </div>
      </Link>
    </li>
  )
}
