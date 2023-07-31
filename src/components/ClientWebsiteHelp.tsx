import { Button } from 'components/Button'
import { BodyText } from 'components/typography/BodyText'
import { Heading } from 'components/typography/Heading'
import { SmallTitle } from 'components/typography/SmallTitle'
import { Planet } from 'public/svgs'
import { HeroCentered } from 'containers/shared/HeroCentered'
import sanityClient from '@sanity/client'
import { useEffect, useState } from 'react'
import React from 'react'
import { Project } from './shared sections/Projects/Project'

const client = sanityClient({
  projectId: '1l0nc7l2',
  dataset: 'production',
  useCdn: true // this enables CDN-based querying for faster results
})

const WebsiteDesign = () => {
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

    const slicedPosts = postResults.slice(0, 4)

    const sortedPosts = slicedPosts.sort((a: any, b: any) => {
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
    <div>
      <section className="pl-[12rem] mb-[20rem]">
        <HeroCentered className="py-2">
          <SmallTitle className="mx-auto text-center">Our Services</SmallTitle>
          <Heading level="1" className="max-w-4xl mx-auto text-center">
            White Label Service
          </Heading>
          <div className="max-w-3xl mx-auto">
            <BodyText className="px-5 mx-auto text-center sm:px-10 xl:text-lg">
              Are you leaving money on the table because you’ve had bad
              experiences with outsourced web developers and/or haven’t been
              able to successfully supplement your in-house team? Our team of
              U.S.-based developers trusted by top agencies are here to help you
              say, “Yes!” to all of your existing and prospective clients'
              website needs with confidence.
            </BodyText>
            <Button
              href="#contact"
              className="block max-w-[10rem] px-8 mx-auto mt-10 mb-8 text-center"
            >
              Get More Seconds
            </Button>
            <Planet className="absolute scale-50 -top-4 -right-8 xl:scale-75 xl:right-32" />
          </div>
        </HeroCentered>
      </section>

      <section className="mb-[20rem]">
        <div className="portfolio relative flex flex-col content-center self-center justify-start flex-nowrap justify-items-center justify-self-center md:px-16">
          <h1 className="text-lg uppercase text-white mb-6">
            We Build Websites for Top Agencies
          </h1>
          <ul className="grid self-start gap-8 mb-20 grid-cols-1 md:grid-cols-2 max-w-7xl">
            {posts &&
              posts.length > 0 &&
              posts.map((ele: any) => {
                return (
                  <React.Fragment key={ele.title}>
                    <div className="project-card-container relative">
                      <div className="project-card relative rounded-[3rem] overflow-hidden shadow-2xl">
                        <Project
                          className="w-[200px] h-[200px]"
                          image={ele.thumbnailImage.asset.url}
                          slug={`/portfolio/${ele.slug.current}`}
                          title={''}
                          showSeeMore={false}
                        />

                        {/* Overlay */}
                        <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-10"></div>

                        <div className="absolute bottom-2 w-full text-left text-white text-xs font-bold  p-4 ml-3">
                          {ele.title}
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                )
              })}
          </ul>
        </div>
      </section>

      <section className="mb-20 px-4 md:px-0 pb-[20rem]">
        <div className="relative flex flex-col content-center self-center justify-start flex-nowrap justify-items-center justify-self-center md:px-[10rem]">
          <h1 className="text-xl md:text-2xl font-semibold uppercase text-white mb-6">
            More Seconds White Label Services Include…
          </h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="bg-gradient-to-b from-[#b56628] via-[#74144e] to-[#0a0055] flex flex-col items-center rounded-xl text-white p-8 md:h-100 md:w-64">
              <h1 className="font-semibold text-xl text-center mb-3">
                Priced for Profitability
              </h1>
              <p className="text-center text-md font-light">
                We offer our full suite of services at a rate far below most
                major agency pricing so you can expand your client offerings at
                your preferred rate, increase revenue, and effortlessly make a
                profit.
              </p>
            </div>

            <div className="bg-gradient-to-b from-[#b56628] via-[#74144e] to-[#0a0055] flex flex-col items-center rounded-xl text-white p-8 h-100 md:w-64">
              <h1 className="font-semibold text-xl text-center mb-3">
                Trusted by Top Agencies
              </h1>
              <p className="text-center text-md font-light">
                Leading marketing agencies trust More Seconds with their web
                development needs because we are a reliable, long-term
                development partner with the expertise to bring their projects
                to fruition on budget, on time, and with the highest degree of
                accuracy.
              </p>
            </div>

            <div className="bg-gradient-to-b from-[#b56628] via-[#74144e] to-[#0a0055] flex flex-col items-center rounded-xl text-white p-8 h-100 md:w-64">
              <h1 className="font-semibold text-xl text-center mb-3">
                24/7 Emergency Fixes
              </h1>
              <p className="text-center text-md font-light">
                Our expert team of U.S.-based developers are available around
                the clock to handle any after hours emergencies your clients may
                run into so their sites never go down.
              </p>
            </div>

            <div className="bg-gradient-to-b from-[#b56628] via-[#74144e] to-[#0a0055] flex flex-col items-center rounded-xl text-white p-8 h-100 md:w-64">
              <h1 className="font-semibold text-xl text-center mb-3">
                Lightning Fast Turnaround Times
              </h1>
              <p className="text-center text-md font-light">
                We boast some of the fastest turnaround times in the industry.
                We’ll work with you and your clients to ensure that everything
                gets done on budget and on time.
              </p>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <h1 className="text-white font-bold uppercase text-2xl md:text-3xl mt-10">
              ...And More!
            </h1>
          </div>
        </div>
      </section>

      <section></section>
    </div>
  )
}

export default WebsiteDesign
