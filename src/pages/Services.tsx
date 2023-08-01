import { BodyText } from 'components/typography/BodyText'
import { Heading } from 'components/typography/Heading'
import { SmallTitle } from 'components/typography/SmallTitle'
import { Layout } from 'containers/layout/Layout'
import {
  BallBlue,
  BallOrange,
  BallPurple,
  BigSaturn,
  Cloud,
  CloudFull,
  HollowStar,
  ManArtist,
  Smoke,
  GrayStar,
  Star
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
import { Signup } from 'components/forms/Signup'
import { Testimonials } from 'components/shared sections/Testimonials'

const client = sanityClient({
  projectId: '1l0nc7l2',
  dataset: 'production',
  useCdn: true // this enables CDN-based querying for faster results
})

export function Services() {
  const [selectedMenuItem, setSelectedMenuItem] = useState('Website Design')
  const [isGeneralService, setIsGeneralService] = useState('')

  const handleMenuItemClick = (menuItem: string) => {
    setSelectedMenuItem(menuItem)
  }

  const [posts, setPosts] = useState<any>([])
  const [postsArchive, setPostsArchive] = useState<any>([])
  const [featured, setFeatured] = useState<any>([])
  const [loading, setLoading] = useState(true)
  const [listOfFilters, setListOfFilters] = useState<any>([])
  const [activeFilter, setActiveFilter] = useState('All Capabilities')

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
      <div className="">
        <section className="flex flex-col items-center justify-center ">
          <div className="flex justify-center">
            <div className="z-30">
              <ServicesMenu handleMenuItemClicked={handleMenuItemClick} />
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
          </div>
        </section>

        <section className="relative items-center block sm:py-72 xl:px-[13rem]">
          <div className="sm:translate-y-0">
            <h1 className="text-xl font-semibold uppercase text-white mt-[-4.2rem] mb-10">
              We Build Websites for Top Agencies
            </h1>
          </div>
          <ul className="grid self-start gap-16 w-[45%] mb-20 grid-cols-1 md:grid-cols-2 max-w-7xl">
            {visiblePosts &&
              visiblePosts.length > 0 &&
              visiblePosts.map((ele: any) => {
                return (
                  <React.Fragment key={ele.title}>
                    <div className="project-card-container relative">
                      <div className="project-card rounded-[3rem]">
                        <Project
                          className="w-[200px] h-[200px] relative rounded-[3rem] opacity-90 "
                          image={ele.thumbnailImage.asset.url}
                          slug={`/portfolio/${ele.slug.current}`}
                          title={''}
                          showSeeMore={false}
                        />
                      </div>
                      <div className="absolute bottom-4 ml-6 text-xs text-white font-bold">
                        {ele.title}
                      </div>
                    </div>
                  </React.Fragment>
                )
              })}
            <BallPurple className="absolute -top-[2rem] right-[5rem] xl:scale-[200%]" />
          </ul>
          <div className="flex items-center -translate-y-16 w-screen h-96 relative -right-20 justify-self-start sm:absolute sm:top-28 sm:-right-2 sm:w-[378px] xl:translate-y-64">
            <ManArtist className="absolute bottom-[8rem] -right-[4rem] h-full sm:scale-150 xl:scale-x-[200%] xl:scale-y-[200%]" />
            <Star className="absolute -left-2 top-8 sm:-left-[40vw] sm:-top-12 sm:-scale-x-75 sm:scale-y-75 xl:-top-[22rem] xl:-left-[46rem] xl:-scale-x-50 xl:scale-y-50" />
            <GrayStar className="absolute xl:top-[1rem] xl:-left-[65rem] xl:scale-x-[60%] xl:scale-y-[60%]" />
            <BallBlue className="absolute xl:top-[16rem] xl:-left-[61rem] xl:scale-x-[110%] xl:scale-y-[110%]" />
            <CloudFull className="absolute scale-75 top-10 sm:-scale-x-150 sm:scale-y-150 sm:-left-[65rem] sm:top-10 xl:-top-[18rem] xl:-scale-x-[150%] xl:scale-y-[150%] xl:-left-[65rem]" />
            <CloudFull className="absolute scale-75 sm:-scale-x-150 sm:scale-y-150 sm:-left-[65rem] sm:top-10 xl: xl:-scale-x-[75%] xl:scale-y-[75%] xl:-left-[15rem] xl:top-[14rem]" />
            <CloudFull className="absolute sm:scale-x-[-1] sm:scale-y-[-1] sm:-left-[65rem] transform scale-x-[-1] sm:top-10 xl:scale-x-[150%] xl:scale-y-[150%] xl:-left-[15rem] xl:top-[24rem]" />
          </div>
        </section>

        <section className="relative grid items-center justify-center w-full grid-flow-row gap-3 px-4 mt-4 mb-4 sm:grid-cols-4 sm:mt-32 sm:mb-48 sm:px-8 xl:px-32">
          <Card className="w-full h-full gap-2 py-10 sm:py-8 xl:gap-8">
            <Heading
              level="2"
              className="max-w-[16ch] mx-auto text-lg sm:text-base xl:text-2xl"
            >
              Full-cycle Website Design & Development
            </Heading>
            <BodyText className="text-xs xl:text-lg">
              We provide full-cycle development services from market research
              and business analysis to design, development, and launch.
            </BodyText>
          </Card>

          <Card className="w-full h-full gap-2 py-10 sm:py-8 xl:gap-8">
            <Heading
              level="2"
              className="max-w-[16ch] mx-auto text-lg sm:text-base xl:text-2xl"
            >
              Targeted Landing Page Development
            </Heading>
            <BodyText className="text-xs xl:text-lg">
              A pixel-perfect landing page built in record time. Select the
              platform, add any specifications, and we’ll handle the rest. It’s
              that easy!
            </BodyText>
          </Card>

          <Card className="w-full h-full gap-2 py-10 sm:py-8 sm:gap-4 xl:gap-8">
            <Heading
              level="2"
              className="max-w-[16ch] mx-auto text-lg sm:text-sm xl:text-2xl"
            >
              Theme Customization & Development
            </Heading>
            <BodyText className="text-xs xl:text-lg">
              We can help build anew or customize the current functionality of
              your websites CMS theme and backend architecture structure.
            </BodyText>
          </Card>

          <Card className="w-full h-full gap-2 py-10 sm:py-8 sm:gap-4 xl:gap-9">
            <Heading
              level="2"
              className="max-w-[16ch] mx-auto text-lg sm:text-sm xl:text-2xl"
            >
              Custom Plugin & Feature Development
            </Heading>
            <BodyText className="text-xs xl:text-lg">
              We use first-rate technologies to develop and implement new
              features and plugins that drive user satisfaction and successful
              conversions.
            </BodyText>
          </Card>
          <CloudFull className="absolute -bottom-14 -z-10 -left-24 sm:scale-150 sm:-bottom-16" />
          <BallBlue className="absolute -bottom-12 right-2 scale-[80%]" />
        </section>
        <div className="hidden max-h-[0px] sm:flex items-center justify-end">
          <CloudFull className="scale-y-110 translate-x-20 -translate-y-10 -scale-x-110" />
        </div>
        <Testimonials title="Websites that wow." />
      </div>
    </Layout>
  )
}
