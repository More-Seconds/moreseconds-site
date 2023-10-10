import { Button } from 'components/Button'
import { BodyText } from 'components/typography/BodyText'
import { SmallTitle } from 'components/typography/SmallTitle'
import { Highlight } from 'public/svgs'

const ClientWebsiteHelp = () => {
  return (
    <div className="">
      <section id="white-label-service" className="mt-[2rem] px-6 md:px-0 md:mt-[11rem] sm:mb-[2rem] md:mb-[10rem] min-h-[400px]">
        <SmallTitle className="sm:text-xs md:text-[16px] mx-auto text-left">Our Services</SmallTitle>
        <h1 className="max-w-4xl text-white font-semibold sm:text-[24px] md:text-[42px] text-left mb-1 mt-1 md:mt-0">
          White Label Service
        </h1>
        <div className="max-w-3xl relative">
          <BodyText className="text-left text-sm md:text-lg max-w-xl">
            Are you leaving money on the table because you’ve had bad
            experiences with outsourced web developers and/or haven’t been able
            to successfully supplement your in-house team? Our team of
            U.S.-based developers trusted by top agencies are here to help you
            say, “Yes!” to all of your existing and prospective clients' website
            needs with confidence.
          </BodyText>
          <Button
            href="#contact"
            className="block md:w-[50%] px-8 mt-10 text-center"
          >
            Get Started
          </Button>
          <Highlight className="hidden md:block md:absolute right-[16.4rem] top-[16.2rem] h-[25px] w-[25px] scale-x-[-1]" />
        </div>
      </section>
    </div>
  )
}

export default ClientWebsiteHelp
