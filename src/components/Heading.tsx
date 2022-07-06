type Props = {
  level: string
  children: string
  dark: boolean
  inlineWidth?: string
}

export function Heading(props: Props) {
  const headingStyle = `font-DM font-bold text-4xl z-10 ${
    props.dark ? 'text-black' : 'text-light'
  } ${props.inlineWidth ? 'max-w-' + props.inlineWidth : ''}`
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
