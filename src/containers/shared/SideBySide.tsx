type Props = {
  svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  children: JSX.Element | JSX.Element[]
  reverse?: boolean
  className?: string
  hideImageMobile?: boolean
  svgStyles?: string
}

export function SideBySide(props: Props) {
  function renderSideBySide() {
    if (props.reverse) {
      return (
        <>
          <div
            className={
              'flex w-full h-min sm:h-auto sm:items-end xl:justify-evenly' +
              (props.hideImageMobile ? 'hidden sm:flex' : '')
            }
          >
            {props.svg({
              width: '100%',
              height: '100%',
              className: 'h-auto sm:w-[50vw] ' + (props.svgStyles ?? '')
            })}
          </div>
          <div className="relative w-full mx-4 sm:mx-0">{props.children}</div>
        </>
      )
    } else {
      return (
        <>
          <div className="relative w-full sm:mx-0 flex flex-col">
            {props.children}
          </div>
          <div
            className={
              'flex w-full h-min sm:h-auto sm:items-end ' +
              (props.hideImageMobile ? 'hidden sm:flex' : '')
            }
          >
            {props.svg({
              width: '100%',
              height: '100%',
              className: 'h-auto sm:w-[50vw] ' + (props.svgStyles ?? '')
            })}
          </div>
        </>
      )
    }
  }

  return (
    <section
      className={
        'flex flex-col sm:flex-row  ' +
        (props.reverse ? 'sm:mr-16 ' : '') +
        props.className
      }
    >
      {renderSideBySide()}
    </section>
  )
}
