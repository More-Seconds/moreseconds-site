import { BodyText } from 'components/typography/BodyText'
import { Heading } from 'components/typography/Heading'
import { Layout } from 'containers/layout/Layout'
import {
  BallBlue,
  BallPurple,
  CloudFull,
  ManArtist,
  Smoke,
  GrayStar,
  Star,
  StarOutline,
  Cloud,
  OrangeGradientBall
} from 'public/svgs'
import { AstronautLady } from 'public/svgs'
import React, { useEffect, useState } from 'react'
import sanityClient from '@sanity/client'
import { Project } from 'components/shared sections/Projects/Project'
import ServicesMenu from 'components/ServicesMenu'
import WebsiteDesign from 'components/WebsiteDesign'
import ClientWebsiteHelp from 'components/ClientWebsiteHelp'
import WebsiteDevelopment from 'components/WebsiteDevelopment'
import UpdateWebsite from 'components/UpdateWebsite'
import TroubleshootWebsite from 'components/TroubleshootWebsite'
import HostWebsite from 'components/HostWebsite'
import { Card } from 'components/Card'
import ServicesAdditionalInfo from 'components/ServicesAdditionalInfo'
import { Testimonials } from 'components/shared sections/Testimonials'
import { MontyLogo, HelpGoodLogo, HawkeMediaLogo, PCTLogo } from 'public/images'
import { Button } from 'components/Button'

const client = sanityClient({
  projectId: '1l0nc7l2',
  dataset: 'production',
  useCdn: true // this enables CDN-based querying for faster results
})

interface PortfolioTitleMap {
  'Client Website Help': string
  'Website Design': string
  'Website Development': string
  'Update Website': string
  'Troubleshoot Website': string
  'Host Website': string
}

interface SpecificInfoTitleMap {
  'Client Website Help': string
  'Website Design': string
  'Website Development': string
  'Update Website': string
  'Troubleshoot Website': string
  'Host Website': string
}

export function Services() {
  const [selectedMenuItem, setSelectedMenuItem] = useState('Website Design')
  const [posts, setPosts] = useState<any>([])
  const [postsArchive, setPostsArchive] = useState<any>([])
  const [featured, setFeatured] = useState<any>([])
  const [loading, setLoading] = useState(true)
  const [listOfFilters, setListOfFilters] = useState<any>([])
  const [activeFilter, setActiveFilter] = useState('All Capabilities')

  const portfolioTitleMap: PortfolioTitleMap = {
    'Client Website Help':
      'We’ve Built Unparalleled Websites With Custom Functionality For Top Companies',
    'Website Design': 'We’ve Designed Breathtaking Websites For Top Companies',
    'Website Development':
      'We’ve Built Unparalleled Websites With Custom Functionality For Top Companies',
    'Update Website':
      'We Keep Top Companies’ Websites Up To Date, So They Don’t Have To Worry',
    'Troubleshoot Website':
      'We Troubleshoot and Maintain The Websites of Industry Leaders, So They Never Miss A Beat',
    'Host Website': 'Top Companies Trust Us To Host Their Websites'
  }

  const specificInfoTitleMap: SpecificInfoTitleMap = {
    'Client Website Help': 'More Seconds White Label Services Include…',
    'Website Design': 'More Seconds Website Design Services Include…',
    'Website Development': 'More Seconds Website Design Services Include…',
    'Update Website': 'More Seconds Website Update Services Include…',
    'Troubleshoot Website':
      'More Seconds Website Maintenance Packages Include…',
    'Host Website': 'More Seconds Website Hosting Packages Include…'
  }

  const servicesAdditionalInfoTitleMap = {
    'Client Website Help': 'INCREASE YOUR REVENUE',
    'Website Design': 'DESIGN THAT DRIVES CONVERSION',
    'Website Development': 'DEVELOPMENT THAT DELIGHTS',
    'Update Website': 'UPGRADE YOUR UPDATES',
    'Troubleshoot Website': 'MAINTAIN MAGNIFICENCE',
    'Host Website': 'HOST GREATNESS'
  }

  const servicesAdditionalInfoSubtitleMap = {
    'Client Website Help': 'Make More Money With More Seconds',
    'Website Design': 'More Seconds Delivers Fresh, Modern Design Daily',
    'Website Development':
      'Have An Exciting Vision For Your Website? More Seconds Has The Tech Talent To Bring It To Life.',
    'Update Website':
      'Do You Need On-Demand Website Updates? Get More Seconds’ Lightning Fast Support.',
    'Troubleshoot Website':
      'Never Fret About Your Website Again! Protect Your Site With More Seconds’ Maintenance Packages.',
    'Host Website': 'Secure, Hands-Off Hosting For A Fraction Of The Cost.'
  }

  const servicesAdditionalInfoContentMap = {
    'Client Website Help':
      'We know this can be a challenging time for agencies. We make it easy for agencies to make more money with More Seconds with multiple income streams that are a win-win for you and your clients. Offer the following services (and more!) to your clients at your preferred rate and More Seconds will handle everything else end-to-end while you generate profits for your agency.',
    'Website Design':
      'When a potential customer visits your website for the first time, they need to meaningfully connect with your business in seconds. We are experts at utilizing sophisticated UI design and engaging UX journeys to create captivating landing pages designed to convert casual browsers into paying clients. From custom iconography and illustrations to content architecture and interactive elements, we’ll bring your brand’s best vision to life.',
    'Website Development':
      'Your website is essential to the success of your business. We understand the importance of every element – design, development, speed, security, performance, functionality, hosting, and maintenance. Modernizing your web presence boosts sales, supports marketing campaigns, increases customer acquisition, and more. We provide innovative, custom web development solutions so your website stays ahead of the competition.',
    'Update Website':
      'We offer on-call and on-demand web support that seamlessly integrates into your project management workflow. Our expert #dev-ops team is always available to handle any desired changes or unexpected issues.',
    'Troubleshoot Website':
      'We offer comprehensive, preventative maintenance across your website, so you’ll never have to experience that middle-of-the-night website emergency ever again. Our expert #dev-ops team is always available to handle any unexpected issues, whenever they may arise. We’ll worry about your website so you don’t have to.',
    'Host Website':
      'Let us handle hosting for you. With site backups, data security measures, and performance optimization options, we offer enterprise level hosting packages for a price that won’t break the bank. And the best part? We’ll handle the whole process, so you don’t have to.'
  }

  const testimonialTitle = {
    'Client Website Help': 'Grow Your Agency With More Seconds',
    'Website Design': 'Good Design Converts',
    'Website Development': 'Websites That Wow',
    'Update Website': 'We Want Our Clients To Win',
    'Troubleshoot Website': 'Stay One Step Ahead Of The Competition',
    'Host Website': 'Stay One Step Ahead Of The Competition'
  }

  const handleMenuItemClick = (menuItem: string) => {
    setSelectedMenuItem(menuItem)
  }

  async function fetchCategory() {
    const results = await client.fetch(
      `*[_type == 'portfolioCategories'] {
        _id,
        title
      }`
    )

    setListOfFilters(results)
  }

  async function fetchFeatured() {
    setLoading(true)
    const results = await client.fetch(
      `*[_id == 'dbdb1295-cba9-4a60-aecc-f2bef4f2e92b'] { body } `
    )
    setFeatured(results)
  }

  async function fetchAllPosts() {
    const arrayOfIDs =
      featured[0] &&
      featured[0].body.map((ele: any) => {
        return ele._ref
      })
    const postResults = await client.fetch(`*[_id in ${JSON.stringify(
      arrayOfIDs
    )}] {
        _id,
        heroImage {
          asset -> {url}
        },
        thumbnailImage {
          asset -> {url}
        },
        title,
        category,
        slug {
          current
        }

      } `)

    const sortedPosts = postResults.sort((a: any, b: any) => {
      return arrayOfIDs.indexOf(a._id) - arrayOfIDs.indexOf(b._id)
    })

    setPosts(sortedPosts)
    setPostsArchive(sortedPosts)
    setLoading(false)
  }

  function filter(e: any) {
    console.log(postsArchive)
    console.log(e.target.id)
    setActiveFilter(e.target.textContent)

    if (e.target.id === 'default-filter') {
      setPosts(postsArchive)
    } else {
      setPosts(
        postsArchive.filter((post: any) => {
          if (post.hasOwnProperty('category')) {
            return post.category.some((c: any) => c._ref === e.target.id)
          }
          return false
        })
      )
    }
  }

  useEffect(() => {
    fetchFeatured()
    fetchCategory()
  }, [])

  useEffect(() => {
    fetchAllPosts()
  }, [featured])

  if (loading) {
    return <div>Loading...</div>
  }
  const visiblePosts = posts.slice(0, 4)

  return (
    <Layout footerVariant="">
      <div className="relative">
        <Smoke
          width="80%"
          height="50%"
          className="h-auto hidden md:block md:absolute sm:top-0 md:top:[-3rem] sm:right-0 md:right-[-3rem] lg:right-[-4rem] lg:scale-x-100 xl:scale-x-125 rotate-180 xl:right-[2rem] sm:-scale-y-125 2xl:scale-x-100 2xl:-scale-y-100 2xl:right-[-7rem] 2xl:top-[-2rem] lg:top-10 xl:top-8 z-100"
        />
        <StarOutline className="absolute scale-[50%] sm:right-10 md:top-[10rem] md:left-[23.5rem] lg:top-[10rem] lg:left-[27rem] xl:scale-[60%] xl:top-[12rem] xl:left-[30rem]" />
        <GrayStar className="absolute sm:top-[-3rem] sm:scale-[30%] md:top-[2rem] md:right-[1rem] lg:top-[6rem] lg:right-[4rem] md:scale-[50%] xl:top-[8rem] xl:right-[5rem] 2xl:right-[5rem] 2xl:scale-[70%]" />
        <div className="px-4 md:px-0 flex flex-col mt-[3.5rem]">
          <h1 className="text-accent text-4xl lg:text-5xl font-bold md:pl-[3rem] lg:pl-[6rem] xl:pl-[10rem] 2xl:pl-[18rem] mb-10">
            I want to...
          </h1>
          <section className="hero--section gap-20 flex sm:flex-col md:flex-row md:items-center md:px-[3rem] lg:px-[6rem] xl:px-[10rem] 2xl:px-[18rem] md:gap-14 lg:gap-24">
            <div className="z-30">
              <div className="">
                <ServicesMenu handleMenuItemClicked={handleMenuItemClick} />
              </div>
            </div>
            <div className="services-content w-full">
              {selectedMenuItem === 'Client Website Help' && (
                <ClientWebsiteHelp />
              )}
              {selectedMenuItem === 'Website Design' && <WebsiteDesign />}
              {selectedMenuItem === 'Website Development' && (
                <WebsiteDevelopment />
              )}
              {selectedMenuItem === 'Update Website' && <UpdateWebsite />}
              {selectedMenuItem === 'Troubleshoot Website' && (
                <TroubleshootWebsite />
              )}
              {selectedMenuItem === 'Host Website' && <HostWebsite />}
            </div>
          </section>

          <section className="portfolio--section my-[10rem] md:my-0 md:mt-[12rem] flex items-center px-4 pl-0 md:pl-[3rem] lg:pl-[6rem] xl:pl-[10rem] 2xl:pl-[18rem] 2xl:mt-[15rem]">
            <Star className="absolute sm:scale-[70%]  sm:right-[10rem] sm:top-[84rem] lg:left-[27rem] lg:top-[38rem] h-[30px] w-[30px] 2xl:left-[30rem]" />
            <CloudFull className="hidden md:block md:absolute scale-x-[-1] lg:h-[480px] lg:w-[480px] md:top-[39rem] md:left-0 lg:top-[26rem] xl:h-[500px] xl:w-[500px] 2xl:h-[600px] 2xl:w-[600px] xl:top-[24rem] 2xl:top-[22.5rem]" />
            <BallPurple className="absolute h-[40px] w-[40px] sm:scale-[150%] sm:right-[8rem] sm:top-[58rem] md:top-[37rem] lg:scale-[220%] lg:top-[40rem] xl:right-[10rem] top-[40rem] xl:top-[35rem] 2xl:right-[14rem]" />

            {selectedMenuItem === 'Troubleshoot Website' ||
            selectedMenuItem === 'Host Website' ? (
              <GrayStar className="absolute xl:scale-[50%] sm:scale-[50%] sm:top-[92rem] sm:right-[4rem] xl:top-[52rem] xl:left-[3rem] 2xl:left-[7rem] 2xl:scale-[70%]" />
            ) : (
              <GrayStar className="absolute sm:top-[93rem] sm:right-10 lg:scale-[50%] lg:top-[5rem] xl:top-[58rem] lg:left-[2rem] xl:left-[3rem] 2xl:left-[7rem] 2xl:scale-[70%]" />
            )}

            <CloudFull className="hidden md:block md:absolute scale-x-[-1] md:h-[150px] md:w-[150px] lg:h-[200px] lg:w-[200px] md:top-[64rem] lg:top-[68rem] md:right-[5rem] xl:h-[220px] xl:w-[220px]  2xl:h-[250px] 2xl:w-[300px] xl:top-[70rem] xl:right-[14rem] 2xl:top-[70rem] 2xl:right-[18rem] " />
            <Star className="absolute scale-x-[-1] h-[30px] w-[30px] sm:top-[89rem] lg:top-[77rem] lg:right-[20rem] xl:top-[82rem] xl:right-[24rem] 2xl:right-[38rem] 2xl:top-[86rem]" />
            <CloudFull className="hidden md:block md:absolute sm:top-[89rem] md:right-0 md:top-[72rem] lg:top-[65rem] lg:w-[500px] lg:h-[500px] xl:top-[70rem] xl:w-[550px] xl:h-[550px] 2xl:w-[650px] 2xl:h-[650px] 2xl:right-[6rem] 2xl:top-[70rem]" />
            <div className="portfolio--container w-[50%]">
              <h1
                className={`portfolio--title text-sm md:text-md lg:text-xl font-semibold uppercase text-white mb-8 xl:mb-10 max-w-md xl:max-w-xl`}
              >
                {portfolioTitleMap[selectedMenuItem as keyof PortfolioTitleMap]}
              </h1>

              {selectedMenuItem === 'Troubleshoot Website' ||
              selectedMenuItem === 'Host Website' ? (
                <ul className="org--logos grid grid-cols-2 max-w-lg gap-4 xl:gap-8 py-10">
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
                      className="saturate-0 sm:max-w-[6rem] sm:min-w-[6rem] md:max-w-[6rem] md:min-w-[6rem] lg:max-w-[5rem] xl:min-w-[6rem]"
                    />
                  </li>
                </ul>
              ) : (
                <ul className="portfolio--grid relative z-10 grid grid-cols-2 gap-4 lg:max-w-md xl:max-w-xl lg:gap-6 xl:gap-8">
                  {visiblePosts &&
                    visiblePosts.length > 0 &&
                    visiblePosts.map((ele: any) => {
                      return (
                        <React.Fragment key={ele.title}>
                          <div className="project-card-container relative">
                            <div className="project-card rounded-[3rem]">
                              <Project
                                className="md:h-[180px] md:w-full lg:h-[200px] lg:w-[200px] xl:w-[250px] xl:h-[250px] sm:rounded-[2rem] md:rounded-[3rem] opacity-90"
                                image={ele.thumbnailImage.asset.url}
                                slug={`/portfolio/${ele.slug.current}`}
                                title={''}
                                showSeeMore={false}
                              />
                            </div>
                            <div className="absolute bottom-4 ml-2 md:ml-6  text-xs md:text-sm xl:text-md text-white font-bold">
                              {ele.title}
                            </div>
                          </div>
                        </React.Fragment>
                      )
                    })}
                </ul>
              )}
            </div>

            <div className="artist--image absolute right-[-12rem] md:right-[-10rem] lg:right-[-9rem] xl:right-[-7rem]">
              <ManArtist className="scale-[50%] lg:scale-[55%] xl:scale-[80%] lg:top-[39rem] xl:right-[-7rem] xl:top-[35rem] 2xl:top-[45rem]" />
            </div>

            {selectedMenuItem === 'Troubleshoot Website' ||
            selectedMenuItem === 'Host Website' ? (
              <Smoke
                width="60%"
                height="50%"
                className="absolute md:left-[-2rem] md:top-[10rem] lg:-left-[4rem] lg:top-[25rem] xl:top-[14rem] 2xl:-left-[6rem]"
              />
            ) : (
              <Smoke
                width="60%"
                height="50%"
                className="sm:hidden md:block md:absolute md:left-[-2.5rem] md:top-[30rem] lg:top-[40rem] xl:-left-[4rem] xl:top-[39rem] 2xl:left-[-5rem] 2xl:top-[45rem]"
              />
            )}

            <StarOutline className="absolute sm:top-[60rem] lg:scale-[60%] md:top-[69rem] lg:top-[80rem] lg:left-[20rem] xl:left-[26rem] xl:top-[88rem] 2xl:left-[36rem]" />
          </section>

          <Cloud className="mobile--cloud block md:hidden mb-4 scale-x-[-1] translate-x-[-1rem]" />

          {selectedMenuItem === 'Troubleshoot Website' ||
          selectedMenuItem === 'Host Website' ? (
            <section className="service--cards flex flex-col justify-center mb-[20rem] md:mb-0 md:px-[3rem] lg:pt-[18rem] lg:pb-[4rem] lg:px-[8rem] xl:px-[10rem] 2xl:px-[18rem] md:mt-[12rem]">
              <h1 className="specific--info--title text-md lg:text-xl font-semibold uppercase text-white mb-8 xl:mb-10 lg::max-w-md xl:max-w-none z-10">
                {
                  specificInfoTitleMap[
                    selectedMenuItem as keyof SpecificInfoTitleMap
                  ]
                }
              </h1>
              <div className="relative flex flex-col md:grid items-center justify-center w-full grid-flow-row gap-3 mb-4 md:grid-cols-4 sm:mt-4">
                <Card className="bg-gradient-to-b from-[#b56628] via-[#74144e] to-[#0a0055] w-full h-full gap-4 py-10 sm:py-8 xl:gap-8">
                  <h1 className="mx-auto font-bold text-xs xl:text-xl">
                    Full-cycle Website Design & Development
                  </h1>
                  <BodyText className="text-sm xl:text-[16px] leading-6 font-normal">
                    We provide full-cycle development services from market
                    research and business analysis to design, development, and
                    launch. We’ll handle every step of the process and deliver
                    the website of your dreams.
                  </BodyText>
                </Card>

                <Card className="bg-gradient-to-b from-[#b56628] via-[#74144e] to-[#0a0055] w-full h-full gap-4 py-10 sm:py-8 xl:gap-8">
                  <Heading
                    level="1"
                    className="mx-auto font-bold !leading-normal sm:text-sm lg:text-[18px] xl:text-xl"
                  >
                    Custom Functionality and Features
                  </Heading>
                  <BodyText className="text-sm xl:text-[16px] leading-6 font-normal">
                    We’ll help you provide your users with an unforgettable
                    experience by bringing all of your unique functionality and
                    feature requests to life.
                  </BodyText>
                </Card>

                <Card className="bg-gradient-to-b from-[#b56628] via-[#74144e] to-[#0a0055] w-full h-full gap-2 py-10 sm:py-8 xl:gap-8">
                  <Heading
                    level="1"
                    className="mx-auto font-bold !leading-normal sm:text-[18px] lg:text-[18px] xl:text-xl"
                  >
                    Ecommerce, API, and Plugin Integration and Configuration
                  </Heading>
                  <BodyText className="text-sm xl:text-[16px] leading-6 font-normal">
                    No matter what you need your site to do, we’ll get it
                    configured with all of the necessary plugins and
                    integrations to do exactly what you desire.
                  </BodyText>
                </Card>

                <Card className="bg-gradient-to-b from-[#b56628] via-[#74144e] to-[#0a0055] w-full h-full gap-2 py-10 sm:py-8 xl:gap-8">
                  <Heading
                    level="1"
                    className="mx-auto font-bold !leading-normal sm:text-[18px] lg:text-[18px] xl:text-xl"
                  >
                    Desktop, Mobile, and Tablet Responsive
                  </Heading>
                  <BodyText className="text-sm xl:text-[16px] leading-6 font-normal">
                    We’ll ensure that every page maintains its seamless design
                    and functionality, no matter if it’s viewed on desktop,
                    mobile, or tablet.
                  </BodyText>
                </Card>
              </div>
              <div className="flex justify-end sm:mt-4">
                <p className="uppercase text-white text-xl xl:text-2xl">
                  ...and more!
                </p>
              </div>
            </section>
          ) : (
            <section className="service--cards flex flex-col justify-center mx-auto md:pt-[8rem] lg:pt-[12rem] lg:pb-[8rem] xl:pt-[16rem] xl:pb-[10rem] md:px-[3rem] lg:px-[6rem] xl:px-[10rem] 2xl:px-[18rem]">
              <h1 className="specific--info--title text-white text-lg md:text-2xl xl:text-3xl font-semibold uppercase">
                {
                  specificInfoTitleMap[
                    selectedMenuItem as keyof SpecificInfoTitleMap
                  ]
                }
              </h1>
              =
              <div className="relative md:grid items-center justify-center w-full md:grid-flow-row md:gap-3 mb-4 md:grid-cols-4 sm:mt-4">
                <Card className="bg-gradient-to-b from-[#b56628] via-[#74144e] to-[#0a0055] w-full h-full gap-4 py-10 sm:py-8 xl:gap-8 mb-[1rem] md:mb-0">
                  <Heading
                    level="1"
                    className="mx-auto font-bold !leading-normal sm:text-sm md:text-[18px] lg:text-[18px] xl:text-xl"
                  >
                    Full-cycle Website Design & Development
                  </Heading>
                  <BodyText className="text-sm xl:text-[16px] leading-6 font-normal">
                    We provide full-cycle development services from market
                    research and business analysis to design, development, and
                    launch. We’ll handle every step of the process and deliver
                    the website of your dreams.
                  </BodyText>
                </Card>

                <Card className="bg-gradient-to-b from-[#b56628] via-[#74144e] to-[#0a0055] w-full h-full gap-4 py-10 sm:py-8 xl:gap-8 mb-[1rem] md:mb-0">
                  <Heading
                    level="1"
                    className="mx-auto font-bold !leading-normal sm:text-sm md:text-[18px] lg:text-[18px] xl:text-xl"
                  >
                    Custom Functionality and Features
                  </Heading>
                  <BodyText className="text-sm xl:text-[16px] leading-6 font-normal">
                    We’ll help you provide your users with an unforgettable
                    experience by bringing all of your unique functionality and
                    feature requests to life.
                  </BodyText>
                </Card>

                <Card className="bg-gradient-to-b from-[#b56628] via-[#74144e] to-[#0a0055] w-full h-full gap-4 py-10 sm:py-8 xl:gap-8 mb-[1rem] md:mb-0">
                  <Heading
                    level="1"
                    className="mx-auto font-bold !leading-normal sm:text-sm md:text-[18px] lg:text-[18px] xl:text-xl"
                  >
                    Ecommerce, API, and Plugin Integration and Configuration
                  </Heading>
                  <BodyText className="text-sm xl:text-[16px] leading-6 font-normal">
                    No matter what you need your site to do, we’ll get it
                    configured with all of the necessary plugins and
                    integrations to do exactly what you desire.
                  </BodyText>
                </Card>

                <Card className="bg-gradient-to-b from-[#b56628] via-[#74144e] to-[#0a0055] w-full h-full gap-4 py-10 sm:py-8 xl:gap-8 mb-[1rem] md:mb-0">
                  <Heading
                    level="1"
                    className="mx-auto font-bold !leading-normal sm:text-sm md:text-[18px] lg:text-[18px] xl:text-xl"
                  >
                    Desktop, Mobile, and Tablet Responsive
                  </Heading>
                  <BodyText className="text-sm xl:text-[16px] leading-6 font-normal">
                    We’ll ensure that every page maintains its seamless design
                    and functionality, no matter if it’s viewed on desktop,
                    mobile, or tablet.
                  </BodyText>
                </Card>
              </div>
              <div className="flex justify-end sm:mt-4 ">
                <p className="uppercase text-white text-xl xl:text-2xl">
                  ...and more!
                </p>
              </div>
            </section>
          )}

          {selectedMenuItem === 'Troubleshoot Website' ||
          selectedMenuItem === 'Host Website' ? (
            <>
              <CloudFull className="absolute xl:left-[14rem] md:scale-[40%] lg:scale-[100%] md:left-[-8rem] md:top-[131rem] xl:top-[145rem]" />
              <CloudFull className="scale-50 hidden md:block md:absolute xl:left-[-5rem] md:top-[124rem] xl:top-[161rem] 2xl:top-[152rem]" />

              <h1 className="package--title text-2xl lg:text-4xl xl:text-5xl font-semibold md:mt-40 xl:mt-[21rem] text-white mb-10  z-10 md:px-[3rem] lg:px-[8rem] xl:px-[10rem] 2xl:px-[18rem]">
                Maintenance Package Options
              </h1>

              <AstronautLady className="absolute sm:top-[157rem] md:translate-x-[8rem] xl:translate-x-[12rem] md:scale-[70%] md:top-[114rem] lg:top-[124rem] xl:top-[133rem] 2xl:top-[120rem] xl:scale-[60%] 2xl:mt-[4rem]" />
              <OrangeGradientBall className="hidden lg:block lg:absolute scale-[30%] lg:top-[147rem] lg:left-[2rem] xl:scale-[40%] xl:top-[164rem] xl:left-[4rem] 2xl:top-[165rem] 2xl:left-[12rem]" />

              <section className="service--cards--container flex flex-col md:flex-row justify-center lg:h-full lg:py-30 xl:pt-24 mt-10 md:mb-[12rem] gap-4 md:px-[3rem] lg:px-[8rem] xl:pb-0 xl:px-[10rem] 2xl:px-[18rem]">
                <Card
                  backgroundColor="#3C3C59"
                  className="w-full h-fit pb-4 gap-2 xl:gap-8"
                >
                  <div className="space-y-4">
                    <Heading
                      level="1"
                      className="mx-auto pt-10 text-left font-bold xl:text-4xl ml-[2.2rem]"
                    >
                      Gold Package
                    </Heading>
                  </div>
                  <ul className="text-white list-disc md:px-4 md:mt-4 lg:mt-0 lg:px-8 space-y-4 ml-5">
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
                    <li className="text-left text-sm">
                      Premium Plugin Updates
                    </li>
                    <li className="text-left text-sm">
                      Core Website Feature & Form Delivery Testing
                    </li>
                  </ul>
                  <Button href={'#contact'} className="mt-4">
                    Get Started
                  </Button>
                </Card>

                <Card
                  backgroundColor="#3C3C59"
                  className="w-full  h-fit pb-4 gap-2 xl:gap-8"
                >
                  <div className="space-y-4">
                    <Heading
                      level="1"
                      className="mx-auto pt-10 text-left font-bold xl:text-4xl ml-[2.2rem]"
                    >
                      Silver Package
                    </Heading>
                  </div>
                  <ul className="text-white list-disc md:px-4 md:mt-4 lg:mt-0 lg:px-8 space-y-4 ml-5">
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
                    <li className="text-left text-sm">
                      Premium Plugin Updates
                    </li>
                    <li className="text-left text-sm">
                      Core Website Feature & Form Delivery Testing
                    </li>
                  </ul>
                  <Button href={'#contact'} className="mt-4">
                    Get Started
                  </Button>
                </Card>

                <Card
                  backgroundColor="#323249"
                  className="w-full  h-fit pb-4 gap-2 xl:gap-8"
                >
                  <div className="space-y-4">
                    <Heading
                      level="1"
                      className="mx-auto pt-10 text-left font-bold xl:text-4xl ml-[2.2rem]"
                    >
                      Bronze Package
                    </Heading>
                  </div>
                  <ul className="text-white list-disc md:px-4 md:mt-4 lg:mt-0 lg:px-8 space-y-4 ml-5">
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
                    <li className="text-left text-sm">
                      Premium Plugin Updates
                    </li>
                  </ul>
                  <Button href={'#contact'} className="mt-4">
                    Get Started
                  </Button>
                </Card>
              </section>
            </>
          ) : (
            <></>
          )}

          <section className="additional--info xl:mt-[12rem] mb-24">
            <ServicesAdditionalInfo
              title={
                (
                  servicesAdditionalInfoTitleMap as Record<
                    typeof selectedMenuItem,
                    string
                  >
                )[selectedMenuItem] || 'INCREASE YOUR REVENUE'
              }
              subTitle={
                (
                  servicesAdditionalInfoSubtitleMap as Record<
                    typeof selectedMenuItem,
                    string
                  >
                )[selectedMenuItem] || 'Make More Money With More Seconds'
              }
              content={
                (
                  servicesAdditionalInfoContentMap as Record<
                    typeof selectedMenuItem,
                    string
                  >
                )[selectedMenuItem] ||
                'We know this can be a challenging time for agencies. We make it easy for agencies to make more money with More Seconds with multiple income streams that are a win-win for you and your clients. Offer the following services (and more!) to your clients at your preferred rate and More Seconds will handle everything else end-to-end while you generate profits for your agency.'
              }
              buttonText={'Get More Seconds'}
              buttonHref={'/contact'}
            />
          </section>

          <Testimonials
            title={
              (testimonialTitle as Record<typeof selectedMenuItem, string>)[
                selectedMenuItem
              ] || 'Grow Your Agency With More Seconds'
            }
          />
        </div>
      </div>
    </Layout>
  )
}
