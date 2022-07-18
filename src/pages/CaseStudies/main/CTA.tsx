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
      <SideBySide svg={ManWithPhone}>
        <div className="grid gap-5 lg:ml-24 pt-14 sm:pt-32 lg:pt-64">
          <Heading
            level="2"
            className="text-center capitalize sm:text-[24px] sm:text-left lg:text-4xl lg:max-w-lg"
          >
            How can we help your business succeed?
          </Heading>
          <div className="lg:max-w-sm sm:absolute sm:top-52 lg:static">
            <Signup className="sm:w-52" variant="secondary" />
          </div>
        </div>
      </SideBySide>
      <div className="h-72 sm:h-32">
        <Sputnik className="relative scale-75 -left-14 sm:left-14 sm:-top-40 lg:scale-100 lg:left-52 lg:-top-64" />
      </div>
      <BallPurple className="absolute scale-75 bottom-52 lg:left-16" />
      <BallPurple className="absolute hidden lg:block scale-[25%] top-32 left-96" />
      <BallOrange className="absolute scale-50 -bottom-10 left-4 lg:left-40" />
      <BallBlue className="absolute right-10 bottom-40 sm:right-1/2 sm:-bottom-24 lg:right-[65%]" />
      <BallBlue className="absolute hidden lg:block top-[55%] left-[50%]" />

      <Star className="absolute right-16 sm:scale-50 sm:right-32 sm:bottom-0 lg:right-[35%]" />
    </section>
  )
}
