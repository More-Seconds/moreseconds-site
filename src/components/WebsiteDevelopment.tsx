import { Button } from 'components/Button'
import { BodyText } from 'components/typography/BodyText'
import { Heading } from 'components/typography/Heading'
import { SmallTitle } from 'components/typography/SmallTitle'
import { Planet } from 'public/svgs'
import { HeroCentered } from 'containers/shared/HeroCentered'

const WebsiteDevelopment = () => {
  return (
    <div>
      <section className="pl-[12rem] mb-[20rem]">
        <HeroCentered className="py-2">
          <SmallTitle className="mx-auto text-center">Our Services</SmallTitle>
          <Heading level="1" className="max-w-4xl mx-auto text-center">
            Website Development
          </Heading>
          <div className="max-w-3xl mx-auto">
            <BodyText className="px-5 mx-auto text-center sm:px-10 xl:text-lg">
              We build pixel-perfect landing pages in record time. From startups
              to established corporations, we utilize the latest technologies
              and platforms to deliver captivating user experiences and web
              interfaces. Our team of top U.S.-based developers write high
              level, production ready code designed to optimize your website’s
              functionality. Experience the benefits of having your own in-house
              digital team without actually hiring one full-time.
            </BodyText>
            <Button
              href="#contact"
              className="block max-w-[10rem] px-8 mx-auto mt-10 mb-8 text-center"
            >
              Get More Seconds
            </Button>
            <Planet className="absolute scale-50 -top-4 -right-8 xl:scale-75 xl:right-32" />
          </div>
        </HeroCentered>
      </section>
    </div>
  )
}

export default WebsiteDevelopment
