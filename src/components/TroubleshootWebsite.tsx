import { Button } from 'components/Button'
import { BodyText } from 'components/typography/BodyText'
import { SmallTitle } from 'components/typography/SmallTitle'
import { Heading } from './typography/Heading'
import { Card } from './Card'
import { Testimonials } from './shared sections/Testimonials'
import {
  BallBlue,
  BallPurple,
  CloudFull,
  GrayStar,
  ManArtist,
  Smoke,
  Star,
  StarOutline
} from 'public/svgs'
import ServicesAdditionalInfo from './ServicesAdditionalInfo'
import { Clients } from './shared sections/Clients'
import {
  BlackAmbitionLogo,
  HawkeMediaLogo,
  HelpGoodLogo,
  MontyLogo,
  PCTLogo
} from 'public/images'

const TroubleshootWebsite = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <section className="mt-[11rem] xl:ml-[24rem] mb-[10rem] min-h-[400px]">
          <SmallTitle className="mx-auto text-left">Our Services</SmallTitle>
          <h1 className="max-w-4xl text-white font-semibold text-[42px] text-left mb-1">
            Website Maintenance
          </h1>
          <div className="max-w-3xl">
            <BodyText className="text-left xl:text-lg max-w-xl ">
              Never worry about your website going down again! Take full
              advantage of our troubleshooting and maintenance expertise. We’ll
              take a look at your overall website performance issues, server
              configurations, and site architecture as well as help plan all new
              functionality or design needs to keep your site in tip-top shape.
              You’ll be armed with a versatile Swiss-Army knife of web
              development, design, and optimization tools, so your website is
              nothing short of perfection.
            </BodyText>
            <Button href="/" className="block w-[50%] px-8 mt-10 text-center">
              View Maintenance Package Options
            </Button>
          </div>
        </section>

        <section className="portfolio--section relative h-screen ml-[-35rem]">
          <CloudFull className="absolute xl:left-[-10rem] xl:top-[-20rem] xl:h-[500px] xl:w-[500px] scale-x-[-1]" />
          <Star className="absolute scale-x-[-1] h-[30px] w-[30px] xl:left-[12rem] xl:bottom-[58rem]" />
          <h1 className="text-xl max-w-xl ml-2 font-semibold uppercase text-white sm:mb-10">
            We Troubleshoot and Maintain The Websites of Industry Leaders, So
            They Never Miss A Beat
          </h1>

          <ul className="org--logs grid grid-cols-2 max-w-lg gap-8 py-10">
            <li className="p-4 sm:p-0">
              <img
                src={MontyLogo}
                alt="Montgomery Summit"
                className="saturate-0 sm:max-w-[7rem] sm:min-w-[9rem] md:min-w-[8rem] lg:max-w-[5rem] lg:min-w-[8rem] xl:min-w-[9rem] "
              />
            </li>

            <li className="p-4 sm:p-0">
              <img
                src={HelpGoodLogo}
                alt="Help Good"
                className="saturate-0 sm:max-w-[7rem] sm:min-w-[6rem] md:min-w-[5rem] lg:max-w-[5rem] "
              />
            </li>

            <li className="p-4 sm:p-0">
              <img
                src={HawkeMediaLogo}
                alt="Madison Miles Media"
                className="saturate-0 sm:max-w-[7rem] sm:min-w-[7rem] md:min-w-[6rem] lg:max-w-[5rem] lg:min-w-[6rem] xl:min-w-[10rem]"
              />
            </li>

            <li className="p-4 sm:p-0">
              <img
                src={PCTLogo}
                alt="Plant Cell Technology"
                className="saturate-0 sm:max-w-[6rem] sm:min-w-[6rem]  md:max-w-[6rem] md:min-w-[6rem] lg:max-w-[5rem] xl:min-w-[6rem]"
              />
            </li>
          </ul>
          <GrayStar className="absolute xl:-top-[-12rem]  xl:left-[-9rem] xl:scale-x-[60%] xl:scale-y-[60%]" />
          <BallBlue className="absolute xl:bottom-[20rem] xl:left-[-7rem] xl:scale-x-[110%] xl:scale-y-[110%]" />
          <BallPurple className="absolute xl:top-[-10rem] xl:left-[70rem] 2xl:left-[80rem] sm:scale-[250%]" />
          <ManArtist className="absolute xl:scale-x-[75%] xl:scale-y-[75%] xl:top-[-16rem] xl:-right-[52rem] 2xl:-right-[67rem]" />
          <CloudFull className="absolute xl:top-[25rem] xl:right-[-26rem] h-[200px] w-[200px]" />
          <Star className="absolute scale-x-[-1] h-[25px] w-[25px] xl:top-[38rem] xl:left-[56rem]" />
          <CloudFull className="absolute xl:right-[-47rem] xl:bottom-[-5rem] h-[450px] w-[450px]" />
        </section>

        <Smoke
          width="50%"
          height="50%"
          className="h-auto absolute scale-x-[-1] -left-12 top-[88rem] rotate-180 -scale-y-125 z-[999]"
        />
        <StarOutline className="absolute right-[60rem] top-[86rem] xl:scale-x-[60%] xl:scale-y-[60%]" />

        <section className="service--cards container xl:px-[5rem] pt-28">
          <h1 className="text-white text-2xl font-semibold uppercase mx-8 mb-10">
            More Seconds Website Maintenance Packages Include…
          </h1>
          <div className="relative grid items-center justify-center w-full grid-flow-row gap-3 px-4 mb-4 sm:grid-cols-4 sm:mt-4 sm:px-8 ">
            <Card className="bg-gradient-to-b from-[#b56628] via-[#74144e] to-[#0a0055] w-full h-full gap-2 py-10 sm:py-8 xl:gap-8">
              <Heading level="1" className="mx-auto font-bold xl:text-xl">
                Preventative & Protective Measures
              </Heading>
              <BodyText className="text-xs xl:text-[16px] leading-6 font-normal">
                We’ll update your website to prevent future issues from
                occurring and protect you from any unexpected and unwanted
                disasters.
              </BodyText>
            </Card>

            <Card className="bg-gradient-to-b from-[#b56628] via-[#74144e] to-[#0a0055] w-full h-full gap-2 py-10 sm:py-8 xl:gap-8">
              <Heading level="1" className="mx-auto font-bold xl:text-xl">
                Comprehensive Maintenance Reports
              </Heading>
              <BodyText className="text-xs xl:text-[16px] leading-6 font-normal">
                With our in-depth reporting, you'll have a clear understanding
                of the maintenance activities performed, allowing you to make
                informed decisions about the future of your website. accuracy.
              </BodyText>
            </Card>

            <Card className="bg-gradient-to-b from-[#b56628] via-[#74144e] to-[#0a0055] w-full h-full gap-2 py-10 sm:py-8 xl:gap-8">
              <Heading level="1" className="mx-auto font-bold xl:text-xl">
                Close Monitoring
              </Heading>
              <BodyText className="text-xs xl:text-[16px] leading-6 font-normal">
                Our expert team will closely monitor your website, promptly
                addressing any issues that may arise.
              </BodyText>
            </Card>

            <Card className="bg-gradient-to-b from-[#b56628] via-[#74144e] to-[#0a0055] w-full h-full gap-2 py-10 sm:py-8 xl:gap-8">
              <Heading level="1" className="mx-auto font-bold xl:text-xl">
                On-demand Troubleshooting & Fixes
              </Heading>
              <BodyText className="text-xs xl:text-[16px] leading-6 font-normal">
                Our team is available around the clock to ensure your website
                remains in tip-top shape. We’ll immediately handle any problems
                your website encounters.
              </BodyText>
            </Card>
          </div>
          <div className="flex justify-end px-4 sm:mt-4 sm:mb-48 sm:px-8">
            <p className="uppercase text-white text-2xl">...and more!</p>
          </div>
        </section>

        <section className="service--cards h-screen container xl:px-[5rem] sm:mx-8">
          <h1 className="text-white text-4xl font-semibold uppercase mb-10">
            Maintenance Package Options
          </h1>

          <div className="menu">
            <ul className="flex gap-4">
              <li className="bg-translucent text-white rounded-tr-2xl rounded-br-2xl rounded-bl-2xl p-4  border border-r-[6px] border-b-4 border-accent py-4 text-sm font-semibold text-center hover:bg-white hover:text-accent transition-all duration-300 cursor-pointer">
                Monthly Pricing
              </li>
              <li className="bg-translucent text-white rounded-tr-2xl rounded-br-2xl rounded-bl-2xl p-4  border border-r-[6px] border-b-4 border-accent py-4 text-sm font-semibold text-center hover:bg-white hover:text-accent transition-all duration-300 cursor-pointer">
                Quarterly Pricing
              </li>
              <li className="bg-translucent text-white rounded-tr-2xl rounded-br-2xl rounded-bl-2xl p-4  border border-r-[6px] border-b-4 border-accent py-4 text-sm font-semibold text-center hover:bg-white hover:text-accent transition-all duration-300 cursor-pointer">
                Yearly Pricing
              </li>
            </ul>
          </div>

          <section className="service--cards--container flex w-full h-full mt-10 gap-4">
            <Card
              backgroundColor="#3C3C59"
              className="w-full h-full gap-2 xl:gap-8"
            >
              <div className="space-y-4">
                <Heading
                  level="1"
                  className="mx-auto pt-10 font-bold xl:text-4xl"
                >
                  Gold Package
                </Heading>
                <p>$x</p>
              </div>
              <ul className="text-white list-disc px-8 space-y-4">
                <li className="text-left text-sm">
                  Website Uptime Monitoring & Downtime Alert Reporting
                </li>
                <li className="text-left text-sm">
                  Custom Maintenance PDF Report
                </li>
                <li className="text-left text-sm">
                  Website Backup System Configuration Report
                </li>
                <li className="text-left text-sm">WP Core Updates</li>
                <li className="text-left text-sm">WP Theme Updates</li>
                <li className="text-left text-sm">
                  Non-Premium Plugin Updates
                </li>
                <li className="text-left text-sm">Premium Plugin Updates</li>
                <li className="text-left text-sm">
                  Core Website Feature & Form Delivery Testing
                </li>
              </ul>
              <Button href={'#contact'}>Get Started</Button>
            </Card>

            <Card
              backgroundColor="#3C3C59"
              className="w-full h-full gap-2 xl:gap-8"
            >
              <div className="space-y-4">
                <Heading
                  level="1"
                  className="mx-auto pt-10 font-bold xl:text-4xl"
                >
                  Silver Package
                </Heading>
                <p>$x</p>
              </div>
              <ul className="text-white list-disc px-8 space-y-4">
                <li className="text-left text-sm">
                  Website Uptime Monitoring & Downtime Alert Reporting
                </li>
                <li className="text-left text-sm">
                  Custom Maintenance PDF Report
                </li>
                <li className="text-left text-sm">
                  Website Backup System Configuration Report
                </li>
                <li className="text-left text-sm">WP Core Updates</li>
                <li className="text-left text-sm">WP Theme Updates</li>
                <li className="text-left text-sm">
                  Non-Premium Plugin Updates
                </li>
                <li className="text-left text-sm">Premium Plugin Updates</li>
                <li className="text-left text-sm">
                  Core Website Feature & Form Delivery Testing
                </li>
              </ul>
              <Button href={'#contact'}>Get Started</Button>
            </Card>

            <Card
              backgroundColor="#323249"
              className="w-full h-full gap-2 xl:gap-8"
            >
              <div className="space-y-4">
                <Heading
                  level="1"
                  className="mx-auto pt-10 font-bold xl:text-4xl"
                >
                  Gold Package
                </Heading>
                <p>$x</p>
              </div>
              <ul className="text-white list-disc px-8 space-y-4">
                <li className="text-left text-sm">
                  Website Uptime Monitoring & Downtime Alert Reporting
                </li>
                <li className="text-left text-sm">
                  Custom Maintenance PDF Report
                </li>
                <li className="text-left text-sm">WP Core Updates</li>
                <li className="text-left text-sm">WP Theme Updates</li>
                <li className="text-left text-sm">
                  Non-Premium Plugin Updates
                </li>
                <li className="text-left text-sm">Premium Plugin Updates</li>
              </ul>
              <Button href={'#contact'}>Get Started</Button>
            </Card>
          </section>
        </section>

        <section className="additional--info my-[20rem]">
          <ServicesAdditionalInfo
            title={'MAINTAIN MAGNIFICENCE'}
            subTitle={
              'Never Fret About Your Website Again! Protect Your Site With More Seconds’ Maintenance Packages.'
            }
            content={
              'We offer comprehensive, preventative maintenance across your website, so you’ll never have to experience that middle-of-the-night website emergency ever again. Our expert #dev-ops team is always available to handle any unexpected issues, whenever they may arise. We’ll worry about your website so you don’t have to.'
            }
            buttonText={'Get More Seconds'}
            buttonHref={'/contact'}
          />
        </section>

        <Testimonials title={'Stay One Step Ahead Of The Competition'} />
      </div>
    </>
  )
}

export default TroubleshootWebsite
