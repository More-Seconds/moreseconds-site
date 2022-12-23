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
    <div className="w-screen lg:px-16" id="contact">
      <section className="relative shrink-0 grid grid-flow-row gap-10 pt-4 pb-8 rounded-lg sm:pt-20 bg-light sm:grid-cols-1 sm:grid-rows-1 sm:grid-cols-1 sm:px-[15px] sm:pt-[7rem] sm:bg-[#ebebed] sm:mr-[15px] sm:ml-0 md:grid-cols-2 md:pt-[8.5rem] md:bg-[#fff] md:px-[64px] md:max-w-[calc(100%_-_10%)] md:mx-auto lg:max-w-[calc(100%)] xl:pt-40 xl:pb-32 xl:mx-auto xl:max-w-[1400px] xl:px-[45px] xl:place-items-stretch xl:justify-items-center after:content-[''] after:shadow-inner after:shadow-[10px_10px_0px_#6e2ac3] after:rounded-lg after:absolute after:left-0 after:top-[0px] after:w-full after:h-full">
        <FormCharacter className="absolute hidden scale-50 translate-y-4 sm:block xl:-top-48 xl:right-0 xl:z-10 xl:scale-100 -top-48 -right-20 md:translate-y-3 xl:translate-y-4" />
        <div className="relative flex flex-col items-start w-full max-w-lg gap-4 sm:bottom-[0] md:bottom-[20%]">
          {getVariant(props.variant)}
          <Planet className="absolute hidden -bottom-4 xl:-bottom-44 -left-4 xl:block" />
        </div>
        {props.variant == 'connect' ? <FooterForm levelUp /> : <FooterForm />}
      </section>
    </div>
  )
}
