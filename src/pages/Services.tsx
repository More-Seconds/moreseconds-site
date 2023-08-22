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
  StarOutline
} from 'public/svgs'
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
          className="h-auto absolute xl:top-[4rem] 2xl:top-[5rem] right-[1rem] scale-x-125 rotate-180 xl:-scale-y-125 z-100"
        />
        <GrayStar className="absolute xl:scale-[50%] xl:top-[8rem] xl:right-[5rem] 2xl:right-[8rem] 2xl:scale-[70%]" />
        <div className="flex flex-col">
          <section className="hero--section flex justify-center gap-[4rem]">
            <div className="z-30">
              <div className="">
                <ServicesMenu handleMenuItemClicked={handleMenuItemClick} />
              </div>
            </div>
            <div className="services-content">
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

          <section className="portfolio--section flex flex-col xl:px-[15rem] 2xl:px-[28rem]">
            <Star className="absolute xl:left-[27rem] xl:top-[38rem] scale-x-[-1] h-[30px] w-[30px] 2xl:left-[30rem]" />
            <CloudFull className="absolute xl:top-[25.5rem] scale-x-[-1] xl:h-[500px] xl:w-[500px] xl:left-0 2xl:h-[600px] 2xl:w-[600px] 2xl:top-[22.5rem]" />
            <BallPurple className="absolute xl:scale-[220%] xl:right-[6rem] top-[41rem] 2xl:top-[50rem] 2xl:right-[8rem]" />
            <ManArtist className="absolute xl:scale-[70%] xl:right-[-7rem] xl:top-[35rem] 2xl:top-[45rem] 2xl:scale-[80%]" />
            <h1
              className={`portfolio--title text-xl max-w-xl ml-2 font-semibold uppercase text-white sm:mb-10`}
            >
              {portfolioTitleMap[selectedMenuItem as keyof PortfolioTitleMap]}
            </h1>

            <GrayStar className="absolute xl:scale-[50%] xl:top-[58rem] xl:left-[3rem] 2xl:left-[7rem] 2xl:scale-[70%]" />
            <BallBlue className="absolute xl:left-[10rem] xl:top-[80rem] 2xl:left-[12rem] " />
            <CloudFull className="absolute scale-x-[-1] xl-h-[220px] xl:w-[220px] xl:top-[75rem] xl:right-[14rem] 2xl:right-[30rem] " />
            <Star className="absolute scale-x-[-1] h-[30px] w-[30px] xl:top-[82rem] xl:right-[24rem] 2xl:right-[45rem]" />
            <CloudFull className="absolute xl:right-0 xl:top-[70rem] xl:w-[550px] xl:h-[550px] 2xl:w-[650px] 2xl:h-[650px] 2xl:right-[6rem] 2xl:top-[74rem]" />

            <ul className="grid grid-cols-2 max-w-xl gap-10">
              {visiblePosts &&
                visiblePosts.length > 0 &&
                visiblePosts.map((ele: any) => {
                  return (
                    <React.Fragment key={ele.title}>
                      <div className="project-card-container relative">
                        <div className="project-card rounded-[3rem]">
                          <Project
                            className="w-[250px] h-[250px] rounded-[3rem] opacity-90 "
                            image={ele.thumbnailImage.asset.url}
                            slug={`/portfolio/${ele.slug.current}`}
                            title={''}
                            showSeeMore={false}
                          />
                        </div>
                        <div className="absolute bottom-4 ml-6 xl:text-md text-white font-bold">
                          {ele.title}
                        </div>
                      </div>
                    </React.Fragment>
                  )
                })}
            </ul>

            <Smoke
              width="60%"
              height="50%"
              className="absolute xl:-left-[4rem] xl:top-[40rem] 2xl:-left-[6rem]"
            />
            <StarOutline className="absolute xl:scale-[60%] xl:left-[26rem] xl:top-[88rem] 2xl:left-[36rem]" />
          </section>

          <section className="service--cards container flex flex-col justify-center mx-auto xl:py-[13rem] px-[8rem]">
            <h1 className="specific--info--title text-white text-2xl font-semibold uppercase mb-10">
              {
                specificInfoTitleMap[
                  selectedMenuItem as keyof SpecificInfoTitleMap
                ]
              }
            </h1>
            <div className="relative grid items-center justify-center w-full grid-flow-row gap-3 mb-4 sm:grid-cols-4 sm:mt-4">
              <Card className="bg-gradient-to-b from-[#b56628] via-[#74144e] to-[#0a0055] w-full h-full gap-2 py-10 sm:py-8 xl:gap-8">
                <Heading level="1" className="mx-auto font-bold xl:text-xl">
                  Full-cycle Website Design & Development
                </Heading>
                <BodyText className="text-xs xl:text-[16px] leading-6 font-normal">
                  We provide full-cycle development services from market
                  research and business analysis to design, development, and
                  launch. We’ll handle every step of the process and deliver the
                  website of your dreams.
                </BodyText>
              </Card>

              <Card className="bg-gradient-to-b from-[#b56628] via-[#74144e] to-[#0a0055] w-full h-full gap-2 py-10 sm:py-8 xl:gap-8">
                <Heading level="1" className="mx-auto font-bold xl:text-xl">
                  Custom Functionality and Features
                </Heading>
                <BodyText className="text-xs xl:text-[16px] leading-6 font-normal">
                  We’ll help you provide your users with an unforgettable
                  experience by bringing all of your unique functionality and
                  feature requests to life.
                </BodyText>
              </Card>

              <Card className="bg-gradient-to-b from-[#b56628] via-[#74144e] to-[#0a0055] w-full h-full gap-2 py-10 sm:py-8 xl:gap-8">
                <Heading level="1" className="mx-auto font-bold xl:text-xl">
                  Ecommerce, API, and Plugin Integration and Configuration
                </Heading>
                <BodyText className="text-xs xl:text-[16px] leading-6 font-normal">
                  No matter what you need your site to do, we’ll get it
                  configured with all of the necessary plugins and integrations
                  to do exactly what you desire.
                </BodyText>
              </Card>

              <Card className="bg-gradient-to-b from-[#b56628] via-[#74144e] to-[#0a0055] w-full h-full gap-2 py-10 sm:py-8 xl:gap-8">
                <Heading level="1" className="mx-auto font-bold xl:text-xl">
                  Desktop, Mobile, and Tablet Responsive
                </Heading>
                <BodyText className="text-xs xl:text-[16px] leading-6 font-normal">
                  We’ll ensure that every page maintains its seamless design and
                  functionality, no matter if it’s viewed on desktop, mobile, or
                  tablet.
                </BodyText>
              </Card>
            </div>
            <div className="flex justify-end sm:mt-4 ">
              <p className="uppercase text-white text-2xl">...and more!</p>
            </div>
          </section>

          <section className="additional--info h-full">
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

          <StarOutline className="absolute xl:scale-[60%] xl:bottom-[48rem] xl:right-[15rem]" />

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
