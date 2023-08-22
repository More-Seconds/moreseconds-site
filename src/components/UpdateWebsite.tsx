import { Button } from 'components/Button'
import { BodyText } from 'components/typography/BodyText'
import { SmallTitle } from 'components/typography/SmallTitle'

const UpdateWebsite = () => {
  return (
    <div className="">
      <section className="mt-[11rem] mb-[10rem] min-h-[400px]">
        <SmallTitle className="mx-auto text-left">Our Services</SmallTitle>
        <h1 className="max-w-4xl text-white font-semibold text-[42px] text-left mb-1">
          Website Updates
        </h1>
        <div className="max-w-3xl">
          <BodyText className="text-left xl:text-lg max-w-xl ">
            From on-demand updates to urgent after-hours fixes, More Seconds'
            premium web support offers the easiest way to make rapid changes to
            your website. We provide a completely hands-off website updates
            service with a dedicated Project Manager to address all of your
            questions, comments, and concerns regarding your website.
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

export default UpdateWebsite
