import { Heading } from 'components/typography/Heading'

export function Simplified() {
  const listStyle = 'list-disc ml-4'
  return (
    <>
      <Heading
        level="2"
        dark
        className="tracking-tighter sm:max-w-md lg:text-[46px] lg:leading[56px] lg:max-w-lg"
      >
        Web support simplified
      </Heading>
      <p className="mb-4">Schedule a call to find out:</p>
      <ul className="grid max-w-md gap-4 font-Poppins">
        <li className={listStyle}>
          How More Seconds integrates into your existing workflow
        </li>
        <li className={listStyle}>
          How we complete projects faster and at a lower cost than freelancers
          and in-house developers
        </li>
        <li className={listStyle}>How we differ from traditional dev shops</li>
        <li className={listStyle}>
          The best action plan for your specific needs
        </li>
      </ul>
    </>
  )
}
