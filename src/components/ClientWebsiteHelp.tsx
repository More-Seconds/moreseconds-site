import { Button } from 'components/Button'
import { BodyText } from 'components/typography/BodyText'
import { Heading } from 'components/typography/Heading'
import { SmallTitle } from 'components/typography/SmallTitle'
import { Planet } from 'public/svgs'
import { HeroCentered } from 'containers/shared/HeroCentered'

const WebsiteDesign = () => {
  return (
    <div>
      <section className="pl-[12rem] mb-[20rem]">
        <HeroCentered className="py-2">
          <SmallTitle className="mx-auto text-center">Our Services</SmallTitle>
          <Heading level="1" className="max-w-4xl mx-auto text-center">
            Client Website Assistance
          </Heading>
          <div className="max-w-3xl mx-auto">
            <BodyText className="px-5 mx-auto text-center sm:px-10 xl:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, eius pariatur, nemo in, quia ipsum minus adipisci
              impedit nostrum debitis reprehenderit explicabo. Eius dolore
              repudiandae officia iste labore commodi vel quas corporis
              consequuntur, iure id et dignissimos a? Possimus eos quod labore
              voluptas error facere non exercitationem accusantium, illum eum.
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

export default WebsiteDesign
