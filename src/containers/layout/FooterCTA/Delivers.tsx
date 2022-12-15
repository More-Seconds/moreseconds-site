import { Heading } from 'components/typography/Heading'

export function Delivers() {
  const listStyle = 'list-disc ml-4 mt-6'
  return (
    <>
      <Heading level="2" dark className="xl:text-[36px] xl:min-w-auto">
        {[
          <>
            Imagine what your team could do with{' '}
            <span style={{ color: '#3939FA' }}>More Seconds.</span>
          </>
        ]}
      </Heading>
      <ul className="max-w-md font-Poppins">
        <li className={listStyle}>
          Premium digital support so you can focus on driving sales for your
          clients
        </li>
        <li className={listStyle}>
          Top tier talent so you never have to deal with unqualified and
          unresponsive freelancers
        </li>
        <li className={listStyle}>
          Team extension capabilities so your in-house developers crush crunch
          time
        </li>
        <li className={listStyle}>
          Hourly billing so you only pay for the work you need with no overhead
        </li>
        <li className={listStyle}>
          After hours support - we’ll handle urgent client issues so you never
          have to
        </li>
      </ul>
    </>
  )
}
