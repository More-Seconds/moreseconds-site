import { twMerge } from 'tailwind-merge'

type Props = {
  children: JSX.Element[]
  className?: string
}

export function Card(props: Props) {
  const styles = twMerge(
    `flex flex-col text-center justify-start px-5 rounded-xl w-72 h-96 hover:bg-gradient-to-b from-accent`,
    props.className
  )
  return (
    <div
      style={{ backgroundColor: '#1D1D20', color: 'white' }}
      className={styles}
    >
      {props.children}
    </div>
  )
}
