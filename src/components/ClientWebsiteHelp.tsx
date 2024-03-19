import { Button } from 'components/Button'
import { BodyText } from 'components/typography/BodyText'
import { SmallTitle } from 'components/typography/SmallTitle'
import { Highlight } from 'public/svgs'

const ClientWebsiteHelp = () => {
  return (
    <div className="">
      <section className="">
        <SmallTitle className="mx-auto text-left">Our Services</SmallTitle>
        <h1 className="max-w-4xl text-white font-semibold text-[42px] text-left mb-1">
          White Label Service
        </h1>
        <div className="relative">
          <BodyText className="text-left xl:text-lg max-w-2xl">
            Are you leaving money on the table because you’ve had bad
            experiences with outsourced web developers and/or haven’t been able
            to successfully supplement your in-house team? Our team of
            U.S.-based developers trusted by top agencies are here to help you
            say, “Yes!” to all of your existing and prospective clients' website
            needs with confidence.
          </BodyText>
          <Button
            href="#contact"
            className="block max-w-sm px-8 mt-10 text-center"
          >
            Get Started
          </Button>
          {/* <Highlight className="absolute right-[16rem] top-[14.5rem] h-[40px] w-[40px] scale-x-[-1]" /> */}
        </div>
      </section>
    </div>
  )
}

export default ClientWebsiteHelp
