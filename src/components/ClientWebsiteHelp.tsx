import { Button } from 'components/Button'
import { BodyText } from 'components/typography/BodyText'
import { SmallTitle } from 'components/typography/SmallTitle'

const ClientWebsiteHelp = () => {
  return (
    <div className="">
      <section className="mt-[11rem] mb-[10rem] min-h-[400px]">
        <SmallTitle className="mx-auto text-left">Our Services</SmallTitle>
        <h1 className="max-w-4xl text-white font-semibold text-[42px] text-left mb-1">
          White Label Service
        </h1>
        <div className="max-w-3xl">
          <BodyText className="text-left xl:text-lg max-w-xl ">
            Are you leaving money on the table because you’ve had bad
            experiences with outsourced web developers and/or haven’t been able
            to successfully supplement your in-house team? Our team of
            U.S.-based developers trusted by top agencies are here to help you
            say, “Yes!” to all of your existing and prospective clients' website
            needs with confidence.
          </BodyText>
          <Button
            href="#contact"
            className="block w-[50%] px-8 mt-10 text-center"
          >
            Get Started
          </Button>
        </div>
      </section>
    </div>
  )
}

export default ClientWebsiteHelp
