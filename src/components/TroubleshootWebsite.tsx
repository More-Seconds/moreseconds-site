import { Button } from 'components/Button'
import { BodyText } from 'components/typography/BodyText'
import { SmallTitle } from 'components/typography/SmallTitle'
import React, { useEffect, useState } from 'react'
import sanityClient from '@sanity/client'
import { Project } from 'components/shared sections/Projects/Project'

const client = sanityClient({
  projectId: '1l0nc7l2',
  dataset: 'production',
  useCdn: true // this enables CDN-based querying for faster results
})

const TroubleshootWebsite = () => {
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
    <div className="flex flex-col items-start">
      <section className="mt-[11rem] ml-7">
        <SmallTitle className="mx-auto text-left">Our Services</SmallTitle>
        <h1 className="max-w-4xl text-white font-semibold text-[42px] text-left mb-1">
          Website Maintenance
        </h1>
        <div className="max-w-3xl xl:min-h-[260px]">
          <BodyText className="text-left xl:text-lg max-w-2xl">
            Never worry about your website going down again! Take full advantage
            of our troubleshooting and maintenance expertise. We’ll take a look
            at your overall website performance issues, server configurations,
            and site architecture as well as help plan all new functionality or
            design needs to keep your site in tip-top shape. You’ll be armed
            with a versatile Swiss-Army knife of web development, design, and
            optimization tools, so your website is nothing short of perfection.
          </BodyText>
          <Button
            href="#contact"
            className="block w-[50%] px-8 mt-10 mb-8 text-center"
          >
            View Maintenance Package Options
          </Button>
        </div>
      </section>

      <section className="portfolio--section sm:pt-[12rem] ml-[-24rem]">
        <div className="sm:translate-y-0">
          <h1 className="text-xl font-semibold uppercase mt-[-52px] max-w-xl text-white sm:mb-10">
            We Troubleshoot and Maintain The Websites of Industry Leaders, So
            They Never Miss A Beat
          </h1>
        </div>
        <ul className="grid self-start gap-14 mb-20 grid-cols-1 md:grid-cols-2 max-w-7xl">
          {visiblePosts &&
            visiblePosts.length > 0 &&
            visiblePosts.map((ele: any) => {
              return (
                <React.Fragment key={ele.title}>
                  <div className="project-card-container relative">
                    <div className="project-card rounded-[3rem]">
                      <Project
                        className="w-[250px] h-[250px] relative rounded-[3rem] opacity-90 "
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
      </section>
    </div>
  )
}

export default TroubleshootWebsite
