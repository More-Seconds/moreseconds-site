import { Signup } from 'components/forms/Signup'
import { BodyText } from 'components/typography/BodyText'
import { Heading } from 'components/typography/Heading'
import { SideBySide } from 'containers/shared/SideBySide'
import {
  BallBlue,
  BallOrange,
  BallPurple,
  ManWithPhone,
  Sputnik,
  Star
} from 'public/svgs'

export function CTA() {
  return (
    <section className="relative">
      <SideBySide svg={ManWithPhone} className="sm:w-[95%]">
        <div className="grid gap-5 xl:ml-24 pt-14 sm:pt-32 xl:pt-64">
          <Heading
            level="2"
            className="text-center capitalize sm:min-w-[200px] sm:text-[32px] leading-9 sm:text-left xl:text-5xl xl:leading-[56px] xl:max-w-xl xl:mb-4 tracking-tighter"
          >
            How can we help your business succeed?
          </Heading>
          <div className="xl:max-w-sm sm:absolute sm:top-56 xl:static">
            <Signup className="sm:w-96" variant="secondary" />
          </div>
        </div>
      </SideBySide>
      <div className="h-72 sm:h-32">
        <Sputnik className="relative scale-75 -left-14 sm:left-14 sm:-top-40 xl:scale-100 xl:left-52 xl:-top-[100%]" />
      </div>
      <BallPurple className="absolute scale-75 bottom-52 xl:left-16" />
      <BallPurple className="absolute hidden xl:block scale-[25%] top-32 left-96" />
      <BallOrange className="absolute scale-50 -bottom-10 left-4 xl:left-40" />
      <BallBlue className="absolute right-10 bottom-40 sm:right-1/2 sm:-bottom-24 xl:right-[65%]" />
      <BallBlue className="absolute hidden xl:block top-[55%] left-[50%]" />

      <Star className="absolute right-16 sm:scale-50 sm:right-32 sm:bottom-0 xl:right-[35%]" />
    </section>
  )
}
