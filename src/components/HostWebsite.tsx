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

const HostWebsite = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <section className="mt-[11rem] xl:ml-[24rem] mb-[10rem] min-h-[400px]">
          <SmallTitle className="mx-auto text-left">Our Services</SmallTitle>
          <h1 className="max-w-4xl text-white font-semibold text-[42px] text-left mb-1">
            Website Hosting
          </h1>
          <div className="max-w-3xl">
            <BodyText className="text-left xl:text-lg max-w-xl ">
              We offer a variety of reliable, hands-off hosting options to suit
              your every need. Our affordable package options enable you to set
              it and forget it. We’ll get everything set up properly to keep
              your data, and that of your clients, safe and secure, so you can
              rest easy.
            </BodyText>
            <Button href="/" className="block w-[50%] px-8 mt-10 text-center">
              View Hosting Package Options
            </Button>
          </div>
        </section>

        <section className="portfolio--section relative h-screen ml-[-35rem]">
          <CloudFull className="absolute xl:left-[-10rem] xl:top-[-20rem] xl:h-[500px] xl:w-[500px] scale-x-[-1]" />
          <Star className="absolute scale-x-[-1] h-[30px] w-[30px] xl:left-[12rem] xl:bottom-[58rem]" />
          <h1 className="text-xl max-w-xl ml-2 font-semibold uppercase text-white sm:mb-10">
            Top Companies Trust Us To Host Their Websites
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
          <GrayStar className="absolute xl:-top-[-12rem]  xl:left-[-9rem] xl:scale-x-[40%] xl:scale-y-[40%]" />
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
            More Seconds Website Hosting Packages Include…
          </h1>
          <div className="relative grid items-center justify-center w-full grid-flow-row gap-3 px-4 mb-4 sm:grid-cols-4 sm:mt-4 sm:px-8 ">
            <Card className="bg-gradient-to-b from-[#b56628] via-[#74144e] to-[#0a0055] w-full h-full gap-2 py-10 sm:py-8 xl:gap-8">
              <Heading level="1" className="mx-auto font-bold xl:text-xl">
                Affordable, Hands-Off Hosting
              </Heading>
              <BodyText className="text-xs xl:text-[16px] leading-6 font-normal">
                We offer affordable hosting services where all you have to do is
                sit back, relax, and let us take care of the whole process.
              </BodyText>
            </Card>

            <Card className="bg-gradient-to-b from-[#b56628] via-[#74144e] to-[#0a0055] w-full h-full gap-2 py-10 sm:py-8 xl:gap-8">
              <Heading level="1" className="mx-auto font-bold xl:text-xl">
                Data Security
              </Heading>
              <BodyText className="text-xs xl:text-[16px] leading-6 font-normal">
                We’ll ensure all of your data, and that of your users, remains
                safe and secure.
              </BodyText>
            </Card>

            <Card className="bg-gradient-to-b from-[#b56628] via-[#74144e] to-[#0a0055] w-full h-full gap-2 py-10 sm:py-8 xl:gap-8">
              <Heading level="1" className="mx-auto font-bold xl:text-xl">
                Website Backups
              </Heading>
              <BodyText className="text-xs xl:text-[16px] leading-6 font-normal">
                We provide peace of mind by regularly backing up your site, so
                you never have to worry about losing anything vital to your
                business.
              </BodyText>
            </Card>

            <Card className="bg-gradient-to-b from-[#b56628] via-[#74144e] to-[#0a0055] w-full h-full gap-2 py-10 sm:py-8 xl:gap-8">
              <Heading level="1" className="mx-auto font-bold xl:text-xl">
                Performance Optimization.
              </Heading>
              <BodyText className="text-xs xl:text-[16px] leading-6 font-normal">
                We offer optimized performance options, keeping your website
                running better than ever.
              </BodyText>
            </Card>
          </div>
          <div className="flex justify-end px-4 sm:mt-4 sm:mb-48 sm:px-8">
            <p className="uppercase text-white text-2xl">...and more!</p>
          </div>
        </section>

        <section className="service--cards h-screen container my-[6rem] xl:px-[5rem] sm:mx-8">
          <h1 className="text-white text-4xl font-semibold uppercase mb-10 pb-10">
            Maintenance Package Options
          </h1>
          <CloudFull className="absolute right-[-3rem] top-[138rem] scale-[75%]" />
          <CloudFull className="absolute right-[14rem] top-[133rem] scale-[30%]" />

          <CloudFull className="absolute right-[24rem]  scale-[75%]" />

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
                  Bronze Package
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
            title={'HOST GREATNESS'}
            subTitle={'Secure, Hands-Off Hosting For A Fraction Of The Cost.'}
            content={
              'Let us handle hosting for you. With site backups, data security measures, and performance optimization options, we offer enterprise level hosting packages for a price that won’t break the bank. And the best part? We’ll handle the whole process, so you don’t have to.'
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

export default HostWebsite
