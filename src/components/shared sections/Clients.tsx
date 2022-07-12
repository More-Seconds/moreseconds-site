import {
  AlgorithmLogo,
  BoudinLogo,
  HelpGoodLogo,
  MMLogo,
  MontyLogo,
  PCTLogo,
  PopmenuLogo,
  SFELogo
} from 'public/images'
import { BallPurple, Star } from 'public/svgs'

type Props = {
  className?: string
}

export function Clients(props: Props) {
  return (
    <section
      className={'flex flex-col items-center gap-8 pb-40 ' + props.className}
    >
      <p className="max-w-2xl mx-4 font-bold text-center uppercase sm:text-xl font-Poppins text-light">
        We’ve worked on hundreds of projects for agencies, startups, event
        producers, and businesses of all sizes.
      </p>
      <ul className="grid grid-cols-4 grid-rows-2 mr-4 place-items-center">
        <li className="p-4 sm:p-0">
          <img src={AlgorithmLogo} alt="Algorithm Agency" />
        </li>
        <li className="p-4 sm:p-0">
          <img src={PopmenuLogo} alt="Popmenu" />
        </li>
        <li className="p-4 sm:p-0">
          <img src={MMLogo} alt="Madison Miles Media" />
        </li>
        <li className="p-4 sm:p-0">
          <img src={MontyLogo} alt="Montgomery Summit" />
        </li>
        <li className="p-4 sm:p-0">
          <img src={BoudinLogo} alt="Bistro Boudin" />
        </li>
        <li className="p-4 sm:p-0">
          <img src={HelpGoodLogo} alt="Help Good" />
        </li>
        <li className="p-4 sm:p-0">
          <img src={SFELogo} alt="State Fair Entertainment" />
        </li>
        <li className="p-4 sm:p-0">
          <img src={PCTLogo} alt="Plant Cell Technology" />
        </li>
      </ul>
      <Star className="absolute bottom-0 hidden sm:block right-64" />
      <BallPurple className="absolute hidden sm:block top-10 right-20" />
    </section>
  )
}
