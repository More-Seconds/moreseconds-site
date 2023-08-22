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
  Star,
  StarOutline,
  Satellite
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

const client = sanityClient({
  projectId: '1l0nc7l2',
  dataset: 'production',
  useCdn: true // this enables CDN-based querying for faster results
})

export function Services() {
  const [selectedMenuItem, setSelectedMenuItem] = useState('Website Design')
  const [posts, setPosts] = useState<any>([])
  const [postsArchive, setPostsArchive] = useState<any>([])
  const [featured, setFeatured] = useState<any>([])
  const [loading, setLoading] = useState(true)
  const [listOfFilters, setListOfFilters] = useState<any>([])
  const [activeFilter, setActiveFilter] = useState('All Capabilities')

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
        <div className="flex flex-col ">
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

          <section className="portfolio--section flex flex-col xl:px-[15rem] 2xl:px-[28rem] xl:pb-[20rem] 2xl:pb-[30rem]">
            <Star className="absolute xl:left-[27rem] xl:top-[38rem] scale-x-[-1] h-[30px] w-[30px] 2xl:left-[30rem]" />
            <CloudFull className="absolute xl:top-[25.5rem] scale-x-[-1] xl:h-[500px] xl:w-[500px] xl:left-0 2xl:h-[600px] 2xl:w-[600px] 2xl:top-[22.5rem]" />
            <BallPurple className="absolute xl:scale-[220%] xl:right-[6rem] top-[41rem] 2xl:top-[50rem] 2xl:right-[8rem]" />
            <ManArtist className="absolute xl:scale-[70%] xl:right-[-7rem] xl:top-[35rem] 2xl:top-[45rem] 2xl:scale-[80%]" />
            <h1 className="text-xl max-w-xl ml-2 font-semibold uppercase text-white sm:mb-10">
              We’ve Built Unparalleled Websites With Custom Functionality For
              Top Companies
            </h1>

            <GrayStar className="absolute xl:scale-[50%] xl:top-[58rem] xl:left-[3rem] 2xl:left-[7rem] 2xl:scale-[70%]" />
            <BallBlue className="absolute xl:left-[10rem] xl:top-[80rem] 2xl:left-[12rem] " />
            <CloudFull className="absolute scale-x-[-1] xl-h-[320px] xl:w-[320px] xl:top-[75rem] xl:right-[14rem] 2xl:right-[30rem] " />
            <Star className="absolute scale-x-[-1] h-[30px] w-[30px] xl:bottom-[22rem] xl:right-[28rem] 2xl:right-[45rem]" />
            <CloudFull className="absolute xl:right-0 xl:bottom-[2rem] xl:w-[550px] xl:h-[550px] 2xl:w-[650px] 2xl:h-[650px] 2xl:right-[6rem]" />

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
              className="absolute xl:-left-[4rem] xl:top-[72rem]"
            />
            <StarOutline className="absolute xl:scale-[60%] xl:left-[26rem] xl:top-[87rem] 2xl:top-[87rem] 2xl:left-[36rem]" />
          </section>

          <section className="py-20  ">
            <div className="services--cards--container flex flex-col">
              <h1 className="text-xl max-w-xl ml-2 font-semibold uppercase text-white sm:mb-10">
                More Seconds Website Design Services Include...
              </h1>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}
