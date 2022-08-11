import { BodyText } from 'components/typography/BodyText'
import { BallOrange, Cloud } from 'public/svgs'

export function Stats() {
  return (
    <section className="relative mx-4 sm:mx-16 xl:mx-32 2xl:mx-auto 2xl:max-w-[1600px] 2xl:px-32">
      <div className="relative z-0 flex items-end justify-end h-0 -right-4 sm:-right-16 xl:-right-32">
        <Cloud />
        <BallOrange className="absolute scale-50 -top-16" />
      </div>
      <ul className="relative z-10 grid grid-cols-2 gap-3 grid-row-2 sm:grid-cols-4 sm:grid-rows-1">
        <li className="flex flex-col items-center h-32 p-4 rounded-2xl bg-darkermid xl:h-56 xl:p-10 hover:bg-accent">
          <div className="flex items-center h-full">
            <BodyText className="text-4xl font-bold sm:font-normal sm:text-5xl xl:text-7xl">
              15
            </BodyText>
          </div>
          <BodyText className="text-xl">Lorem Ipsum</BodyText>
        </li>
        <li className="flex flex-col items-center h-32 p-4 rounded-2xl bg-darkermid xl:h-56 xl:p-10 hover:bg-gradient-to-b from-accent">
          <div className="flex items-center h-full">
            <BodyText className="text-4xl font-bold sm:font-normal sm:text-5xl xl:text-7xl">
              43%
            </BodyText>
          </div>
          <BodyText className="text-xl">Lorem Ipsum</BodyText>
        </li>
        <li className="flex flex-col items-center h-32 p-4 rounded-2xl bg-darkermid xl:h-56 xl:p-10 hover:bg-gradient-to-b from-accent">
          <div className="flex items-center h-full">
            <BodyText className="text-4xl font-bold sm:font-normal sm:text-5xl xl:text-7xl">
              20+
            </BodyText>
          </div>
          <BodyText className="text-xl">Lorem Ipsum</BodyText>
        </li>
        <li className="flex flex-col items-center h-32 p-4 rounded-2xl bg-darkermid xl:h-56 xl:p-10 hover:bg-gradient-to-b from-accent">
          <div className="flex items-center h-full">
            <BodyText className="text-4xl font-bold sm:font-normal sm:text-5xl xl:text-7xl">
              1230
            </BodyText>
          </div>
          <BodyText className="text-xl">Lorem Ipsum</BodyText>
        </li>
      </ul>
    </section>
  )
}
