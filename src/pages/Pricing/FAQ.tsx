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
          'p-4 sm:p-6 rounded-lg ' +
          (isOpen == true ? 'bg-white' : 'bg-darkermid')
        }
      >
        <div
          className="flex items-center justify-between"
          onClick={() => setOpen(!isOpen)}
        >
          <Heading
            level="2"
            className={
              isOpen == true
                ? 'text-black text-lg max-w-[25ch] sm:text-xl sm:max-w-xl'
                : 'text-white text-sm max-w-[33ch] sm:text-lg sm:max-w-2xl lg:max-w-4xl'
            }
          >
            {props.title}
          </Heading>
          <ArrowDown
            className={
              'w-4 h-4 ' +
              (isOpen == true ? 'fill-accent rotate-180' : 'fill-white')
            }
          />
        </div>
        <div className={isOpen ? 'block mt-4' : 'hidden'}>{props.children}</div>
      </div>
    </>
  )
}
