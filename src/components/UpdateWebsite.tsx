import { Button } from 'components/Button'
import { BodyText } from 'components/typography/BodyText'
import { Heading } from 'components/typography/Heading'
import { SmallTitle } from 'components/typography/SmallTitle'
import { Planet } from 'public/svgs'
import { HeroCentered } from 'containers/shared/HeroCentered'

const UpdateWebsite = () => {
  return (
    <div>
      <div>
        <section className="pl-[12rem] mb-[20rem]">
          <HeroCentered className="py-2">
            <SmallTitle className="mx-auto text-center">
              Our Services
            </SmallTitle>
            <Heading level="1" className="max-w-4xl mx-auto text-center">
              Website Updates
            </Heading>
            <div className="max-w-3xl mx-auto">
              <BodyText className="px-5 mx-auto text-center sm:px-10 xl:text-lg">
                From on-demand updates to urgent after-hours fixes, More
                Seconds' premium web support offers the easiest way to make
                rapid changes to your website. We provide a completely hands-off
                website maintenance and updates service with a dedicated Project
                Manager to address all of your questions, comments, and concerns
                regarding your website.
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
    </div>
  )
}

export default UpdateWebsite
