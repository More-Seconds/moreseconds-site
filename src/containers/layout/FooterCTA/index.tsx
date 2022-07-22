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
    <section className="relative grid grid-flow-row gap-10 px-4 pt-4 pb-8 mx-4 rounded-lg sm:pt-20 sm:px-8 bg-light lg:place-items-stretch lg:justify-items-center sm:grid-cols-2 sm:grid-rows-1 sm:mx-8 lg:px-20 lg:pt-40 lg:pb-32 lg:mx-16 2xl:mx-auto 2xl:max-w-[1600px]">
      <FormCharacter className="absolute hidden scale-50 translate-y-4 sm:block lg:-top-48 lg:right-0 lg:z-10 lg:scale-100 -top-48 -right-20 md:translate-y-3 lg:translate-y-4" />
      <div className="relative flex flex-col items-start w-full max-w-lg gap-4">
        {getVariant(props.variant)}
        <Planet className="absolute hidden -bottom-4 -left-4 lg:block" />
      </div>
      <FooterForm />
    </section>
  )
}
