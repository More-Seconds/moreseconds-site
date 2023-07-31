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
                      <div className="project-card rounded-[3rem] overflow-hidden">
                        <Project
                          className="w-[200px] h-[200px]"
                          image={ele.thumbnailImage.asset.url}
                          slug={`/portfolio/${ele.slug.current}`}
                          title={''}
                          showSeeMore={false}
                        />
                      </div>
                    </div>
                  </React.Fragment>
                )
              })}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default WebsiteDesign
