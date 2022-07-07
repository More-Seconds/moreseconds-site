type Props = {
  href: string
  children: string
}

export function Button(props: Props) {
  return (
    <a
      className="px-4 py-3 font-bold bg-accent text-light font-DM min-w-max max-h-fit rounded-3xl justify-self-center lg:justify-self-auto"
      href={props.href}
    >
      {props.children}
    </a>
  )
}
