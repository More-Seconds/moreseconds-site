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

interface Col1InfoTitle {
  'Client Website Help': string
  'Website Design': string
  'Website Development': string
  'Update Website': string
  'Troubleshoot Website': string
  'Host Website': string
}


interface Col1InfoBody {
  'Client Website Help': string
  'Website Design': string
  'Website Development': string
  'Update Website': string
  'Troubleshoot Website': string
  'Host Website': string
}


interface Col2InfoTitle {
  'Client Website Help': string
  'Website Design': string
  'Website Development': string
  'Update Website': string
  'Troubleshoot Website': string
  'Host Website': string
}


interface Col2InfoBody {
  'Client Website Help': string
  'Website Design': string
  'Website Development': string
  'Update Website': string
  'Troubleshoot Website': string
  'Host Website': string
}


interface Col3InfoTitle {
  'Client Website Help': string
  'Website Design': string
  'Website Development': string
  'Update Website': string
  'Troubleshoot Website': string
  'Host Website': string
}


interface Col3InfoBody {
  'Client Website Help': string
  'Website Design': string
  'Website Development': string
  'Update Website': string
  'Troubleshoot Website': string
  'Host Website': string
}


interface Col4InfoTitle {
  'Client Website Help': string
  'Website Design': string
  'Website Development': string
  'Update Website': string
  'Troubleshoot Website': string
  'Host Website': string
}


interface Col4InfoBody {
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
  const [activeFilter, setActiveFilter] = useState('All Capaddbilities')

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
    'Website Development': 'More Seconds Website Development Services Include…',
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

  const col1InfoTitle: Col1InfoTitle = {
    'Client Website Help': 'Priced for Profitability',
    'Website Design': 'Rapid Prototyping & Design Discovery',
    'Website Development': 'Full-cycle Website Design & Development',
    'Update Website': 'Comprehensive Design Updates',
    'Troubleshoot Website': 'Preventative & Protective Measures',
    'Host Website': 'Affordable, Hands-Off Hosting'
  }

  const col1InfoBody: Col1InfoBody = {
    'Client Website Help': 'We offer our full suite of services at a rate far below most major agency pricing so you can expand your client offerings at your preferred rate, increase revenue, and effortlessly make a profit.',
    'Website Design': 'You’ll see exactly how your custom designs are progressing each step of the way with mockups in Figma, and your input is always welcome.',
    'Website Development': 'We provide full-cycle development services from market research and business analysis to design, development, and launch. We’ll handle every step of the process and deliver the website of your dreams.',
    'Update Website': 'Whether you want to redesign a page on your site or create a new one, we’ll help you design, develop, and implement your desired changes.',
    'Troubleshoot Website': 'We’ll update your website to prevent future issues from occurring and protect you from any unexpected and unwanted disasters.',
    'Host Website': 'We offer affordable hosting services where all you have to do is sit back, relax, and let us take care of the whole process.'
  
  }


  const col2InfoTitle: Col2InfoTitle = {
    'Client Website Help': 'Trusted by Top Agenciess',
    'Website Design': 'Style Guide & Brand Kit Creation',
    'Website Development': 'Custom Functionality and Features',
    'Update Website': 'Content & Image Updates',
    'Troubleshoot Website': 'Comprehensive Maintenance Reports',
    'Host Website': 'Data Security'
  }


  const col2InfoBody: Col2InfoBody = {
    'Client Website Help': 'Leading marketing agencies trust More Seconds with their web development needs because we are a reliable, long-term development partner with the expertise to bring their projects to fruition on budget, on time, and with the highest degree of accuracy.',
    'Website Design': 'We’ll create a consistent look and feel for your business across the digital landscape with the development of a brand kit and style guide.',
    'Website Development': 'We’ll help you provide your users with an unforgettable experience by bringing all of your unique functionality and feature requests to life.',
    'Update Website': 'We are available to make rapid text, image, and video changes to any section of your website that may need updating.',
    'Troubleshoot Website': "With our in-depth reporting, you'll have a clear understanding of the maintenance activities performed, allowing you to make informed decisions about the future of your website.",
    'Host Website': 'We’ll ensure all of your data, and that of your users, remains safe and secure.'
  }


  const col3InfoTitle: Col3InfoTitle = {
    'Client Website Help': '24/7 Emergency Fixes',
    'Website Design': 'User Flow Diagram Creation',
    'Website Development': 'Ecommerce, API, and Plugin Integration and Configuration',
    'Update Website': 'Integration, Plugin, and API Updates',
    'Troubleshoot Website': 'Close Monitoring',
    'Host Website': 'Website Backups'
  }


  const col3InfoBody: Col3InfoBody = {
    'Client Website Help': 'Our expert team of U.S.-based developers are available around the clock to handle any after hours emergencies your clients may run into so their sites never go down.',
    'Website Design': 'We’ll create a visual user flow diagram showing exactly how a new build will function and which users it will affect.',
    'Website Development':'No matter what you need your site to do, we’ll get it configured with all of the necessary plugins and integrations to do exactly what you desire.',
    'Update Website': 'We can update, add, or remove various plugins and integrations on your site to keep it up to date with your goals and vision.',
    'Troubleshoot Website': 'Our expert team will closely monitor your website, promptly addressing any issues that may arise.',   
    'Host Website': 'We provide peace of mind by regularly backing up your site, so you never have to worry about losing anything vital to your business.'
  }
  const col4InfoTitle: Col4InfoTitle = {
    'Client Website Help': 'Lightning Fast Turnaround Times',
    'Website Design': 'Webpage Design & Revamp',
    'Website Development': 'Desktop, Mobile, and Tablet Responsive',
    'Update Website': 'Support & Maintenance',
    'Troubleshoot Website': 'On-demand Troubleshooting & Fixes',
    'Host Website': 'Performance Optimization'
  }


  const col4InfoBody: Col4InfoBody = {
    'Client Website Help': 'We boast some of the fastest turnaround times in the industry. We’ll work with you and your clients to ensure that everything gets done on budget and on time.',
    'Website Design': 'Whether you are starting from scratch or simply interested in updating current pages, we’re excited to bring your ideas to life.',
    'Website Development':'We’ll ensure that every page maintains its seamless design and functionality, no matter if it’s viewed on desktop, mobile, or tablet.',
    'Update Website': 'We’ll help keep your website’s plugins, theme, core, and other important features updated and running smoothly.',
    'Troubleshoot Website': 'Our team is available around the clock to ensure your website remains in tip-top shape. We’ll immediately handle any problems your website encounters.',   
    'Host Website': 'We offer optimized performance options, keeping your website running better than ever.'
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
          className="hidden md:block h-auto absolute xl:top-[4rem] 2xl:top-[5rem] right-[1rem] scale-x-125 rotate-180 xl:-scale-y-125 z-100"
        />
        <GrayStar className="hidden md:block md:absolute xl:scale-[50%] xl:top-[8rem] xl:right-[5rem] 2xl:right-[8rem] 2xl:scale-[70%]" />
        <div className="flex flex-col">
          <section className="hero--section flex flex-col md:flex-row justify-center gap-[4rem]">
            <div className="z-10">
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
            <Star className="hidden md:block md:absolute xl:left-[27rem] xl:top-[38rem] scale-x-[-1] h-[30px] w-[30px] 2xl:left-[30rem]" />
            <CloudFull className="hidden md:block md:absolute xl:top-[25.5rem] scale-x-[-1] xl:h-[500px] xl:w-[500px] xl:left-0 2xl:h-[600px] 2xl:w-[600px] 2xl:top-[22.5rem]" />
            <BallPurple className="hidden md:block md:absolute xl:scale-[220%] xl:right-[6rem] top-[41rem] 2xl:top-[50rem] 2xl:right-[8rem]" />
            <ManArtist className="hidden md:block md:absolute xl:scale-[70%] xl:right-[-7rem] xl:top-[35rem] 2xl:top-[45rem] 2xl:scale-[80%]" />
            <h1
              className={`portfolio--title px-6 md:px-0 text-lg md:max-w-xl md:ml-2 font-semibold uppercase text-white sm:mb-6`}
            >
              {portfolioTitleMap[selectedMenuItem as keyof PortfolioTitleMap]}
            </h1>

            {selectedMenuItem === 'Troubleshoot Website' ||
            selectedMenuItem === 'Host Website' ? (
              <GrayStar className="hidden md:block md:absolute xl:scale-[50%] xl:top-[52rem] xl:left-[3rem] 2xl:left-[7rem] 2xl:scale-[70%]" />
            ) : (
              <GrayStar className="hidden md:block md:absolute xl:scale-[50%] xl:top-[58rem] xl:left-[3rem] 2xl:left-[7rem] 2xl:scale-[70%]" />
            )}

            <CloudFull className="hidden md:block md:absolute scale-x-[-1] xl-h-[220px] xl:w-[220px] xl:top-[75rem] xl:right-[14rem] 2xl:right-[30rem] " />
            <Star className="hidden md:block md:absolute scale-x-[-1] h-[30px] w-[30px] xl:top-[82rem] xl:right-[24rem] 2xl:right-[45rem]" />
            <CloudFull className="hidden md:block md:absolute xl:right-0 xl:top-[70rem] xl:w-[550px] xl:h-[550px] 2xl:w-[650px] 2xl:h-[650px] 2xl:right-[8rem] 2xl:top-[70rem]" />

            {selectedMenuItem === 'Troubleshoot Website' ||
            selectedMenuItem === 'Host Website' ? (
              <ul className="org--logos grid md:grid-cols-2 max-w-lg gap-8 py-10">
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
            ) : (
              <ul className="portfolio--grid grid mx-auto md:mx-0 md:grid-cols-2 max-w-xl gap-4 md:gap-10">
                {visiblePosts &&
                  visiblePosts.length > 0 &&
                  visiblePosts.map((ele: any) => {
                    return (
                      <React.Fragment key={ele.title}>
                        <div className="project-card-container relative">
                          <div className="project-card rounded-[3rem]">
                            <Project
                              className="sm:w-[350px] h-[250px] md:w-[250px] rounded-[3rem] opacity-90 "
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
            )}

            {selectedMenuItem === 'Troubleshoot Website' ||
            selectedMenuItem === 'Host Website' ? (
              <Smoke
                width="60%"
                height="50%"
                className="hidden md:block md:absolute xl:-left-[4rem] xl:top-[25rem] 2xl:-left-[6rem]"
              />
            ) : (
              <Smoke
                width="60%"
                height="50%"
                className="hidden md:block md:absolute xl:-left-[4rem] xl:top-[40rem] 2xl:-left-[6rem]"
              />
            )}

            <StarOutline className="hidden md:block md:absolute xl:scale-[60%] xl:left-[26rem] xl:top-[88rem] 2xl:left-[36rem]" />
          </section>

          {selectedMenuItem === 'Troubleshoot Website' ||
          selectedMenuItem === 'Host Website' ? (
            <section className="service--cards container flex flex-col justify-center mx-auto xl:pt-[23rem] xl:pb-[4rem] md:px-[8rem]">
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
                  {col1InfoTitle[selectedMenuItem as keyof Col1InfoTitle]}
                  </Heading>
                  <BodyText className="text-xs xl:text-[16px] leading-6 font-normal">
                  {col1InfoBody[selectedMenuItem as keyof Col1InfoBody]}
                  </BodyText>
                </Card>

                <Card className="bg-gradient-to-b from-[#b56628] via-[#74144e] to-[#0a0055] w-full h-full gap-2 py-10 sm:py-8 xl:gap-8">
                  <Heading level="1" className="mx-auto font-bold xl:text-xl">
                  {col2InfoTitle[selectedMenuItem as keyof Col2InfoTitle]}
                  </Heading>
                  <BodyText className="text-xs xl:text-[16px] leading-6 font-normal">
                  {col2InfoBody[selectedMenuItem as keyof Col2InfoBody]}
                  </BodyText>
                </Card>

                <Card className="bg-gradient-to-b from-[#b56628] via-[#74144e] to-[#0a0055] w-full h-full gap-2 py-10 sm:py-8 xl:gap-8">
                  <Heading level="1" className="mx-auto font-bold xl:text-xl">
                  {col3InfoTitle[selectedMenuItem as keyof Col3InfoTitle]}
                  </Heading>
                  <BodyText className="text-xs xl:text-[16px] leading-6 font-normal">
                  {col3InfoBody[selectedMenuItem as keyof Col3InfoBody]}
                  </BodyText>
                </Card>

                <Card className="bg-gradient-to-b from-[#b56628] via-[#74144e] to-[#0a0055] w-full h-full gap-2 py-10 sm:py-8 xl:gap-8">
                  <Heading level="1" className="mx-auto font-bold xl:text-xl">
                  {col4InfoTitle[selectedMenuItem as keyof Col4InfoTitle]}
                  </Heading>
                  <BodyText className="text-xs xl:text-[16px] leading-6 font-normal">
                  {col4InfoBody[selectedMenuItem as keyof Col4InfoBody]}

                  </BodyText>
                </Card>
              </div>
              <div className="flex justify-end sm:mt-4">
                <p className="uppercase text-white text-lg md:text-2xl">...and more!</p>
              </div>
            </section>
          ) : (
            <section className="service--cards--container md:container flex flex-col justify-center px-6  md:mx-auto xl:py-[13rem] md:px-[8rem]">
              <h1 className="specific--info--title mt-[6rem] md:mt-0 text-white text-lg md:text-2xl font-semibold uppercase mb-6">
                {
                  specificInfoTitleMap[
                    selectedMenuItem as keyof SpecificInfoTitleMap
                  ]
                }
              </h1>
              <div className="relative flex flex-col md:grid items-center justify-center w-full grid-flow-row gap-3 mb-4 sm:grid-cols-4">
                <Card className="bg-gradient-to-b from-[#b56628] via-[#74144e] to-[#0a0055] w-full h-full gap-2 py-10 sm:py-8 xl:gap-8">
                  <Heading level="1" className="mx-auto font-bold text-lg xl:text-xl">
                  {
                  col1InfoTitle[
                    selectedMenuItem as keyof Col1InfoTitle
                  ]
                }
                  </Heading>
                  <BodyText className="text-xs xl:text-[16px] leading-6 font-normal">
                  {
                  col1InfoBody[
                    selectedMenuItem as keyof Col1InfoBody
                  ]
                }
                  </BodyText>
                </Card>

                <Card className="bg-gradient-to-b from-[#b56628] via-[#74144e] to-[#0a0055] w-full h-full gap-2 py-10 sm:py-8 xl:gap-8">
                  <Heading level="1" className="mx-auto font-bold xl:text-xl">
                  {
                  col2InfoTitle[
                    selectedMenuItem as keyof Col2InfoTitle
                  ]
                }              
                    </Heading>
                  <BodyText className="text-xs xl:text-[16px] leading-6 font-normal">
                  {
                  col2InfoBody[
                    selectedMenuItem as keyof Col2InfoBody
                  ]
                }
                  </BodyText>
                </Card>

                <Card className="bg-gradient-to-b from-[#b56628] via-[#74144e] to-[#0a0055] w-full h-full gap-2 py-10 sm:py-8 xl:gap-8">
                  <Heading level="1" className="mx-auto font-bold xl:text-xl">
                  {
                  col3InfoTitle[
                    selectedMenuItem as keyof Col3InfoTitle
                  ]
                } 
                </Heading>
                  <BodyText className="text-xs xl:text-[16px] leading-6 font-normal">
                  {
                  col3InfoBody[
                    selectedMenuItem as keyof Col3InfoBody
                  ]
                }
                  </BodyText>
                </Card>

                <Card className="bg-gradient-to-b from-[#b56628] via-[#74144e] to-[#0a0055] w-full h-full gap-2 py-10 sm:py-8 xl:gap-8">
                  <Heading level="1" className="mx-auto font-bold xl:text-xl">
                  {
                  col4InfoTitle[
                    selectedMenuItem as keyof Col4InfoTitle
                  ]
                }                
                   </Heading>
                  <BodyText className="text-xs xl:text-[16px] leading-6 font-normal">
                  {
                  col4InfoBody[
                    selectedMenuItem as keyof Col4InfoBody
                  ]
                }
                  </BodyText>
                </Card>
              </div>
              <div className="flex justify-end sm:mt-4 ">
                <p className="uppercase text-white text-lg md:text-2xl">...and more!</p>
              </div>
            </section>
          )}

          {selectedMenuItem === 'Troubleshoot Website' ||
          selectedMenuItem === 'Host Website' ? (
            <section className="service--cards--container flex mx-auto px-[8rem] xl:h-full xl:pt-[8rem] xl:pb-[14rem] 2xl:pb-40 mt-10 gap-4">
              <Card
                backgroundColor="#3C3C59"
                className="w-full h-full min-h-[700px] pb-4 gap-2 xl:gap-8"
              >
                <div className="space-y-4">
                  <Heading
                    level="1"
                    className="mx-auto pt-10 font-bold xl:text-4xl"
                  >
                    Gold Package
                  </Heading>
                </div>
                <ul className="text-white list-disc px-8 space-y-4">
                  <li className="text-left text-sm">
                  24/7 Emergency Availability
                  </li>
                  <li className="text-left text-sm">
                  Priority Treatment in Development Queue
                  </li>
                  <li className="text-left text-sm">
                  Unlimited CMS Updates
                  </li>
                  <li className="text-left text-sm">Website Uptime Monitoring & Downtime Alert Reporting</li>
                  <li className="text-left text-sm">Custom Maintenance PDF Report</li>
                  <li className="text-left text-sm">
                  Website Backup System Configuration Report
                  </li>
                  <li className="text-left text-sm">WP Core Update</li>
                  <li className="text-left text-sm">
                  WP Theme Updates
                  </li>
                  <li className="text-left text-sm">
                  Non-Premium Plugin Updates
                  </li>
                  <li className="text-left text-sm">
                  Premium Plugin Updates
                  </li>
                  <li className="text-left text-sm">
                  Core Website Feature & Form Delivery Testing
                  </li>
                  <li className="text-left text-sm">
End of Workday Response Time for Requests before 3pm MTN
                  </li>
                </ul>
                <Button href={'#contact'}>Get Started</Button>
              </Card>

              <Card
                backgroundColor="#3C3C59"
                className="w-full h-full min-h-[700px] pb-4 gap-2 xl:gap-8"
              >
                <div className="space-y-4">
                  <Heading
                    level="1"
                    className="mx-auto pt-10 font-bold xl:text-4xl"
                  >
                    Silver Package
                  </Heading>
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
                className="w-full h-full min-h-[700px] pb-4 gap-2 xl:gap-8"
              >
                <div className="space-y-4">
                  <Heading
                    level="1"
                    className="mx-auto pt-10 font-bold xl:text-4xl"
                  >
                    Bronze Package
                  </Heading>
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
          ) : (
            <></>
          )}

          <section className="additional--info">
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

          <StarOutline className="hidden md:block md:absolute xl:scale-[60%] xl:bottom-[48rem] xl:right-[15rem]" />

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
