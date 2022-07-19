import { MouseEvent, SVGProps, useState } from 'react'
import { BodyText } from '../../typography/BodyText'

type Props = {
  title: string
  children?: string
  image?: React.FunctionComponent<SVGProps<SVGSVGElement>>
}

export function Accordian(props: Props) {
  const [open, setOpen] = useState(false)
  function toggleOpen(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    setOpen(!open)
  }
  return (
    <a href="" onClick={toggleOpen}>
      <li
        className={
          (open ? 'bg-light' : 'bg-darkermid') +
          ' flex items-start gap-8 px-8 py-6 rounded-3xl'
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
              className={(open ? 'text-dark' : '') + ' text-lg font-bold w-max'}
            >
              {props.title}
            </BodyText>
            <p
              className={
                (open ? 'block' : 'hidden') + ' max-w-xs text-sm text-dark'
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
