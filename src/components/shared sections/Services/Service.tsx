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
    <li className={'relative ' + props.className} >
      <Link to={props.slug} reloadDocument>
        <div className="h-full overflow-hidden rounded-xl ">
            <img
              src={props.image}
              alt={props.title}
              className="object-cover w-full h-full "
            />

          </div>

        <div className="absolute inset-0 flex flex-col justify-end w-full h-full sm:gap-[.55rem] sm:p-4 md:p-8 md:gap-0">
          <BodyText className="font-DM sm:text-4 sm:leading-[1.35] md:text-2xl">{props.title}</BodyText>
          <p className="text-light font-light sm:text-[.8rem] md:leading-normal md:text-md">See more</p>
        </div>
      </Link>
    </li>
  )
}
