import { FormCharacter, Planet } from 'public/svgs'
import { FooterForm } from '../../../components/forms/Form'
import { Heading } from '../../../components/typography/Heading'
import { Connect } from './Connect'
import { Delivers } from './Delivers'
import { Simplified } from './Simplified'

type Props = {
  variant: string
}

function getVariant(variant: string) {
  switch (variant) {
    default:
      return <Delivers />
    case 'connect':
      return <Connect />
    case 'simplified':
      return <Simplified />
  }
}

export function FooterCTA(props: Props) {
  return (
    <div className="w-screen xl:px-16" id="contact">
      <section className="relative shrink-0 grid grid-flow-row gap-10 pt-4 pb-8 rounded-lg sm:pt-20 bg-light xl:place-items-stretch xl:justify-items-center sm:grid-cols-2 sm:grid-rows-1 xl:pt-40 xl:pb-32 xl:mx-auto xl:max-w-[1400px] xl:px-[45px] after:content-[''] after:shadow-inner after:shadow-[10px_10px_0px_#6e2ac3] after:rounded-lg after:absolute after:left-0 after:top-[0px] after:w-full after:h-full">
        <FormCharacter className="absolute hidden scale-50 translate-y-4 sm:block xl:-top-48 xl:right-0 xl:z-10 xl:scale-100 -top-48 -right-20 md:translate-y-3 xl:translate-y-4" />
        <div className="relative flex flex-col items-start w-full max-w-lg gap-4 bottom-[20%]">
          {getVariant(props.variant)}
          <Planet className="absolute hidden -bottom-4 xl:-bottom-44 -left-4 xl:block" />
        </div>
        {props.variant == 'connect' ? <FooterForm levelUp /> : <FooterForm />}
      </section>
    </div>
  )
}
