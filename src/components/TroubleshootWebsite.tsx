import { Button } from 'components/Button'
import { BodyText } from 'components/typography/BodyText'
import { SmallTitle } from 'components/typography/SmallTitle'
import { Highlight } from 'public/svgs'

const TroubleshootWebsite = () => {
  return (
    <div className="">
      <section className="mt-[11rem] mb-[10rem] min-h-[400px]">
        <SmallTitle className="mx-auto text-left">Our Services</SmallTitle>
        <h1 className="max-w-4xl text-white font-semibold text-[42px] text-left mb-1">
          Website Maintenance
        </h1>
        <div className="max-w-3xl relative">
          <BodyText className="text-left xl:text-lg max-w-xl ">
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
            className="block w-[50%] px-8 mt-10 text-center"
          >
            Get Estimate
          </Button>
          <Highlight className="absolute right-[14.5rem] top-[19.2rem] h-[40px] w-[40px] scale-x-[-1]" />
        </div>
      </section>
    </div>
  )
}

export default TroubleshootWebsite
