import { Smoke } from 'public/svgs'

type Props = {
  children: JSX.Element | JSX.Element[]
  background?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  hideBgMobile?: boolean
  className?: string
}

export function HeroCentered(props: Props) {
  const bgClass = `z-0 pt-10 w-screen absolute top-0 ${
    props.hideBgMobile ? 'hidden sm:block' : ''
  }`
  return (
    <section
      className={
        'flex items-center justify-center px-15 py-15 mx-auto 3xl:px-1 relative bg-cover flex-col w-screen ' +
        props.className
      }
    >
      <div className="inset-0 z-10 flex flex-col items-center justify-center gap-2 py-20 lg:gap-8">
        {props.children}
      </div>
      <div className={bgClass}>
        <Smoke
          width="100vw"
          height="100%"
          className="h-auto scale-x-125 rotate-180 -scale-y-125"
        />
      </div>
    </section>
  )
}
