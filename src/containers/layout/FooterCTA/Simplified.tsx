import { Heading } from 'components/typography/Heading'

export function Simplified() {
  const listStyle = 'list-disc ml-4 mt-6'
  return (
    <>
      <Heading level="2" dark maxWidth="md">
        Web support simplified
      </Heading>
      <p>Schedule a call to find out:</p>
      <ul className="max-w-md font-Poppins">
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
