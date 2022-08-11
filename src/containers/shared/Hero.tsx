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
    <SVGBackground background={props.svg} svgStyles={props.svgStyles}>
      <div className="grid gap-6 pt-4 mx-4 overflow-hidden xl:gap-10 max-w-7xl md:mx-16 lg:mx-16 xl:pt-32 xl:mx-auto xl:pl-32 xl:max-w-[1600px] 3xl:pt-60">
        {props.children}
      </div>
    </SVGBackground>
  )
}
