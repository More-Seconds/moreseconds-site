import { Link } from 'react-router-dom'
import { BodyText } from '../../typography/BodyText'
import { twMerge } from 'tailwind-merge'

type Props = {
  title: string
  className?: string
  image: string
  slug: string
  showSeeMore: boolean
}

export function Project(props: Props) {
  const { showSeeMore } = props

  return (
    <li className={'relative ' + props.className}>
      <Link to={props.slug} reloadDocument>
        <div
          className={twMerge(
            'w-full h-full overflow-hidden rounded-2xl',
            props.className
          )}
        >
          <img
            src={props.image}
            alt={props.title}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="absolute inset-0 flex flex-col justify-end w-full h-full sm:gap-[.55rem] sm:p-4 md:p-8 md:gap-0 ">
          {showSeeMore ? (
            <div className="max-w-full px-4 py-4 rounded-xl bg-neutral-900/50 w-max">
              <BodyText className="font-DM sm:text-4 sm:leading-[1.35] md:text-2xl">
                {props.title}
              </BodyText>
              <p className="text-light font-light sm:text-[.8rem] md:leading-normal md:text-md">
                Sejje more
              </p>
            </div>
          ) : (
            <></>
          )}
        </div>
      </Link>
    </li>
  )
}
