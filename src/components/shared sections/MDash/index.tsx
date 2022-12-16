import { SideBySide } from 'containers/shared/SideBySide'
import {
  Envelope,
  Fast,
  Favorite,
  Headset,
  HollowStar,
  Smile,
  TeamImage
} from 'public/svgs'
import { Accordian } from './Accordian'
import { Heading } from '../../typography/Heading'
import { SmallTitle } from '../../typography/SmallTitle'
import { BodyText } from 'components/typography/BodyText'
import { Button } from 'components/Button'
import DashboardGIF from 'public/images/mdashboard.gif'

type Props = {
  hideImageMobile?: boolean
}

export function MDash(props: Props) {
  return (
    <section className="relative">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 pt-4 pb-8 mx-4 overflow-hidden xl:gap-10 max-w-7xl md:mx-16 lg:mx-16 xl:pt-32 xl:mx-auto xl:pl-8 xl:max-w-[1600px] 3xl:pt-60">
        <div className="2xl:w-fit 2xl:self-start">
          <SmallTitle className="mx-2 mb-2 md:mx-8 xl:ml-16">
            The M-Dash
          </SmallTitle>
          <Heading
            level="2"
            className="max-w-lg mx-4 mb-10 md:mx-16 xl:ml-16 xl:text-5xl xl:mr-0 xl:min-w-[20ch]"
          >
            Take your projects from headache to handled in seconds.
          </Heading>
          <BodyText className="max-w-lsg mx-4 mb-2 md:mx-16 xl:ml-16 xl:text-5xl xl:mr-0 xl:min-w-[20ch] xl:text-lg">
            We build pixel-perfect landing pages in record time. From startups
            to established corporations, we utilize the latest technologies and
            platforms to deliver captivating user experiences and web
            interfaces. Our team of top U.S.-based developers write high level,
            production ready code designed to optimize your website’s
            functionality. Experience the benefits of having your own in-house
            digital team without actually hiring one full-time.
          </BodyText>
        </div>

        <div className="content-end 2xl:w-fit 2xl:self-start justify-self-center xl:justify-self-end xl:pr-24">
          <Button href="http://dash.moreseconds.com/">Start a Project </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 pt-4 pb-12  overflow-hidden xl:gap-10 max-w-7xl md:mx-16 lg:mx-16 xl:pt-32 xl:mx-auto xl:pl-24 xl:pr-24 xl:max-w-[1600px] 3xl:pt-60">
        {/* <video className="w-full" autoPlay>
          <source src="/src/public/videos/msdashboard.mp4" type="video/mp4"/>
        </video> */}
        <img className="w-full" src={DashboardGIF} alt="" />
      </div>

      <div>
        <BodyText className="px-5 pb-20 mx-auto text-center sm:max-w-4xl sm:px-10 xl:text-lg">
          Supercharge your team with the ultimate development tool. Request,
          track, interact, and build all in real-time and all from one place. We
          “baked in” our proprietary #dev-ops processes into a purpose-built
          platform designed specifically to make managing your project landscape
          a breeze.
        </BodyText>
      </div>

      <HollowStar className="absolute hidden top-40 sm:block" />
    </section>
  )
}
