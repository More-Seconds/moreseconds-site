type Props = {
  className?: string
  level: string
  children: string | JSX.Element[]
  dark?: boolean
  maxWidth?: string
}

export function Heading(props: Props) {
  const headingStyle = `font-DM font-bold z-10 ${
    props.level == '1'
      ? 'text-5xl md:text-4xl lg:text-6xl leading-tight 2xl:text-7xl'
      : props.level == '2'
      ? 'text-2xl '
      : ''
  } ${props.dark ? 'text-black' : 'text-light'} ${
    props.maxWidth ? 'max-w-' + props.maxWidth : ''
  } ${props.className}`
  switch (props.level) {
    default:
      throw 'you must specify a heading level'

    case '1':
      return <h1 className={headingStyle}>{props.children}</h1>

    case '2':
      return <h2 className={headingStyle}>{props.children}</h2>

    case '3':
      return <h3 className={headingStyle}>{props.children}</h3>

    case '4':
      return <h4 className={headingStyle}>{props.children}</h4>

    case '5':
      return <h5 className={headingStyle}>{props.children}</h5>
  }
}
