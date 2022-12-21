import { BodyText } from 'components/typography/BodyText'
import { Heading } from 'components/typography/Heading'
import { Signup } from 'components/forms/Signup'
import { SVGBackground } from 'containers/shared/SVGBackground'
import { HomeHeroBG } from 'public/svgs'

type Props = {
  children: JSX.Element | JSX.Element[]
  svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  svgStyles?: string
}

export function Hero(props: Props) {
  return (
    <div id="hero">
      <SVGBackground background={props.svg} svgStyles={props.svgStyles}>
        <div className="grid gap-6 pt-4 mx-auto overflow-hidden md:mx-16 lg:mx-16 xl:pt-32 xl:mx-auto  xl:max-w-[1400px]  xl:gap-10 xl:px-[45px] 3xl:pt-60">
          {props.children}
        </div>
      </SVGBackground>
    </div>
  )
}
