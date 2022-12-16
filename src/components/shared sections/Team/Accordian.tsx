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
          (open ? 'bg-indigo-400/20' : 'bg-darker') +
          ' border-b-2 border-indigo-400/20 flex items-start gap-8 px-8 py-6 rounded-3xl'
        }
      >
        <>
          {props.image
            ? props.image({
                width: '20px',
                height: '20px',
                className:
                  (open ? 'fill-accent stroke-accent' : 'fill-darkmid') +
                  ' mt-1'
              })
            : ''}
          <div>
            <BodyText
              className={
                (open ? 'text-light' : '') + ' text-lg font-bold w-max mb-2'
              }
            >
              {props.title}
            </BodyText>
            <p
              className={
                (open ? 'block' : 'hidden') +
                ' max-w-xs text-sm text-light leading-6'
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
