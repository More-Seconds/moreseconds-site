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

const ClientWebsiteHelp = () => {
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
        <section className="mt-[11rem] xl:ml-[24rem] mb-[10rem] min-h-[400px]">
          <SmallTitle className="mx-auto text-left">Our Services</SmallTitle>
          <h1 className="max-w-4xl text-white font-semibold text-[42px] text-left mb-1">
            White Label Service
          </h1>
          <div className="max-w-3xl">
            <BodyText className="text-left xl:text-lg max-w-xl ">
              Are you leaving money on the table because you’ve had bad
              experiences with outsourced web developers and/or haven’t been
              able to successfully supplement your in-house team? Our team of
              U.S.-based developers trusted by top agencies are here to help you
              say, “Yes!” to all of your existing and prospective clients'
              website needs with confidence.
            </BodyText>
            <Button
              href="#contact"
              className="block w-[50%] px-8 mt-10 text-center"
            >
              Get Started
            </Button>
          </div>
        </section>

        <Smoke
          width="50%"
          height="50%"
          className="h-auto absolute scale-x-[-1] -left-12 top-[88rem] rotate-180 -scale-y-125 z-[999]"
        />

        <StarOutline className="absolute right-[58rem] top-[86rem] xl:scale-x-[60%] xl:scale-y-[60%]" />

        <section className="portfolio--section relative h-screen ml-[-20rem]">
          <CloudFull className="absolute xl:left-[-12rem] xl:top-[-20rem] xl:h-[500px] xl:w-[500px] scale-x-[-1]" />
          <Star className="absolute scale-x-[-1] h-[30px] w-[30px] xl:left-[12rem] xl:bottom-[50rem]" />
          <h1 className="text-xl max-w-xl ml-2 font-semibold uppercase text-white sm:mb-10">
            We Build Websites for Top Agencies
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
            More Seconds White Label Services Include…
          </h1>
          <div className="relative grid items-center justify-center w-full gap-3 px-4 mb-8 sm:grid-cols-4 sm:mt-4 sm:px-8 ">
            <Card className="bg-gradient-to-b from-[#b56628] via-[#74144e] to-[#0a0055] w-full h-full gap-2 py-10 sm:py-8 xl:gap-8">
              <Heading level="1" className="mx-auto font-bold xl:text-xl">
                Priced for Profitability
              </Heading>
              <BodyText className="text-xs xl:text-[16px] leading-6 font-normal">
                We offer our full suite of services at a rate far below most
                major agency pricing so you can expand your client offerings at
                your preferred rate, increase revenue, and effortlessly make a
                profit.
              </BodyText>
            </Card>

            <Card className="bg-gradient-to-b from-[#b56628] via-[#74144e] to-[#0a0055] w-full h-full gap-2 py-10 sm:py-8 xl:gap-8">
              <Heading level="1" className="mx-auto font-bold xl:text-xl">
                Trusted by Top Agencies
              </Heading>
              <BodyText className="text-xs xl:text-[16px] leading-6 font-normal">
                Leading marketing agencies trust More Seconds with their web
                development needs because we are a reliable, long-term
                development partner with the expertise to bring their projects
                to fruition on budget, on time, and with the highest degree of
                accuracy.
              </BodyText>
            </Card>

            <Card className="bg-gradient-to-b from-[#b56628] via-[#74144e] to-[#0a0055] w-full h-full gap-2 py-10 sm:py-8 xl:gap-8">
              <Heading level="1" className="mx-auto font-bold xl:text-xl">
                24/7 Emergency Fixes
              </Heading>
              <BodyText className="text-xs xl:text-[16px] leading-6 font-normal">
                Our expert team of U.S.-based developers are available around
                the clock to handle any after hours emergencies your clients may
                run into so their sites never go down.
              </BodyText>
            </Card>

            <Card className="bg-gradient-to-b from-[#b56628] via-[#74144e] to-[#0a0055] w-full h-full min-w-full gap-2 py-10 sm:py-8 xl:gap-8">
              <Heading level="1" className="mx-auto font-bold xl:text-xl">
                Lightning Fast Turnaround Times
              </Heading>
              <BodyText className="text-xs xl:text-[16px] leading-6 font-normal">
                We boast some of the fastest turnaround times in the industry.
                We’ll work with you and your clients to ensure that everything
                gets done on budget and on time.
              </BodyText>
            </Card>
          </div>
          <div className="flex justify-end px-4 sm:mt-4 sm:mb-48 sm:px-8">
            <p className="uppercase text-white text-2xl">...and more!</p>
          </div>
        </section>

        <section className="additional--info h-full">
          <ServicesAdditionalInfo
            title={'INCREASE YOUR REVENUE'}
            subTitle={'Make More Money With More Seconds'}
            content={
              'We know this can be a challenging time for agencies. We make it easy for agencies to make more money with More Seconds with multiple income streams that are a win-win for you and your clients. Offer the following services (and more!) to your clients at your preferred rate and More Seconds will handle everything else end-to-end while you generate profits for your agency.'
            }
            buttonText={'Get More Seconds'}
            buttonHref={'/contact'}
          />
        </section>

        <Testimonials title={'Grow Your Agency With More Seconds'} />
      </div>
    </>
  )
}

export default ClientWebsiteHelp
