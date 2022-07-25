import { BodyText } from 'components/typography/BodyText'
import { Heading } from 'components/typography/Heading'
import { Request1, RequestAvatar1 } from 'public/images'
import { AvatarHighlight, BallBlue, BallPurple, Star } from 'public/svgs'

type Props = {
  children: string
  image: string
  avatar: string
}

export function Request(props: Props) {
  return (
    <section className="relative flex flex-col-reverse mb-20 sm:flex-row sm:items-center sm:mx-16 sm:justify-between lg:mx-32 2xl:max-w-[1600px] 2xl:mx-auto 2xl:px-32">
      <div className="w-full sm:w-[41%] mx-4">
        <Heading level="2" className="mb-2 sm:text-4xl lg:mb-4 lg:text-[42px]">
          Request
        </Heading>
        <BodyText className="text-sm lg:text-lg">{props.children}</BodyText>
      </div>
      <div className="relative w-full sm:w-[40%] px-4 mb-10">
        <img src={props.image} alt="request" className="rounded-lg" />
        <img
          src={props.avatar}
          alt="avatar"
          className="absolute w-24 border-4 rounded-full -bottom-2 border-light left-2 sm:-left-8 sm:bottom-8 lg:scale-150 lg:bottom-24 lg:-left-20 lg:w-32"
        />
        <AvatarHighlight className="absolute z-40 scale-50 -bottom-14 -left-4 sm:-left-14 sm:-bottom-6 lg:-left-32 lg:-bottom-0 lg:scale-100" />
      </div>
      <Star className="absolute right-0 scale-50 bottom-40 sm:bottom-0 sm:left-32 lg:scale-75" />
      <Star className="hidden sm:block sm:absolute sm:left-24 sm:top-0 sm:scale-[25%] lg:scale-50" />
      <BallPurple className="hidden scale-[25%] sm:block sm:absolute sm:right-1/2 sm:top-0" />
    </section>
  )
}
