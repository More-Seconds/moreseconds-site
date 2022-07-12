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
import { BallOrange, BallPurple, Star } from 'public/svgs'

type Props = {
  className?: string
}

export function Clients(props: Props) {
  return (
    <section
      className={
        'relative flex flex-col items-center gap-8 pb-40 ' + props.className
      }
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
      <BallPurple className="absolute hidden lg:block lg:top-0 lg:left-4" />
      <BallOrange className="absolute hidden scale-50 lg:block lg:top-10 lg:right-20" />
    </section>
  )
}
