import { Button } from 'components/Button'
import { BodyText } from 'components/typography/BodyText'
import { SmallTitle } from 'components/typography/SmallTitle'
import { Highlight } from 'public/svgs'

const WebsiteDevelopment = () => {
  return (
    <div className="">
      <section id="website-builds" className="mt-[2rem] px-8 md:px-0 md:mt-[11rem] mb-[10rem] min-h-[400px]">
      <SmallTitle className="sm:text-xs md:text-[16px] mx-auto text-left">Our Services</SmallTitle>
      <h1 className="max-w-4xl text-white font-semibold sm:text-[24px] md:text-[42px] text-left mb-1 mt-1 md:mt-0">
          Website Builds
        </h1>
        <div className="max-w-3xl relative">
        <BodyText className="text-left text-sm md:text-lg max-w-xl">
            We build breathtaking websites in record time. From small, simple
            sites to massive, multiple page builds, we utilize the latest
            technologies and platforms to deliver captivating user experiences
            and web interfaces. Our team of top U.S.-based developers write high
            level, production ready code designed to optimize your website and
            deliver everything you’re looking for, from butter-smooth
            performance to complex custom functionality. Experience the benefits
            of having your own in-house digital team without actually hiring one
            full-time.
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

export default WebsiteDevelopment
