import { Button } from 'components/Button'
import { BodyText } from 'components/typography/BodyText'
import { Heading } from 'components/typography/Heading'
import { SmallTitle } from 'components/typography/SmallTitle'
import { Planet } from 'public/svgs'
import { HeroCentered } from 'containers/shared/HeroCentered'

const HostWebsite = () => {
  return (
    <div>
      <div>
        <section className="pl-[12rem] mb-[20rem]">
          <HeroCentered className="py-2">
            <SmallTitle className="mx-auto text-center">
              Our Services
            </SmallTitle>
            <Heading level="1" className="max-w-4xl mx-auto text-center">
              Website Hosting
            </Heading>
            <div className="max-w-3xl mx-auto">
              <BodyText className="px-5 mx-auto text-center sm:px-10 xl:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                cumque omnis saepe in, incidunt quasi pariatur, numquam eligendi
                alias porro repudiandae, necessitatibus unde accusantium?
                Consequatur, laboriosam nisi omnis mollitia repudiandae nostrum
                sapiente eum sed dolore beatae nihil aspernatur ut explicabo
                voluptatum et similique rerum accusamus nobis odit dicta
                adipisci. Debitis.
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

export default HostWebsite
