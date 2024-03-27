import { Button } from 'components/Button'
import { BodyText } from 'components/typography/BodyText'
import { SmallTitle } from 'components/typography/SmallTitle'
import { Highlight } from 'public/svgs'

const UpdateWebsite = () => {
  return (
    <div className="">
      <section className="">
        <SmallTitle className="mx-auto text-left">Our Services</SmallTitle>
        <h1 className="max-w-4xl text-white font-semibold text-[42px] text-left mb-1">
          Website Updates
        </h1>
        <div className="relative">
          <BodyText className="text-left xl:text-lg max-w-2xl">
            From on-demand updates to urgent after-hours fixes, More Seconds'
            premium web support offers the easiest way to make rapid changes to
            your website. We provide a completely hands-off website updates
            service with a dedicated Project Manager to address all of your
            questions, comments, and concerns regarding your website.
          </BodyText>
          <Button
            href="#contact"
            className="block px-8 mt-10 text-center max-w-sm"
          >
            Get Estimate
          </Button>
          {/* <Highlight className="absolute right-[15.5rem] top-[16rem] h-[40px] w-[40px] scale-x-[-1]" /> */}
        </div>
      </section>
    </div>
  )
}

export default UpdateWebsite

