import { Button } from 'components/Button'
import { BodyText } from 'components/typography/BodyText'
import { SmallTitle } from 'components/typography/SmallTitle'
import { Highlight } from 'public/svgs'

const HostWebsite = () => {
  return (
    <div className="">
      <section className="max-w-[100%] md:max-w-[90%]">
        <SmallTitle className="mx-auto text-left">Our Services</SmallTitle>
        <h1 className="lg:max-w-4xl text-white font-semibold md:text-4xl lg:text-[42px] text-left mb-1">
          Website Hosting
        </h1>
        <div className="relative">
          <BodyText className="text-left md:text-sm lg:text-lg max-w-2xl">
            We offer a variety of reliable, hands-off hosting options to suit
            your every need. Our affordable package options enable you to set it
            and forget it. We’ll get everything set up properly to keep your
            data, and that of your clients, safe and secure, so you can rest
            easy.
          </BodyText>
          <Button
            href="#contact"
            className="block px-8 mt-10 text-center max-w-sm"
          >
            View Hosting Package Options
          </Button>
          {/* <Highlight className="absolute right-[15rem] top-[14.2rem] h-[40px] w-[40px] scale-x-[-1]" /> */}
        </div>
      </section>
    </div>
  )
}

export default HostWebsite
