import { twMerge } from 'tailwind-merge'

type Props = {
  children: JSX.Element[]
  className?: string
  backgroundColor?: string // Add backgroundColor prop
}

export function Card(props: Props) {
  const defaultStyles = `flex flex-col text-center justify-start px-5 rounded-xl w-72 h-96 `
  const dynamicStyles = props.backgroundColor
    ? { backgroundColor: props.backgroundColor, color: 'white' }
    : { backgroundColor: '#1D1D20', color: 'white' }

  const styles = twMerge(defaultStyles, props.className)

  return (
    <div style={dynamicStyles} className={styles}>
      {props.children}
    </div>
  )
}
