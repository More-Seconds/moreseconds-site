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
import { Card } from 'components/Card'
import { Signup } from 'components/forms/Signup'
import { Testimonials } from 'components/shared sections/Testimonials'
import { Partners } from 'components/shared sections/Partners'
import { Button } from 'components/Button'

const client = sanityClient({
  projectId: '1l0nc7l2',
  dataset: 'production',
  useCdn: true // this enables CDN-based querying for faster results
})

export function Services() {
  const [selectedMenuItem, setSelectedMenuItem] = useState('Website Design')
  const [serviceTitle, setServiceTitle] = useState('Priced for Profitability')
  const [serviceBody, setServiceBody] = useState(
    'We offer our full suite of services at a rate far below most major agency pricing so you can expand your client offerings at your preferred rate, increase revenue, and effortlessly make a profit.'
  )

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

  return (
    <Layout footerVariant="">
      <div className="relative">
        <Smoke
          width="80%"
          height="50%"
          className="h-auto absolute top-[4rem] right-[1rem] scale-x-125 rotate-180 -scale-y-125 z-100"
        />
        <section className="flex flex-col items-center justify-center ">
          <div className="flex justify-center">
            <div className="z-30">
              <ServicesMenu handleMenuItemClicked={handleMenuItemClick} />
              <CloudFull className="absolute left-[4rem] mt-10 scale-x-[-1] xl:-scale-x-[140%] xl:scale-y-[140%]" />
              <Star className="absolute ml-[14rem] mt-2 xl:-scale-x-50 xl:scale-y-50" />
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

        <section className="relative items-center block sm:pt-[10rem] sm:px-[8rem]">
          <BallBlue className="absolute -top-[14rem] xl:scale-x-[110%] xl:scale-y-[110%]" />
          <BallPurple className="absolute -top-[50rem] right-[8rem] sm:scale-[250%]" />
          <GrayStar className="absolute xl:-top-[34rem] mml-10 xl:scale-x-[60%] xl:scale-y-[60%]" />
          <div className="flex items-center -translate-y-16 w-screen h-96 relative -right-20 justify-self-start sm:absolute sm:top-28 sm:-right-2 sm:w-[378px] xl:translate-y-64">
            <ManArtist className="absolute bottom-[55rem] -right-[4rem] h-full sm:scale-150 xl:scale-x-[200%] xl:scale-y-[200%]" />
            <CloudFull className="absolute scale-x-[-1] -top-[34rem] right-[20rem] h-[300px] w-[300px]" />
            <CloudFull className="absolute bottom-[40rem]" />
          </div>
        </section>

        <Smoke
          width="40%"
          height="40%"
          className="h-auto absolute -left-[2rem] top-[89rem] scale-x-[-1] rotate-180 -scale-y-125 z-100"
        />
        <StarOutline className="absolute right-[60rem] top-[84rem] xl:scale-x-[60%] xl:scale-y-[60%]" />

        <section className="services--cards px-[3rem]">
          <h1 className="sm:text-2xl text-white font-semibold mb-10 px-[8rem] xl:text-3xl">
            More Seconds White Label Services Include…
          </h1>
          <div className="relative grid items-center justify-center w-full grid-flow-row gap-3 px-4 sm:grid-cols-4 sm:mb-8 sm:px-8 xl:px-32">
            <Card className="bg-gradient-to-b from-[#b56628] via-[#74144e] to-[#0a0055] w-full h-full gap-2 pt-10 sm:py-8 xl:gap-8">
              <Heading
                level="1"
                className="mx-auto text-lg sm:text-base xl:text-2xl"
              >
                {serviceTitle}
              </Heading>
              <BodyText className="text-md font-light ">{serviceBody}</BodyText>
            </Card>
            <Card className="bg-gradient-to-b from-[#b56628] via-[#74144e] to-[#0a0055] w-full h-full gap-2 pt-10 sm:py-8 xl:gap-8">
              <Heading
                level="1"
                className="mx-auto text-lg sm:text-base xl:text-2xl"
              >
                Trusted by Top Agencies
              </Heading>
              <BodyText className="text-md font-light">
                Leading marketing agencies trust More Seconds with their web
                development needs because we are a reliable, long-term
                development partner with the expertise to bring their projects
                to fruition on budget, on time, and with the highest degree of
                accuracy.
              </BodyText>
            </Card>
            <Card className="bg-gradient-to-b from-[#b56628] via-[#74144e] to-[#0a0055] w-full h-full gap-2 pt-10 sm:py-8 sm:gap-4 xl:gap-8">
              <Heading
                level="1"
                className="mx-auto text-lg sm:text-base xl:text-2xl"
              >
                24/7 Emergency Fixes
              </Heading>
              <BodyText className="text-md font-light">
                Our expert team of U.S.-based developers are available around
                the clock to handle any after hours emergencies your clients may
                run into so their sites never go down.
              </BodyText>
            </Card>
            <Card className="bg-gradient-to-b from-[#b56628] via-[#74144e] to-[#0a0055] w-full h-full gap-2 pt-10 sm:py-8 sm:gap-4 xl:gap-9">
              <Heading
                level="1"
                className="mx-auto text-lg sm:text-sm xl:text-2xl"
              >
                Lightning Fast Turnaround Times
              </Heading>
              <BodyText className="text-md font-light">
                We boast some of the fastest turnaround times in the industry.
                We’ll work with you and your clients to ensure that everything
                gets done on budget and on time.
              </BodyText>
            </Card>
          </div>
          <div className="uppercase text-white sm:text-2xl font-semibold px-[8rem] flex justify-end">
            ...And More!
          </div>
        </section>

        <section className="py-[4rem]">
          <div>
            <Smoke className="absolute left-1  w-[100vw]" />
            <div className="flex items-center justify-center md:mx-4 md:flex-row md:mr-8">
              <div className="z-20 md:w-1/2">
                <Satellite className="md:w-1/2 z-20 xl:w-[50%] sm:-translate-x-14 h-auto xl:translate-x-14" />
              </div>
              <div className="z-20 sm:px-[25px] sm:mt-[3rem] sm:text-center md:text-left md:pl-0 md:pr-[64px]">
                <SmallTitle className="mx-auto text-left">
                  Increase Your Revenue
                </SmallTitle>
                <Heading
                  level="2"
                  className="text-3xl text-center sm:max-w-2xl sm:my-0 sm:text-center md:mb-3 md:text-left md:text-[1.75rem] lg:text-[2.5rem] lg:leading-[1] xl:max-w-2xl xl:text-5xl xl:mt-12"
                >
                  Make More Money With More Seconds
                </Heading>
                <BodyText className="text-leftsm:px-10 xl:text-lg max-w-2xl">
                  We know this can be a challenging time for agencies. We make
                  it easy for agencies to make more money with More Seconds with
                  multiple income streams that are a win-win for you and your
                  clients. Offer the following services (and more!) to your
                  clients at your preferred rate and More Seconds will handle
                  everything else end-to-end while you generate profits for your
                  agency.
                </BodyText>
                <Button
                  href="#contact"
                  className="block w-[50%] px-8 mt-10 mb-8 text-center"
                >
                  Get More Seconds
                </Button>
              </div>
            </div>
            {/* <div className="max-w-3xl">
              <BodyText className="text-leftsm:px-10 xl:text-lg max-w-2xl">
                Are you leaving money on the table because you’ve had bad
                experiences with outsourced web developers and/or haven’t been
                able to successfully supplement your in-house team? Our team of
                U.S.-based developers trusted by top agencies are here to help
                you say, “Yes!” to all of your existing and prospective clients'
                website needs with confidence.
              </BodyText>
              <Button
                href="#contact"
                className="block w-[50%] px-8 mt-10 mb-8 text-center"
              >
                Get More Seconds
              </Button>
            </div> */}
          </div>
        </section>

        <Testimonials title="Good design" />
      </div>
    </Layout>
  )
}
