import { FormCharacter, Planet } from 'public'
import { FooterForm } from '../components/Form'
import { Heading } from '../components/Heading'

export function FooterCTA() {
  const listStyle = 'list-disc ml-4 mt-6'
  return (
    <section className="bg-light rounded-lg grid grid-rows-2 gap-10 place-items-center lg:place-items-stretch lg:justify-items-center lg:grid-cols-2 lg:grid-rows-1 lg:px-20 px-8 pt-20 lg:pt-40 pb-8 lg:pb-32 lg-mx-12">
      <FormCharacter className="absolute lg:top-52 lg:right-0 lg:z-10 translate-y-3 scale-50 lg:scale-100 top-28 -right-20 md:translate-y-20 lg:translate-y-1" />
      <div className="flex flex-col max-w-lg">
        <Heading level="2" dark inlineWidth="md">
          More Seconds Delivers
        </Heading>
        <ul className="font-Poppins max-w-md">
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
        <Planet className="relative top-20 -left-8 hidden lg:block" />
      </div>
      <FooterForm />
    </section>
  )
}
