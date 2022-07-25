import { twMerge } from 'tailwind-merge'

type Props = {
  href: string
  children: string
  className?: string
}

export function Button(props: Props) {
  return (
    <a
      className={twMerge(
        'px-5 py-4 font-bold bg-accent text-light text-center font-DM min-w-max max-h-fit rounded-3xl justify-self-center lg:justify-self-auto ',
        props.className
      )}
      href={props.href}
    >
      {props.children}
    </a>
  )
}
