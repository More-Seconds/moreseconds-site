import { Button } from 'components/Button'
import { BodyText } from 'components/typography/BodyText'
import { SmallTitle } from 'components/typography/SmallTitle'
import React, { useEffect, useState } from 'react'
import sanityClient from '@sanity/client'
import { Project } from 'components/shared sections/Projects/Project'
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

const client = sanityClient({
  projectId: '1l0nc7l2',
  dataset: 'production',
  useCdn: true // this enables CDN-based querying for faster results
})

const WebsiteDevelopment = () => {
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
    <>
      <div className="flex flex-col items-center">
        <section className="mt-[11rem] xl:ml-[20rem] mb-[10rem] min-h-[400px]">
          <SmallTitle className="mx-auto text-left">Our Services</SmallTitle>
          <h1 className="max-w-4xl text-white font-semibold text-[42px] text-left mb-1">
            Website Builds
          </h1>
          <div className="max-w-3xl">
            <BodyText className="text-left xl:text-lg max-w-xl ">
              We build breathtaking websites in record time. From small, simple
              sites to massive, multiple page builds, we utilize the latest
              technologies and platforms to deliver captivating user experiences
              and web interfaces. Our team of top U.S.-based developers write
              high level, production ready code designed to optimize your
              website and deliver everything you’re looking for, from
              butter-smooth performance to complex custom functionality.
              Experience the benefits of having your own in-house digital team
              without actually hiring one full-time.
            </BodyText>
            <Button href="/" className="block w-[50%] px-8 mt-10 text-center">
              Generate Time / Cost Estimate
            </Button>
          </div>
        </section>

        <section className="portfolio--section relative h-screen ml-[-20rem]">
          <CloudFull className="absolute xl:left-[-12rem] xl:top-[-20rem] xl:h-[500px] xl:w-[500px] scale-x-[-1]" />
          <Star className="absolute scale-x-[-1] h-[30px] w-[30px] xl:left-[12rem] xl:bottom-[50rem]" />
          <h1 className="text-xl max-w-xl ml-2 font-semibold uppercase text-white sm:mb-10">
            We’ve Built Unparalleled Websites With Custom Functionality For Top
            Companies
          </h1>
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
          <GrayStar className="absolute xl:-top-[-12rem]  xl:left-[-10rem] xl:scale-x-[60%] xl:scale-y-[60%]" />
          <BallBlue className="absolute  xl:bottom-[14rem] xl:left-[-5rem] xl:scale-x-[110%] xl:scale-y-[110%]" />
          <BallPurple className="absolute xl:top-[-10rem] xl:left-[60rem] sm:scale-[250%]" />
          <ManArtist className="absolute xl:scale-x-[75%] xl:scale-y-[75%] xl:top-[-16rem] xl:-right-[45rem]" />
          <CloudFull className="absolute top-[22rem] right-[-16rem] h-[200px] w-[200px]" />
          <Star className="absolute scale-x-[-1] h-[25px] w-[25px] xl:top-[32rem] xl:left-[44rem]" />
          <CloudFull className="absolute xl:right-[-32rem] xl:bottom-[-7rem] h-[450px] w-[450px]" />
        </section>

        <section className="service--cards container xl:px-[5rem] pt-28">
          <h1 className="text-white text-2xl font-semibold uppercase mx-8 mb-10">
            More Seconds Website Design Development Include…
          </h1>
          <div className="relative grid items-center justify-center w-full grid-flow-row gap-3 px-4 mb-4 sm:grid-cols-4 sm:mt-4 sm:mb-48 sm:px-8 ">
            <Card className="bg-gradient-to-b from-[#b56628] via-[#74144e] to-[#0a0055] w-full h-full gap-2 py-10 sm:py-8 xl:gap-8">
              <Heading level="1" className="mx-auto font-bold xl:text-xl">
                Full-cycle Website Design & Development
              </Heading>
              <BodyText className="text-xs xl:text-[16px] leading-6 font-normal">
                We provide full-cycle development services from market research
                and business analysis to design, development, and launch. We’ll
                handle every step of the process and deliver the website of your
                dreams.
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
                No matter what you need your site to do, we’ll get it configured
                with all of the necessary plugins and integrations to do exactly
                what you desire.
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
        </section>

        <section className="additional--info h-full mt-24">
          <ServicesAdditionalInfo
            title={'DEVELOPMENT THAT DELIGHTS'}
            subTitle={
              'Have An Exciting Vision For Your Website? More Seconds Has The Tech Talent To Bring It To Life.'
            }
            content={
              'Your website is essential to the success of your business. We understand the importance of every element – design, development, speed, security, performance, functionality, hosting, and maintenance. Modernizing your web presence boosts sales, supports marketing campaigns, increases customer acquisition, and more. We provide innovative, custom web development solutions so your website stays ahead of the competition.'
            }
            buttonText={'Get More Seconds'}
            buttonHref={'/contact'}
          />
        </section>

        <Testimonials title={'Websites That Wow'} />
      </div>
    </>
  )
}

export default WebsiteDevelopment
