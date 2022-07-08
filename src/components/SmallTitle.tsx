type Props = {
  children: string
  className?: string
}

export function SmallTitle(props: Props) {
  return (
    <p
      className={
        'font-bold uppercase font-Poppins text-accent ' + props.className
      }
    >
      {props.children}
    </p>
  )
}
