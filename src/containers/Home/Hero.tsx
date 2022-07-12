import { BodyText } from 'components/typography/BodyText'
import { Heading } from 'components/typography/Heading'
import { Signup } from 'components/forms/Signup'
import { SVGBackground } from 'containers/shared/SVGBackground'
import { HomeHeroBG } from 'public/svgs'

type Props = {
  children: JSX.Element | JSX.Element[]
  svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

//todo: refactor to just a shared hero container that takes a layout prop
// to switch between the two default hero layouts from the design
export function Hero(props: Props) {
  return (
    <SVGBackground background={props.svg}>
      <div className="grid gap-10 pt-4 mx-4 overflow-hidden max-w-7xl md:mx-32 lg:pt-32 3xl:pt-60">
        {props.children}
      </div>
    </SVGBackground>
  )
}
