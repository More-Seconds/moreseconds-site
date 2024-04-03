import { Button } from 'components/Button'
import { BodyText } from 'components/typography/BodyText'
import { SmallTitle } from 'components/typography/SmallTitle'
import { Highlight } from 'public/svgs'

const TroubleshootWebsite = () => {
  return (
    <div className="">
      <section className="max-w-[100%] md:max-w-[90%]">
        <SmallTitle className="mx-auto text-left">Our Services</SmallTitle>
        <h1 className="lg:max-w-4xl text-white font-semibold md:text-4xl lg:text-[42px] text-left mb-1">
          Website Maintenance
        </h1>
        <div className="relative">
          <BodyText className="text-left md:text-sm lg:text-lg max-w-2xl">
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
            className="block px-8 mt-10 text-center max-w-sm"
          >
            Get Estimate
          </Button>
          {/* <Highlight className="absolute right-[15.5rem] top-[19.5rem] h-[40px] w-[40px] scale-x-[-1]" /> */}
        </div>
      </section>
    </div>
  )
}

export default TroubleshootWebsite
