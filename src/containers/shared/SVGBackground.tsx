import { BodyText } from '../../components/BodyText'
import { Heading } from '../../components/Heading'
import { Signup } from '../../components/Signup'
import { HomeHeroBG } from 'public/svgs'

type Props = {
  children: JSX.Element | JSX.Element[]
  background: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  className?: string
}

export function SVGBackground(props: Props) {
  return (
    <section
      className={
        'relative bg-cover flex flex-col max-w-[100vw] lg:h-full ' +
        props.className
      }
    >
      <div className="inset-0 z-10 sm:absolute">{props.children}</div>
      <div className="z-0">
        {props.background({ width: '100vw', height: '100%' })}
      </div>
    </section>
  )
}
