import { Button } from 'components/Button'
import { BodyText } from 'components/typography/BodyText'
import { Heading } from 'components/typography/Heading'
import { SmallTitle } from 'components/typography/SmallTitle'
import { Smoke } from 'public/svgs'

const ClientWebsiteHelp = () => {
  return (
    <div>
      <section className="mt-[11rem] ml-7">
        <SmallTitle className="mx-auto text-left">Our Services</SmallTitle>
        <h1 className="max-w-4xl text-white font-semibold text-[42px] text-left mb-1">
          White Label Service
        </h1>
        <div className="max-w-3xl">
          <BodyText className="text-leftsm:px-10 xl:text-lg max-w-2xl">
            Are you leaving money on the table because you’ve had bad
            experiences with outsourced web developers and/or haven’t been able
            to successfully supplement your in-house team? Our team of
            U.S.-based developers trusted by top agencies are here to help you
            say, “Yes!” to all of your existing and prospective clients' website
            needs with confidence.
          </BodyText>
          <Button
            href="#contact"
            className="block w-[50%] px-8 mt-10 mb-8 text-center"
          >
            Get More Seconds
          </Button>
        </div>
      </section>
    </div>
  )
}

export default ClientWebsiteHelp
