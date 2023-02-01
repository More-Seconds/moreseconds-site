import {
  PageBuilding,
  PageDesign,
  WebCare,
  FeatureFunction,
  AuditReport
} from 'public/images'
import { Heading } from '../../typography/Heading'
import { Project } from './Project'
import { SmallTitle } from '../../typography/SmallTitle'
import { BallPurple } from 'public/svgs'
import { BodyText } from 'components/typography/BodyText'
import { Button } from 'components/Button'

import React, { useEffect, useState } from 'react'
import { PortableText } from '@portabletext/react'

import sanityClient from '@sanity/client'
import { array } from 'yup/lib/locale'

const client = sanityClient({
  projectId: '1l0nc7l2',
  dataset: 'production',
  useCdn: true // this enables CDN-based querying for faster results
})
// let postsArchive;
export function Projects() {
  
  const [posts, setPosts] = useState<any>([])
  const [postsArchive, setPostsArchive] = useState<any>([])
  const [featured, setFeatured] = useState<any>([])
  const [loading, setLoading] = useState(true)
  // const [activeFilter, setActiveFilter] = useState('63101181-a594-46fb-839b-f03171dc65f0')
  const [listOfFilters, setListOfFilters] = useState<any>([]);
  const [visibility, setVisibility] = useState('hidden');


  async function fetchCategory() {
    const results = await client.fetch(
      `*[_type == 'category'] {
        _id,
        title
      }`
    )

    setListOfFilters(results);
  }

  async function fetchFeatured() {
    setLoading(true)
    // fetch for the list of posts
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
    // fetch for the data of each post within the list (arrayOfIDs) .
    const postResults = await client.fetch(`*[_id in ${JSON.stringify(
      arrayOfIDs
    )}] {
        _id,
        heroImage {
          asset -> {url}
        },
        title,
        category
        
      } `)

    // sort the data
    const sortedPosts = postResults.sort((a: any, b: any) => {
      return arrayOfIDs.indexOf(a._id) - arrayOfIDs.indexOf(b._id)
    })
    console.log(sortedPosts)

    // set the state with the sorted data
    setPosts(sortedPosts)
    // postsArchive = posts;
    setPostsArchive(sortedPosts);
    setLoading(false)
  }

  function filter(e) {
    // e.preventDefault();
    console.log(postsArchive);
    console.log(e.target.id);
    if(e.target.id == 'default-filter') {
      setPosts(postsArchive);
    } else {
      setPosts(postsArchive.filter(post => post.category.some(c => c._ref === e.target.id)))
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
    <section className="relative flex flex-col content-center self-center justify-center px-8 mb-20 md:my-32 flex-nowrap justify-items-center justify-self-center md:px-16">
      <Heading level="1" className="self-center w-full mb-10 max-w-7xl ">
        I want to see 

        <span onMouseEnter={e => {setVisibility('block')}} onMouseLeave={e => {setVisibility('hidden')}} className="z-10 h-full ml-4 hover:cursor-pointer">
           All Capabilities
          <div id="spacer " className="h-8"></div>
          <div className={'px-8 py-4 rounded-xl grid grid-cols-3 gap-8 hover:cursor-default bg-white ' + visibility}>
            {/* {console.log(posts)} */}
            <button className="py-2 text-3xl text-black hover:bg-blue-100 w-min-content rounded-xl" id='default-filter' onClick={filter}>All Capabilities</button>
            {listOfFilters &&

              listOfFilters.map((ele:any) => {
                return <button className="py-2 text-3xl text-black hover:bg-blue-100 w-min-content rounded-xl " id={ele._id} onClick={filter}>{ele.title}</button>
              })
            }
          </div>
        </span>
      </Heading>
      



      <ul className="grid self-center gap-8 mb-20 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 auto-rows-[400px] max-w-7xl">
        {/* {console.log(posts)} */}
        {posts &&
          posts.length > 0 &&
          posts.map((ele: any) => {
            // console.log(ele.heroImage.asset.url)
            return (
              <React.Fragment key={ele.title}>
                <Project
                  title={ele.title}
                  className=""
                  image={ele.heroImage.asset.url}
                  slug={`/portfolio/${ele._id}`}
                />
              </React.Fragment>
            )
          })}
      </ul>

      <BallPurple className="absolute top-0 scale-50 right-20" />
    </section>
  )
}
