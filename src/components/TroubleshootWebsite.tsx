import { Button } from 'components/Button'
import { BodyText } from 'components/typography/BodyText'
import { SmallTitle } from 'components/typography/SmallTitle'
import { Highlight } from 'public/svgs'

const TroubleshootWebsite = () => {
  return (
    <div className="">
      <section
        id="website-maintenance"
        className="mt-[2rem] px-6 md:px-0 md:mt-[11rem] sm:mb-[2rem] md:mb-[10rem] min-h-[400px]"
      >
        <SmallTitle className="sm:text-xs md:text-[16px] mx-auto text-left">
          Our Services
        </SmallTitle>
        <h1 className="max-w-4xl text-white font-semibold sm:text-[24px] md:text-[42px] text-left mb-1 mt-1 md:mt-0">
          Website Maintenance
        </h1>
        <div className="max-w-3xl relative">
          <BodyText className="text-left text-sm md:text-lg max-w-xl">
            Never worry about your website going down again! Take full advantage
            of our troubleshooting and maintenance expertise. We’ll take a look
            at your overall website performance issues, server configurations,
            and site architecture as well as help plan all new functionality or
            design needs to keep your site in tip-top shape. You’ll be armed
            with a versatile Swiss-Army knife of web development, design, and
            optimization tools, so your website is nothing short of perfection.
          </BodyText>
          <Button
            href="#contact"
            className="block md:w-[50%] px-8 mt-10 text-center"
          >
            Get Estimate
          </Button>
          <Highlight className="hidden md:block md:absolute right-[16.4rem] top-[19.7rem] h-[25px] w-[25px] scale-x-[-1]" />
        </div>
      </section>
    </div>
  )
}

export default TroubleshootWebsite
