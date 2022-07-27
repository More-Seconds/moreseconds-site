import { Dedicated } from 'components/shared sections/Dedicated'
import { Testimonials } from 'components/shared sections/Testimonials'
import { Testimonial } from 'components/shared sections/Testimonials/Testimonial'
import { BodyText } from 'components/typography/BodyText'
import { Heading } from 'components/typography/Heading'
import { SmallTitle } from 'components/typography/SmallTitle'
import { Layout } from 'containers/layout/Layout'
import { HeroCentered } from 'containers/shared/HeroCentered'
import {
  AlgorithmLogo,
  BoudinLogo,
  Request1,
  RequestAvatar1,
  Results1,
  SFELogo
} from 'public/images'
import { BallBlue, BallOrange, Cloud, Planet, Star } from 'public/svgs'
import { Request } from '../Request'
import { Results } from '../Results'
import { Stats } from '../Stats'
export function CaseStudyAlgorithm() {
  return (
    <Layout footerVariant="delivers">
      <HeroCentered>
        <SmallTitle className="uppercase">Marketing Agencies</SmallTitle>
        <Heading level="1" className="text-center lg:text-[64px] mb-4">
          Algorithm Agency
        </Heading>
        <BodyText className="max-w-3xl text-lg mx-4 text-center lg:max-w-4xl lg:mb-10">
          Based in Newport Beach, Algorithm Agency develops and implements
          results-driven campaigns powered by storytelling. This cutting-edge
          marketing agency builds highly technical digital campaigns to drive
          real, trackable outcomes resulting in over $52 million in sales.
        </BodyText>
        <div className="flex gap-8 lg:gap-20">
          <img
            src={SFELogo}
            alt=""
            className="w-full h-full saturate-0 lg:w-28 lg:h-28"
          />
          <img
            src={AlgorithmLogo}
            alt=""
            className="w-full h-full saturate-0 lg:w-28 lg:h-28"
          />
          <img
            src={BoudinLogo}
            alt=""
            className="w-full h-full saturate-0 lg:w-28 lg:h-28"
          />
        </div>
        <Planet className="absolute scale-50 -top-4 -right-8 lg:scale-100 lg:right-64 lg:top-24" />
        <BallOrange className="absolute right-0 scale-[25%] top-56 lg:scale-75 lg:right-16 lg:top-96" />
        <BallBlue className="absolute top-0 scale-50 left-4 lg:scale-75 lg:left-32 lg:top-16" />
        <Cloud className="hidden rotate-180 sm:block sm:absolute sm:-left-32 sm:bottom-0 sm:-scale-y-50 sm:scale-50 lg:-scale-y-100 lg:scale-x-100 lg:left-0" />
      </HeroCentered>
      <Request image={Request1} avatar={RequestAvatar1}>
        Algorithm Agency came to More Seconds because they needed a dedicated
        technical resource that was able to integrate into their digital
        operation as seamlessly as their in-house marketing team members.
      </Request>
      <Results image={Results1}>
        {[
          'Extended in-house development and technical operations knowledge base',
          'Provided a suite of on-demand web services including research & analysis, live web troubleshooting, web development expertise, project management, and much more',
          'Increased month-to-month ROI by expanding their premium client web service offerings',
          'Enabled marketing team to focus on their core competencies without worrying about the technical details'
        ]}
      </Results>
      <section className="mb-16 sm:mb-32 2xl:mx-auto 2xl:max-w-[1600px]">
        <Heading
          level="2"
          className="mb-5 text-[30px] leading-[56px] tracking-tighter text-center lg:text-[46px]"
        >
          Bistro Boudin
        </Heading>
        <Heading level="3" className="mb-5 text-lg text-center uppercase">
          <span className="text-lg">bistro boudin </span>
          <span className="text-[#3939FA] text-lg">in partnership</span>
          <span className="text-lg"> with algorithm agency</span>
        </Heading>
        <BodyText className="mx-4 mb-16 text-sm text-center sm:mx-16 lg:max-w-[80ch] lg:mx-auto sm:text-base lg:text-lg">
          Bistro Boudin is a nationally recognized San Francisco Bakery,
          Restaurant, and Catering Company. More Seconds was contracted by
          Algorithm Agency to redesign the Bistro Boudin Flagship website,
          develop a customized dedicated web server, and handle the ongoing
          maintenance & upgrade needs the client presented. This site uses
          Bridge + Elementor to provide a clean and easy way to create and
          update its frontend. It also includes customized PHP page templates,
          custom javascript for animating and rendering, as well as a host of
          custom features and functionality to improve their ADA compliance,
          page load time, and user experience.
        </BodyText>
        <SmallTitle className="text-[#3939FA] text-center mb-16">
          KEY OUTCOMES
        </SmallTitle>
        <div className="grid grid-cols-1 grid-rows-3 gap-4 mx-4 my-8 lg:mx-32 sm:grid-cols-3 sm:grid-rows-1">
          <div className="flex items-center justify-center px-8 py-16 sm:px-2 sm:py-8 rounded-xl bg-darkermid lg:py-16 lg:px-8 hover:bg-gradient-to-b from-[#3939FA]">
            <BodyText className="font-semibold text-center lg:text-2xl">
              Re-branded and re-designed company flagship website
            </BodyText>
          </div>
          <div className="flex items-center justify-center px-8 py-16 sm:px-2 sm:py-8 rounded-xl bg-darkermid lg:py-16 lg:px-8 hover:bg-gradient-to-b from-[#3939FA]">
            <BodyText className="font-semibold text-center lg:text-2xl">
              Long-term partnership for on-demand development, design, and
              consultancy services
            </BodyText>
          </div>
          <div className="flex items-center justify-center px-8 py-16 sm:px-2 sm:py-8 rounded-xl bg-darkermid lg:py-16 lg:px-8 hover:bg-gradient-to-b from-[#3939FA]">
            <BodyText className="font-semibold text-center lg:text-2xl">
              Ability to make rapid changes & updates to their website frontend
              or backend in order to optimize sales traffic & conversion ratio
            </BodyText>
          </div>
        </div>
      </section>
      <section className="relative z-10 mb-20 lg:mb-48 2xl:mx-auto 2xl:max-w-[1600px]">
        <Heading
          level="2"
          className="mb-5 text-[30px] leading-[56px] text-center lg:text-[46px] tracking-tighter"
        >
          State Fair Entertainment
        </Heading>
        <Heading
          level="3"
          className="mx-2 mb-5 text-lg font-normal text-center uppercase"
        >
          <span className="text-lg">State Fair Entertainment </span>
          <span className="text-accent text-lg">in partnership</span>
          <span className="text-lg"> with algorithm agency</span>
        </Heading>
        <BodyText className="mx-4 text-center text-sm sm:text-base sm:mx-16 mb-16 lg:max-w-[80ch] lg:mx-auto lg:text-lg">
          State Fair Entertainment, producer of the Official Summer Fair of
          L.A., was created around the idea that a large-scale, high quality
          entertainment venue can promote positivity, be eco &#38; family
          friendly and be an asset to the community in which it is held. More
          Seconds received an urgent request from Algorithm Agency to build a
          custom website for their new client State Fair Entertainment. By
          working with More Seconds for all of their development and web
          consulting needs, Algorithm Agency managed to generate over $4M+ in
          ticket &#38; accessory sales for State Fair Entertainment for their
          inaugural event.
        </BodyText>
        <SmallTitle className="text-accent text-center mb-16">
          KEY OUTCOMES
        </SmallTitle>
        <div className="grid grid-cols-1 grid-rows-4 gap-3 mx-4 my-8 sm:mx-16 lg:mx-32 sm:grid-cols-4 sm:grid-rows-1">
          <div className="flex items-center justify-center px-8 py-16 sm:px-1 sm:py-8 rounded-xl bg-darkermid lg:py-16 lg:px-4 hover:bg-gradient-to-b from-accent">
            <BodyText className="font-semibold text-center sm:leading-5 lg:text-2xl">
              New functional website developed to handle large scale e-commerce
              ticket and accessory sales
            </BodyText>
          </div>
          <div className="flex items-center justify-center px-8 py-16 sm:px-1 sm:py-8 rounded-xl bg-darkermid hover:bg-gradient-to-b from-accent">
            <BodyText className="font-semibold text-center sm:leading-5 lg:text-2xl">
              Ability to schedule and shift their website content in real-time
              to keep their site content fresh and engaging
            </BodyText>
          </div>
          <div className="flex items-center justify-center px-8 py-16 sm:p-4 rounded-xl bg-darkermid hover:bg-gradient-to-b from-accent">
            <BodyText className="font-semibold text-center sm:leading-5 lg:text-2xl">
              Customized and launched dedicated hosting server
            </BodyText>
          </div>
          <div className="flex items-center justify-center px-8 py-16 sm:p-4 rounded-xl bg-darkermid hover:bg-gradient-to-b from-accent">
            <BodyText className="font-semibold text-center sm:leading-5 lg:text-2xl">
              1000% marketing ad spend ROI achieved
            </BodyText>
          </div>
        </div>
        <Star className="hidden sm:block sm:absolute sm:left-0 sm:top-0 lg:left-8 sm:scale-50" />
        <Star className="hidden sm:block sm:absolute sm:right-0 sm:-top-8 lg:right-8 sm:scale-50" />
        <BallBlue className="hidden sm:block sm:absolute sm:right-4 sm:bottom-1/2" />
        <BallOrange className="hidden sm:block sm:absolute sm:bottom-16 sm:scale-50" />
      </section>
      <Stats />
      <Testimonials title="Generate millions in revenue with  the right website" />
      <Dedicated className="lg:hidden" />
    </Layout>
  )
}
