import { twMerge } from 'tailwind-merge'

type Props = {
  children: string | JSX.Element | JSX.Element[]
  className?: string
}

export function BodyText(props: Props) {
  const styles = twMerge(
    `leading-6 text-darkmid font-Poppins leading`,
    props.className
  )
  return <p className={styles}>{props.children}</p>
}
