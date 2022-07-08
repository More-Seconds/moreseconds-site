import { BodyText } from '../../components/BodyText'
import { Heading } from '../../components/Heading'
import { Signup } from '../../components/Signup'
import { HomeHeroBG } from 'public/svgs'

type Props = {
  children: JSX.Element | JSX.Element[]
  background: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

export function SVGBackground(props: Props) {
  return (
    <section className="relative bg-cover flex flex-col max-w-[100vw] lg:h-full ">
      <div className="inset-0 z-10 pt-4 sm:absolute 3xl:pt-60">
        <div className="grid gap-10 mx-4 overflow-hidden max-w-7xl md:mx-16">
          {props.children}
        </div>
      </div>
      <div>{props.background({ width: '100vw', height: '100%' })}</div>
    </section>
  )
}