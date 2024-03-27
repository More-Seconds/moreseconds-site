import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
  level: string
  children: string | JSX.Element[]
  dark?: boolean
  maxWidth?: string
}

export function Heading(props: Props) {
  function getConditionalStyles() {
    const baseStyles = 'font-DM font-bold z-10'
    const levelLayer =
      props.level == '1'
        ? 'text-5xl sm:text-3xl xl:text-6xl leading-tight'
        : 'text-[30px] sm:text-2xl'
    const themeLayer = props.dark ? 'text-black' : 'text-light'
    const customLayer = props.className
    return twMerge(baseStyles, levelLayer, themeLayer, customLayer)
  }
  const headingStyle = getConditionalStyles()
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
