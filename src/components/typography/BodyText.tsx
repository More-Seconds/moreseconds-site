type Props = {
  children: string
  className?: string
}

export function BodyText(props: Props) {
  const styles = `2xl:text-2xl leading-7 text-light font-Poppins leading ${props.className}`
  return <p className={styles}>{props.children}</p>
}
