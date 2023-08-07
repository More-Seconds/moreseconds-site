import { Button } from 'components/Button'
import { BodyText } from 'components/typography/BodyText'
import { Heading } from 'components/typography/Heading'
import { SmallTitle } from 'components/typography/SmallTitle'
import { Layout } from 'containers/layout/Layout'
import { Planet } from 'public/svgs'
import { HeroCentered } from 'containers/shared/HeroCentered'
import React, { useEffect, useState } from 'react'
import sanityClient from '@sanity/client'
import { Project } from 'components/shared sections/Projects/Project'

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
    <section className="mt-[11rem] ml-7">
      <SmallTitle className="mx-auto text-left">Our Services</SmallTitle>
      <h1 className="max-w-4xl text-white font-semibold text-[42px] text-left mb-1">
        Website Design
      </h1>
      <div className="max-w-3xl">
        <BodyText className="text-leftsm:px-10 xl:text-lg max-w-2xl">
          Get a beautifully designed website that doesn't break the bank. We
          provide stunning design options to ensure each web project we deliver
          is an aesthetic masterpiece. Work with our expert design team to
          create a website that wows and start maximizing your conversion rate
          today.
        </BodyText>
        <Button
          href="#contact"
          className="block w-[50%] px-8 mt-10 mb-8 text-center"
        >
          Generate Time Cost Estimate
        </Button>
      </div>
    </section>
  )
}

export default WebsiteDesign
