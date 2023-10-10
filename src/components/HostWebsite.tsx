import { Button } from 'components/Button'
import { BodyText } from 'components/typography/BodyText'
import { SmallTitle } from 'components/typography/SmallTitle'
import { Highlight } from 'public/svgs'

const HostWebsite = () => {
  return (
    <div className="">
      <section id="website-hosting" className="mt-[2rem] px-6 md:px-0 md:mt-[11rem] mb-[10rem] min-h-[400px]">
        <SmallTitle className="sm:text-xs md:text-[16px] mx-auto text-left">Our Services</SmallTitle>
        <h1 className="max-w-4xl text-white font-semibold sm:text-[24px] md:text-[42px] text-left mb-1 mt-1 md:mt-0">
          Website Hosting
        </h1>
        <div className="max-w-3xl relative">
        <BodyText className="text-left text-sm md:text-lg max-w-xl">
            We offer a variety of reliable, hands-off hosting options to suit
            your every need. Our affordable package options enable you to set it
            and forget it. We’ll get everything set up properly to keep your
            data, and that of your clients, safe and secure, so you can rest
            easy.
          </BodyText>
          <Button
            href="#contact"
            className="block md:w-[50%] px-8 mt-10 text-center"
          >
            View Hosting Package Options
          </Button>
          <Highlight className="hidden md:block md:absolute right-[15.5rem] top-[14.5rem] h-[25px] w-[25px] scale-x-[-1]" />
        </div>
      </section>
    </div>
  )
}

export default HostWebsite
