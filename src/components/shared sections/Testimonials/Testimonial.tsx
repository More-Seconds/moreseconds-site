import { BodyText } from 'components/typography/BodyText'
import { PlayIcon } from 'public/svgs'

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
        'flex flex-col sm:flex-col sm:items-center md:items-start md:flex-row sm:gap-8 ' + (props.hidden ? 'hidden' : '')
      }
    >
      <figure className="grid gap-4 sm:mb-0 shrink-0 text-light relative cursor-pointer md:mb-10">
        <img
          src={props.image}
          alt={props.name}
          width="80"
          height="80"
          className="w-20 sm:w-56 xl:w-72 aspect-square object-cover rounded-lg border-4 border-dark"
        />

        <PlayIcon className={
          'absolute -translate-x-1/2 -translate-y-[-275%] left-1/2 top-0 lg:top-[-10%]'
        }
        />

        <figcaption className="grid gap-2 sm:text-center sm:justify-center md:text-left md:justify-start xl:ml-[5%]">
          <h3 className="text-xs font-medium uppercase sm:text-lg font-Poppins">
            {props.company}
          </h3>
          <h4 className="font-semibold texts-xs xl:text-2xl font-Poppins">
            {props.name}
          </h4>
          <h5>{props.title}</h5>
        </figcaption>
      </figure>
      <div className=" sm:max-w-[20ch] sm:text-center sm:mt0 md:text-left md:max-w-xs lg:max-w-[28rem] xl:max-w-none w-[150%]">
        <BodyText className="max-w-xs sm:max-w-xl  lg:text-[1.2rem] lg:max-w-[36rem] xl:text-[1.5rem] xl:w-[36rem] font-normal leading-[1.75]">
          {props.children}
        </BodyText>
      </div>
    </div>
  )
}
