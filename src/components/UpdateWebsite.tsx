import { Button } from 'components/Button'
import { BodyText } from 'components/typography/BodyText'
import { SmallTitle } from 'components/typography/SmallTitle'
import { Highlight } from 'public/svgs'

const UpdateWebsite = () => {
  return (
    <div className="">
      <section className="mt-[2rem] px-8 md:px-0 md:mt-[11rem] mb-[10rem] min-h-[400px]">
      <SmallTitle className="sm:text-xs md:text-[16px] mx-auto text-left">Our Services</SmallTitle>
      <h1 className="max-w-4xl text-white font-semibold sm:text-[24px] md:text-[42px] text-left mb-1 mt-1 md:mt-0">
          Website Updates
        </h1>
        <div className="max-w-3xl relative">
        <BodyText className="text-left text-sm md:text-lg max-w-xl">
            From on-demand updates to urgent after-hours fixes, More Seconds'
            premium web support offers the easiest way to make rapid changes to
            your website. We provide a completely hands-off website updates
            service with a dedicated Project Manager to address all of your
            questions, comments, and concerns regarding your website.
          </BodyText>
          <Button
            href="#contact"
            className="block md:w-[50%] px-8 mt-10 text-center"
          >
            Get Estimate
          </Button>
          <Highlight className="hidden md:block md:absolute right-[16.4rem] top-[16.2rem] h-[25px] w-[25px] scale-x-[-1]" />
        </div>
      </section>
    </div>
  )
}

export default UpdateWebsite
