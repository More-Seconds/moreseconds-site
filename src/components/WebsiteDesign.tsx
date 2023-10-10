import { Button } from 'components/Button'
import { BodyText } from 'components/typography/BodyText'
import { SmallTitle } from 'components/typography/SmallTitle'
import { Highlight } from 'public/svgs'

const WebsiteDesign = () => {
  return (
    <div className="">
      <section id="website-design" className="mt-[2rem] px-6 md:px-0 md:mt-[11rem] mb-[10rem] min-h-[400px]">
      <SmallTitle className="sm:text-xs md:text-[16px] mx-auto text-left">Our Services</SmallTitle>
        <h1 className="max-w-4xl text-white font-semibold sm:text-[24px] md:text-[42px] text-left mb-1 mt-1 md:mt-0">
          Website Design
        </h1>
        <div className="max-w-3xl relative">
        <BodyText className="text-left text-sm md:text-lg max-w-xl">
            Get a beautifully designed website that doesn’t break the bank. We
            provide stunning design options to ensure each web project we
            deliver is an aesthetic masterpiece. Work with our expert design
            team to create a website that wows and start maximizing your
            conversion rate today.
          </BodyText>
          <Button
            href="#contact"
            className="block md:w-[50%] px-8 mt-10 text-center"
          >
            Get Estimate
          </Button>
          <Highlight className="hidden md:block md:absolute right-[16.3rem] top-[14.4rem] h-[25px] w-[25px] scale-x-[-1]" />
        </div>
      </section>
    </div>
  )
}

export default WebsiteDesign
