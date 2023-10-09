import {
  AlgorithmLogo,
  BoudinLogo,
  HelpGoodLogo,
  MMLogo,
  MontyLogo,
  PCTLogo,
  PopmenuLogo,
  SFELogo,
  HawkeMediaLogo,
  ClanFinderLogo,
  BlackAmbitionLogo
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
      <p className="px-8 font-bold text-center uppercase sm:text-xl font-Poppins text-light lg:mt-[4rem] md:px-[64px] md:leading-[1.35] md:text-[1.75rem] md:w-full md:max-w-full lg:px-[64px] lg:leading-[1.35] lg:text-[1.75rem] lg:w-full lg:max-w-full xl:px-0 xl:text-[2.2rem] xl:leading-[48px] xl:max-w-[50ch]">
      We have completed 2,235 projects for agencies, startups, event producers, and businesses of all sizes.
      </p>

      <ul className="grid grid-rows-2  place-items-center sm:grid-cols-2 sm:px-[25px] sm:gap-[1.5rem_3rem] md:grid-cols-5 md:gap-[2rem_5rem] md:px-[64px] lg:px-0 lg:gap-[1rem_0rem] lg:w-full lg:max-w-full xl:gap-[4rem_15rem] xl:mr-4 xl:max-w-5xl">

        <li className="p-4 sm:p-0">
          <img src={MontyLogo} alt="Montgomery Summit" className="saturate-0 sm:max-w-[7rem] sm:min-w-[9rem] md:min-w-[8rem] lg:max-w-[5rem] lg:min-w-[8rem] xl:min-w-[13rem]" />
        </li>

        <li className="p-4 sm:p-0">
          <img src={HelpGoodLogo} alt="Help Good" className="saturate-0 sm:max-w-[7rem] sm:min-w-[6rem] md:min-w-[5rem] lg:max-w-[5rem] xl:min-w-[8rem]" />
        </li>




        <li className="p-4 sm:p-0">
          <img src={MMLogo} alt="Madison Miles Media" className="saturate-0 sm:max-w-[7rem] sm:min-w-[7rem] md:min-w-[6rem] lg:max-w-[5rem] lg:min-w-[6rem] xl:min-w-[10rem]" />
        </li>


        <li className="p-4 sm:p-0">
          <img src={PopmenuLogo} alt="Popmenu" className="saturate-0 sm:max-w-[7rem] sm:min-w-[7rem]  md:min-w-[8rem] lg:max-w-[5rem] lg:min-w-[9rem] xl:min-w-[13rem]" />
        </li>
        

        <li className="p-4 sm:p-0">
          <img src={BlackAmbitionLogo} alt="Black Ambition Logo" className="saturate-0 sm:max-w-[10rem] sm:min-w-[7rem] md:min-w-[8rem] lg:max-w-[5rem] lg:min-w-[8rem] xl:min-w-[15rem]" />
        </li>


        <li className="p-4 sm:p-0">
          <img
            src={PCTLogo}
            alt="Plant Cell Technology"
            className="saturate-0 sm:max-w-[6rem] sm:min-w-[6rem]  md:max-w-[6rem] md:min-w-[6rem] lg:max-w-[5rem] xl:min-w-[9rem]"
          />
        </li>


        <li className="p-4 sm:p-0">
          <img src={BoudinLogo} alt="Bistro Boudin" className="saturate-0 sm:max-w-[6rem] sm:min-w-[6rem] md:max-w-[6rem] md:min-w-[6rem]  lg:max-w-[6rem] xl:min-w-[9rem]" />
        </li>


        <li className="p-4 sm:p-0">
          <img
            src={AlgorithmLogo}
            alt="Algorithm Agency"
            className="saturate-0 sm:max-w-[7rem] sm:min-w-[8em] md:max-w-[7rem] md:min-w-[7rem]  lg:max-w-[8rem] xl:min-w-[9rem]"
          />
        </li>


        <li className="p-4 sm:p-0">
          <img
            src={SFELogo}
            width="100"
            alt="State Fair Entertainment"
            className="saturate-0 sm:max-w-[7rem] sm:min-w-[6rem] md:max-w-[6rem] md:min-w-[6rem]  lg:max-w-[8rem] xl:min-w-[9rem]"
          />
        </li>


        <li className="p-4 sm:p-0">
          <img src={ClanFinderLogo} alt="Popmenu" className="saturate-0 sm:max-w-[7rem] sm:min-w-[7rem] md:max-w-[9rem] md:min-w-[9rem] lg:max-w-[8rem] xl:min-w-[15rem]" />
        </li>


        
      </ul>
      <BallPurple className="absolute hidden xl:block xl:top-0 xl:left-4" />
      <BallOrange className="absolute hidden scale-50 xl:block xl:top-10 xl:right-20" />
    </section>
  )
}
