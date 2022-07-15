import { BodyText } from 'components/typography/BodyText'

export function Stats() {
  return (
    <section className="mx-4 sm:mx-16 lg:mx-32">
      <ul className="grid grid-cols-2 gap-3 grid-row-2 sm:grid-cols-4 sm:grid-rows-1">
        <li className="flex flex-col items-center h-32 p-4 rounded-2xl bg-darkermid lg:h-56 lg:p-10">
          <div className="flex items-center h-full">
            <BodyText className="text-4xl font-bold sm:font-normal sm:text-5xl lg:text-7xl">
              15
            </BodyText>
          </div>
          <BodyText className="text-xl">Lorem Ipsum</BodyText>
        </li>
        <li className="flex flex-col items-center h-32 p-4 rounded-2xl bg-darkermid lg:h-56 lg:p-10">
          <div className="flex items-center h-full">
            <BodyText className="text-4xl font-bold sm:font-normal sm:text-5xl lg:text-7xl">
              43%
            </BodyText>
          </div>
          <BodyText className="text-xl">Lorem Ipsum</BodyText>
        </li>
        <li className="flex flex-col items-center h-32 p-4 rounded-2xl bg-darkermid lg:h-56 lg:p-10">
          <div className="flex items-center h-full">
            <BodyText className="text-4xl font-bold sm:font-normal sm:text-5xl lg:text-7xl">
              20+
            </BodyText>
          </div>
          <BodyText className="text-xl">Lorem Ipsum</BodyText>
        </li>
        <li className="flex flex-col items-center h-32 p-4 rounded-2xl bg-darkermid lg:h-56 lg:p-10">
          <div className="flex items-center h-full">
            <BodyText className="text-4xl font-bold sm:font-normal sm:text-5xl lg:text-7xl">
              1230
            </BodyText>
          </div>
          <BodyText className="text-xl">Lorem Ipsum</BodyText>
        </li>
      </ul>
    </section>
  )
}
