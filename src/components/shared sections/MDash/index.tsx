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
import DashboardGIF from 'public/images/msdashboard.gif'
import DashboardBIG from 'public/images/msdashboard.gif'

type Props = {
  hideImageMobile?: boolean
}

export function MDash(props: Props) {
  return (
    <section className="relative">
      <div className=" pt-4 pb-8 overflow-hidden sm:px-8 sm:flex sm:flex-col sm:items-start sm:mb-4 sm:gap-6 md:grid md:grid-cols-2 md:gap-3 md:pt-[88px] md:grid-cols-2 md:px-[45px]  lg:px-[64px]  xl:grid-cols-2  xl:pt-32 3xl:pt-60 xl:mx-auto xl:max-w-[1400px] xl:px-[45px]">
        <div className="2xl:w-fit 2xl:self-start">
          <SmallTitle className="mb-4">
            The M-Dash
          </SmallTitle>
          <Heading
            level="2"
            className="max-w-lg mb-6 md:text-[2.5rem] md:leading-[1] xl:text-5xl xl:mr-0 xl:min-w-[20ch]"
          >

            {[<>Take your projects from <span className="text-accent">headache to handled</span> in seconds.</>]}
          </Heading>
          <BodyText className="max-w-lg mb-2 xl:text-5xl xl:mr-0 xl:min-w-[20ch] xl:text-lg">
            We built the most streamlined and efficient #dev-ops tech platform designed specifically with non-technical managers in mind. Build projects, add tasks, set cost budgets, share files, and track progress with your development team in real-time.
             Stop wasting time chasing developers and put your team in the drivers seat.
          </BodyText>
        </div>

        <div className="content-end justify-self-center md:justify-self-end xl:justify-self-end 2xl:w-fit 2xl:self-start">
          <Button href="https://dash.moreseconds.com/login">Start a Project</Button>
        </div>
      </div>

      <div className="relative mx-2 grid grid-cols-1 gap-3 overflow-hidden md:py-[5rem] md:mx-auto md:max-w-[calc(100%_-_10%)] md:px-[45px]  xl:gap-10 xl:py-[7rem] xl:mx-auto xl:max-w-[1315px] xl:px-[45px] xl:py-14 xl:mb-8 md:bg-backgroundImage bg-[url('/src/public/images/ms-dashb-big.png')] bg-cover border-0 border-solid md:rounded-[15px]">

        <div className="inner--gif mx-auto md:max-w-[750px] lg:px-[45px] xl:max-w-[1100px] xl:px-[45px] before:content-[''] before:absolute before:left-0 before:top-0 before:bg-[#00000094] before:w-full before:h-full before:z-10">
          <img className="w-full z-20 relative border-0 border-solid sm:min-h-[23rem] sm:object-cover sm:object-left md:min-h-0 md:rounded-[15px]" src={DashboardGIF} alt="" />
        </div>

      </div>

      <div>
        <BodyText className="md:pb-20 py-20 md:py-0 sm:px-8 sm:leading-6 md:mt-14 mx-auto text-center sm:max-w-4xl md:px-[45wpx] md:leading-[1.35] md:text-[1.35rem] lg:px-[64px] xl:text-[1.75rem] leading-[1.35]">
          {/* <span>Supercharge</span> your team with the ultimate development tool. Request,
          track, interact, and build all in real-time and all from one place. We
          “baked in” our proprietary #dev-ops processes into a purpose-built
          platform designed specifically to make managing your project landscape
          a breeze. */}

          {[<><span className="text-accent">Supercharge your team </span>
           with the ultimate development tool. Request,
          track, interact, and build all in real-time and all from one place. We
          “baked in” our proprietary #dev-ops processes into a purpose-built
          platform designed specifically to make managing your project landscape
          a breeze. </>]}
        </BodyText>
      </div>

      <HollowStar className="absolute hidden top-40 md:block" />
    </section>
  )
}
