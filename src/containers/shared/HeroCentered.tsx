type Props = {
  children: JSX.Element | JSX.Element[]
  background: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  hideBgMobile?: boolean
  className?: string
}

export function HeroCentered(props: Props) {
  const bgClass = `z-0 pt-10 w-screen ${
    props.hideBgMobile ? 'hidden sm:block' : ''
  }`
  return (
    <section
      className={'flex items-center justify-center px-15 mx-auto mt-32 3xl:px-1 sm:mt-56 relative bg-cover flex-col w-screen ' + props.className}
    >
      <div className="inset-0 z-10 sm:absolute">{props.children}</div>
      <div className={bgClass}>
        {props.background({
          width: '100vw',
          height: '100%',
          className: 'h-auto'
        })}
      </div>
    </section>
  )
}
