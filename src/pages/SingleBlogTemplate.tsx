import { Clients } from '../components/shared sections/Clients'
import { Layout } from '../containers/layout/Layout'
import { Hero } from 'containers/shared/Hero'
import { Team } from 'components/shared sections/Team'
import { MDash } from 'components/shared sections/MDash'
import { SectionBlur } from 'components/SectionBlur'
import { Partners } from 'components/shared sections/Partners'
import { Services } from 'components/shared sections/Services'
import { BlogPreviews } from 'components/shared sections/BlogPreviews'

import { Heading } from 'components/typography/Heading'
import { BodyText } from 'components/typography/BodyText'
import { SmallTitle } from '../components/typography/SmallTitle'
import { HomeHeroBG, NoMaintenance } from 'public/svgs'
import { Testimonials } from 'components/shared sections/Testimonials'
import { CenteredCTA } from 'components/shared sections/CenteredCta'
import { Signup } from 'components/forms/Signup'

import React, { useEffect, useState } from 'react'
import {PortableText} from '@portabletext/react'

import sanityClient from '@sanity/client'

// interface childrenObject {
//   mark: any[],
//   text: string,
//   _key: string,
//   _type: string
// }

const client = sanityClient({
  projectId: '1l0nc7l2',
  dataset: 'production',
  useCdn: true // this enables CDN-based querying for faster results
})


export function SingleBlogTemplate({id} : any) {

  
  
  const [posts, setPosts] = useState<any>([]);
//
  useEffect(() => {
    // client.fetch(`
    // *[_type == 'post'] [2...3]{
    //   title,
    //   body,
    //   mainImage {
    //     asset->{url}
    //   }
    // }`)
    // .then(results => {
    //   setPosts(results);
    //   console.log(results)
    // })

    client.fetch(`
    *[_id == '${id}'] {
      title,
      body,
      mainImage {
        asset->{url}
      }
    }`)
    .then(results => {
      setPosts(results);
      console.log(results)
    })
  }, [])

  // `components` object you'll pass to PortableText
const components = {
  block: {
    // Ex. 1: customizing common block types
    // h1: ({children}:any) => console.log("asdasd"),
    h1: ({children}:any) => <Heading level="1" className="text-2xl text-white">{children}</Heading>,
    h2: ({children}:any) => <Heading level="2" className="text-2xl text-white">{children}</Heading>,
    h3: ({children}:any) => <Heading level="3" className="text-2xl text-white">{children}</Heading>,
    h4: ({children}:any) => <Heading level="4" className="text-2xl text-white">{children}</Heading>,
    blockquote: ({children}:any) => <blockquote className="pl-4 text-white border-l-2 border-l-purple-500">{children}</blockquote>,
    normal: ({children}:any) => <BodyText className="leading-normal text-white ">{children}</BodyText>,
    
//
    // Ex. 2: rendering custom styles
    // customHeading: ({children}) => (
    //   <h2 className="text-lg text-purple-700 text-primary">{children}</h2>
    // ),
  },
  list: {
    bullet: ({children}:any) => <ul className="text-white">{children}</ul>,
    number: ({children}:any) => <ol className="text-white">{children}</ol>
  },
  listItem: {
    bullet: ({children}:any) => <li className="text-white">{children}</li>
  }
}
  return (
    
    <Layout footerVariant="delivers">
      <div className="px-20 my-20">
          {posts.map((ele:any) => {
            return <>

              <div className="flex flex-row content-center justify-center">
                <div className="w-full max-w-7xl">

                  {/* POST TITLE AND IMAGE */}
                  <Heading level="1" className="mb-10">{ele.title}</Heading>
                  <img src={(ele.mainImage == null) ? 'https://via.placeholder.com/150' : ele.mainImage.asset.url} className="object-cover	w-full max-h-[400px] h-max mb-10 rounded-lg "></img>

                  {/* POST META DATA */}
                  <div className="flex flex-row content-center justify-start mb-10">
                    <div className="">
                      <img className="w-12 h-12 rounded-lg lg:w-14 lg:h-14" src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" alt="" />
                    </div>
                    
                    <div className ="flex flex-col content-center justify-center pr-4 ml-4 lg:pr-8">
                      <BodyText className="text-sm">[AUTHOR NAME]</BodyText>
                      <BodyText className="text-sm">[AUTHOR POSITION/TITLE]</BodyText>
                    </div>

                    <div className ="flex flex-col content-center justify-center pl-4 lg:pl-8 border-l-[1px] border-white border-solid ">
                      <BodyText className="text-sm">Published</BodyText>
                      <BodyText className="text-sm">[DATE PUBLISHED]</BodyText>
                    </div>
                  </div>


                  
                  <div className="flex flex-col content-center justify-between lg:flex-row">

                    <div className="min-w-[200px]">
                      <BodyText className="pb-2">SHARE THE ARTICLE</BodyText>
                      <ul className="flex flex-row pb-4 gap-x-3">
                        <li>
                          <img className="w-8 h-8 rounded-full" src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" alt="" />
                        </li>

                        <li>
                          <img className="w-8 h-8 rounded-full" src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" alt="" />
                        </li>

                        <li>
                          <img className="w-8 h-8 rounded-full" src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" alt="" />
                        </li>

                        <li>
                          <img className="w-8 h-8 rounded-full" src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" alt="" />
                        </li>
                      </ul>

                    </div>
                    
                    {/* POST BODY TEXT */}
                    <div className="grid w-full max-w-5xl grid-cols-1 auto-rows-min gap-y-5">
                      <PortableText
                        value={ele.body}
                        components = {components}
                      />
                    </div>
                  </div>

                </div>
              </div>

              
            </>

            
          })}
      </div>

      <BlogPreviews/>

    </Layout>
  )
}
