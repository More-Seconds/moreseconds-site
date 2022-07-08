type Props = {
  svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  children: JSX.Element | JSX.Element[]
  reverse?: boolean
  className?: string
}

export function SideBySide(props: Props) {
  function renderSideBySide() {
    if (props.reverse) {
      return (
        <>
          <div className="flex items-end">
            {props.svg({ width: '100vw', height: '100%', className: 'h-auto' })}
          </div>
          <div>{props.children}</div>
        </>
      )
    } else {
      return (
        <>
          <div>{props.children}</div>
          <div className="flex items-end">
            {props.svg({ width: '100vw', height: '100%', className: 'h-auto' })}
          </div>
        </>
      )
    }
  }

  return (
    <section
      className={
        'grid grid-cols-1 grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 ' +
        (props.reverse ? 'mr-16 ' : 'ml-16 ') +
        props.className
      }
    >
      {renderSideBySide()}
    </section>
  )
}
