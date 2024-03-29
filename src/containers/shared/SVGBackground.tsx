import { twMerge } from 'tailwind-merge'

type Props = {
  children: JSX.Element | JSX.Element[]
  background: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  hideBgMobile?: boolean
  className?: string
  svgStyles?: string
}

export function SVGBackground(props: Props) {
  const bgClass = `z-0 w-screen md:mt-[3rem] lg:mt-0 xl:pt-10 ${
    props.hideBgMobile ? 'hidden sm:block' : ''
  }`
  return (
    <section
      className={'relative bg-cover flex flex-col w-screen ' + props.className}
    >
      <div className="inset-0 z-10 sm:relative md:absolute">{props.children}</div>
      <div className={bgClass}>
        {props.background({
          width: '100vw',
          height: '100%',
          className: twMerge('h-auto', props.svgStyles ?? '')
        })}
      </div>
    </section>
  )
}
