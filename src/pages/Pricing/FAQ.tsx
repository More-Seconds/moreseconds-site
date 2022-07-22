import { BodyText } from 'components/typography/BodyText'
import { Heading } from 'components/typography/Heading'
import { ArrowDown } from 'public/svgs'
import { useState } from 'react'

type Props = {
  title: string
  children: string | JSX.Element | JSX.Element[]
}

export function FAQ(props: Props) {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <div
        className={
          'p-4 sm:p-6 rounded-lg cursor-pointer ' +
          (isOpen == true ? 'bg-white' : 'bg-darkermid')
        }
        onClick={() => setOpen(!isOpen)}
      >
        <div className="flex items-center justify-between gap-4">
          <Heading
            level="2"
            className={
              isOpen == true
                ? 'text-black text-lg sm:text-xl'
                : 'text-white text-sm sm:text-lg '
            }
          >
            {props.title}
          </Heading>
          <ArrowDown
            className={
              'w-4 h-4 shrink-0 ' +
              (isOpen == true ? 'fill-accent rotate-180' : 'fill-white')
            }
          />
        </div>
        <div className={isOpen ? 'block mt-4' : 'hidden'}>{props.children}</div>
      </div>
    </>
  )
}
