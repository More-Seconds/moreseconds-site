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
        'relative flex flex-col items-center gap-8 pb-10 ' + props.className
      }
    >
      <p className="max-w-2xl mx-4 font-bold text-center uppercase sm:text-xl font-Poppins text-light lg:text-[32px] lg:leading-[48px] lg:max-w-5xl">
        We’ve worked on hundreds of projects for agencies, startups, event
        producers, and businesses of all sizes.
      </p>
      <ul className="grid grid-cols-4 grid-rows-2 mr-4 place-items-center lg:gap-16">
        <li className="p-4 sm:p-0">
          <img
            src={AlgorithmLogo}
            alt="Algorithm Agency"
            className="saturate-0"
          />
        </li>
        <li className="p-4 sm:p-0">
          <img src={PopmenuLogo} alt="Popmenu" className="saturate-0" />
        </li>
        <li className="p-4 sm:p-0">
          <img src={MMLogo} alt="Madison Miles Media" className="saturate-0" />
        </li>
        <li className="p-4 sm:p-0">
          <img src={MontyLogo} alt="Montgomery Summit" className="saturate-0" />
        </li>
        <li className="p-4 sm:p-0">
          <img src={BoudinLogo} alt="Bistro Boudin" className="saturate-0" />
        </li>
        <li className="p-4 sm:p-0">
          <img src={HelpGoodLogo} alt="Help Good" className="saturate-0" />
        </li>
        <li className="p-4 sm:p-0">
          <img
            src={SFELogo}
            width="100"
            alt="State Fair Entertainment"
            className="saturate-0"
          />
        </li>
        <li className="p-4 sm:p-0">
          <img
            src={PCTLogo}
            alt="Plant Cell Technology"
            className="saturate-0"
          />
        </li>
      </ul>
      <BallPurple className="absolute hidden lg:block lg:top-0 lg:left-4" />
      <BallOrange className="absolute hidden scale-50 lg:block lg:top-10 lg:right-20" />
    </section>
  )
}
