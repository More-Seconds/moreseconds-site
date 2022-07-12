import { FormCharacter, Planet } from 'public/svgs'
import { FooterForm } from '../../components/forms/Form'
import { Heading } from '../../components/typography/Heading'

export function FooterCTA() {
  const listStyle = 'list-disc ml-4 mt-6'
  return (
    <section className="relative grid grid-rows-2 gap-10 px-8 pt-20 pb-8 rounded-lg bg-light place-items-center lg:place-items-stretch lg:justify-items-center lg:grid-cols-2 lg:grid-rows-1 lg:px-20 lg:pt-40 lg:pb-32 lg:mx-16">
      <FormCharacter className="absolute scale-50 translate-y-4 lg:-top-48 lg:right-0 lg:z-10 lg:scale-100 -top-48 -right-20 md:translate-y-3 lg:translate-y-4" />
      <div className="flex flex-col max-w-lg">
        <Heading level="2" dark maxWidth="md">
          More Seconds Delivers
        </Heading>
        <ul className="max-w-md font-Poppins">
          <li className={listStyle}>
            Premium digital support so you can focus on driving sales for your
            clients
          </li>
          <li className={listStyle}>
            Top tier talent so you never have to deal with unqualified and
            unresponsive freelancers
          </li>
          <li className={listStyle}>
            Team extension capabilities so your in-house developers crush crunch
            time
          </li>
          <li className={listStyle}>
            Hourly billing so you only pay for the work you need with no
            overhead
          </li>
          <li className={listStyle}>
            After hours support - we’ll handle urgent client issues so you never
            have to
          </li>
        </ul>
        <Planet className="relative hidden top-20 -left-8 lg:block" />
      </div>
      <FooterForm />
    </section>
  )
}
