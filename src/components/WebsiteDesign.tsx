import { Button } from 'components/Button'
import { BodyText } from 'components/typography/BodyText'
import { SmallTitle } from 'components/typography/SmallTitle'
import { Highlight } from 'public/svgs'

const WebsiteDesign = () => {
  return (
    <div className="">
      <section className="">
        <SmallTitle className="mx-auto text-left">Our Services</SmallTitle>
        <h1 className="max-w-4xl text-white font-semibold text-[42px] text-left mb-1">
          Website Design
        </h1>
        <div className="relative">
          <BodyText className="text-left xl:text-lg max-w-2xl">
            Get a beautifully designed website that doesn’t break the bank. We
            provide stunning design options to ensure each web project we
            deliver is an aesthetic masterpiece. Work with our expert design
            team to create a website that wows and start maximizing your
            conversion rate today.
          </BodyText>
          <Button
            href="#contact"
            className="block px-8 mt-10 text-center max-w-sm"
          >
            Get Estimate
          </Button>
          {/* <Highlight className="absolute right-[15.8rem] top-[14.2rem] h-[40px] w-[40px] scale-x-[-1]" /> */}
        </div>
      </section>
    </div>
  )
}

export default WebsiteDesign

