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
        <div className="grid gap-6 px-[1rem] overflow-hidden sm:pt-[2rem] sm:max-w-[60%] sm:max-w-full sm:flex sm:justify-center sm:items-center sm:text-center sm:flex-col md:pr-[5rem] md:max-w-[66%] md:justify-start md:gap-4 md:text-left md:grid md:pt-[90px] md:px-[45px] lg:pt-[88px] lg:px-[64px] xl:pt-32 xl:mx-auto xl:max-w-[1400px] xl:px-[45px] xl:gap-4 3xl:pt-60">
          {props.children}
        </div>
      </SVGBackground>
    </div>
  )
}
