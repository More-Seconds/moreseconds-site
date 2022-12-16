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
        'px-12 cursor-pointer py-3 font-bold bg-gradient-to-b from-accent to-[#FFAD72] text-light text-center font-DM min-w-max max-h-fit rounded justify-self-center xl:justify-self-auto hover:from-[#FFAD72] hover:to-accent',
        props.className
      )}
      href={props.href}
    >
      {props.children}
    </a>
  )
}
