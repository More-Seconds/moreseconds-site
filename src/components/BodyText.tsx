type Props = {
  children: string
  maxWidth?: string
}

export function BodyText(props: Props) {
  const styles = `text-lg leading-7 text-light font-Poppins leading ${
    props.maxWidth ? 'max-w-' + props.maxWidth : ''
  }`
  return <p className={styles}>{props.children}</p>
}
