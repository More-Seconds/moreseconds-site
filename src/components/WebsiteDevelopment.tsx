import { Button } from 'components/Button'
import { BodyText } from 'components/typography/BodyText'
import { SmallTitle } from 'components/typography/SmallTitle'

const WebsiteDevelopment = () => {
  return (
    <div className="">
      <section className="mt-[11rem] mb-[10rem] min-h-[400px]">
        <SmallTitle className="mx-auto text-left">Our Services</SmallTitle>
        <h1 className="max-w-4xl text-white font-semibold text-[42px] text-left mb-1">
          Website Builds
        </h1>
        <div className="max-w-3xl">
          <BodyText className="text-left xl:text-lg max-w-xl ">
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
            className="block w-[50%] px-8 mt-10 text-center"
          >
            Generate Time / Cost Estimate
          </Button>
        </div>
      </section>
    </div>
  )
}

export default WebsiteDevelopment
