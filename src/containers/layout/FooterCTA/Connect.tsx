import { Heading } from 'components/typography/Heading'

export function Connect() {
  const listStyle = 'list-disc ml-4 mt-6'
  return (
    <>
      <Heading
        level="2"
        dark
        maxWidth="md"
        className="text-3xl xl:text-5xl capitalize"
      >
        Connect with us to learn how we differ:
      </Heading>
      <ul className="max-w-md font-Poppins pl-2">
        <li className={listStyle}>Project updates in seconds</li>
        <li className={listStyle}>Clear communication between teams</li>
        <li className={listStyle}>Rigorous QA checklist</li>
        <li className={listStyle}>
          Comprehensive understanding of your business
        </li>
      </ul>
      <p className="italic">
        Join our roster of satisfied, top-performing clients upgrading their web
        presence and tackling their tech to-do list with More Seconds.
      </p>
    </>
  )
}
