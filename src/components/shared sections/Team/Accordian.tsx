import { MouseEvent, SVGProps, useState } from 'react'
import { BodyText } from '../../typography/BodyText'

type Props = {
  title: string
  children?: string
  image?: React.FunctionComponent<SVGProps<SVGSVGElement>>
  open?: boolean
}

export function Accordian(props: Props) {
  const [open, setOpen] = useState(props.open)
  function toggleOpen(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    setOpen(!open)
  }
  return (
    <a href="" onClick={toggleOpen}>
      <li
        className={
          (open ? 'relative bg-[#1e1e30] border-0 shadow-[5px_5px_0px_#ff7e22] rounded-3xl' : 'bg-darker border-indigo-400/20 border-b-2 rounded-0') +
          ' border-indigo-400/20 flex items-start gap-8 px-8 py-6 rounded-0'
        }
      >
        <>
          {props.image
            ? props.image({
                width: '20px',
                height: '20px',
                className:
                  (open ? 'fill-accent stroke-accent w-auto]' : 'fill-darkmid') +
                  ' mt-1'
              })
            : ''}
          <div>
            <BodyText
              className={
                (open ? 'text-light font-medium' : ' font-bold') + ' text-lg w-max mb-2 capitalize'
              }
            >
              {props.title}
            </BodyText>
            <p
              className={
                (open ? 'block' : 'hidden') +
                ' max-w-[30rem] text-normal text-light leading-7'
              }
            >
              {props.children}
            </p>
          </div>
        </>
      </li>
    </a>
  )
}
