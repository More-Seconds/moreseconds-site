import { Clients } from '../components/shared sections/Clients'
import { Layout } from '../containers/layout/Layout'
import { Hero } from 'containers/shared/Hero'
import { Team } from 'components/shared sections/Team'
import { MDash } from 'components/shared sections/MDash'
import { SectionBlur } from 'components/SectionBlur'
import { Partners } from 'components/shared sections/Partners'
import { Services } from 'components/shared sections/Services'
import { BlogPreviews } from 'components/shared sections/BlogPreviews'
import { Link } from 'react-router-dom'
import { Heading } from 'components/typography/Heading'
import { BodyText } from 'components/typography/BodyText'
import { SmallTitle } from '../components/typography/SmallTitle'
import { HomeHeroBG, NoMaintenance, Share } from 'public/svgs'
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
  const [publishedDate, setPublishedDate] = useState<any>();

  useEffect(() => {


    client.fetch(`
    *[_type == 'post' && slug.current  == '${id}'] {
      title,
      body,
      publishedAt,
      mainImage {
        asset->{url}
      },
      author ->{
        name,
        position,
        image {
          asset-> {
            url
          }
        }
      }
    }`)
    .then(results => {
      setPosts(results);
      console.log(results)
      // console.log(results[0].publishedAt)
      // setPublishedDate(new Date(results[0].publishedAt))
      // console.log
    })
  }, [])

  // `components` object you'll pass to PortableText
const components = {
  block: {
    // Ex. 1: customizing common block types
    // h1: ({children}:any) => console.log("asdasd"),
    h1: ({children}:any) => <Heading level="1" className="text-2xl text-[#FF7F00]">{children}</Heading>,
    h2: ({children}:any) => <Heading level="2" className="text-2xl text-[#FF7F00]">{children}</Heading>,
    h3: ({children}:any) => <Heading level="3" className="text-2xl text-[#FF7F00]">{children}</Heading>,
    h4: ({children}:any) => <Heading level="4" className="text-2xl text-[#FF7F00]">{children}</Heading>,
    blockquote: ({children}:any) => <blockquote className="pl-4 text-white border-l-2 border-l-purple-500">{children}</blockquote>,
    normal: ({children}:any) => <BodyText className="leading-normal text-white ">{children}</BodyText>,
    

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
      <div className="px-8 my-4 lg:px-20 lg:my-20">
            
        
          {posts.map((ele:any) => {
            console.log(ele)
            return <>

            {console.log(ele.author)}
              <div className="flex flex-row content-center justify-center">
                <div className="w-full max-w-7xl">
                <BodyText className="my-8 text-left max-w-7xl" >
                  <Link to="/blogs" className="w-full my-8 text-left text-white">← Back</Link>
                </BodyText>

                  {/* POST TITLE AND IMAGE */}
                  <Heading level="1" className="mb-10 text-[#FF7F00]">{ele.title}</Heading>
                  <img src={(ele.mainImage == null) ? 'https://via.placeholder.com/150' : ele.mainImage.asset.url} className="object-cover	w-full max-h-[400px] h-max mb-10 rounded-lg "></img>

                  {/* POST META DATA */}
                  <div className="flex flex-row content-center justify-start mb-10">
                    <div className="">
                      <img className="object-cover w-12 h-12 rounded-lg lg:w-14 lg:h-14" src={ele.author?.image.asset.url} alt="" />
                    </div>

                    <div className ="flex flex-col content-center justify-center pr-4 ml-4 lg:pr-8">
                      <BodyText className="text-sm">{ele.author?.name}</BodyText>
                      <BodyText className="text-sm">{ele.author?.position}</BodyText>
                    </div>

                    <div className ="flex flex-col content-center justify-center pl-4 lg:pl-8 border-l-[1px] border-white border-solid ">
                      <BodyText className="text-sm">Published</BodyText>
                      <BodyText className="text-sm">
                        {ele.publishedAt?.substr(0,10)}
                      </BodyText>
                    </div>
                  </div>


                  
                  <div className="relative flex flex-col content-center justify-between lg:flex-row">

                    <div className="min-w-[200px] h-16 sticky top-10 z-50">
                      <BodyText className="pb-2">SHARE THE ARTICLE</BodyText>
                      <ul className="flex flex-row pb-4 gap-x-3">
                        
                        <li>
                          <a className="cursor-pointer" data-target="#" onClick={() => {
                              navigator.clipboard.writeText(window.location.href);
                              document.getElementById('copied--alert')?.classList.remove('hidden')
                            }
                              
                            }>
                              <Share className="w-8 h-8 fill-white"/>
                            {/* <img className="w-8 h-8 rounded-full" src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" alt="" /> */}
                          </a>
                          
                        </li>
                        
                      </ul>
                      <div id="copied--alert" className="hidden text-white font-Poppins">Link has been copied to clipboard!</div>

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
