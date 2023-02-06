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


export function SinglePortfolioTemplate({id} : any) {

  // function fetchData() {
  //   return client.fetch(`* [_id == '${id}'] {
  //     title,
  //     body[] {...,
  //       nameOfSection,
  //       sectionType,
  //       body[] {...,
  //         text
  //       },
  //       image {...
  //       }
  //     }
  //   }`);
  // }

  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {


    client.fetch(`
    *[_id == '${id}'] {
        title,
        body[]{
          ...,
          nameOfSection,
          sectionType,
          body[]{
              ...,
              text
          },
          image{
              asset->{url}
          },
          imageSection[]{
            asset-> {url}
          },
          fullWidthImage {
            asset-> {url}
          }
          

        },

        heroImage {
          asset-> {url}
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
          <div className="flex flex-col items-center content-center justify-center">

          {
              posts[0] && <img src={posts[0].heroImage.asset.url} className="rounded-lg" alt="" /> 
          }
            <div className="w-full max-w-7xl">
              
              {
                // console.log(posts)
                posts[0]?.body && posts[0].body.map((ele:any) => {
                    // switch(ele.sectionType) {
                    //     case 'project-summary':
                    //       return <div className="grid items-center content-center grid-cols-2 py-4 justify-items-center project-summary"> <div><BodyText className="py-8 text-lg leading-normal text-white">PROJECT SUMMARY</BodyText><Heading level="1" className="text-2xl text-white">{ele.projectSummaryHeading}</Heading><BodyText className="py-8 text-2xl leading-normal text-white">{ele.projectSummaryDescription}</BodyText></div> <img src={ele.image.asset.url}/></div>
                    //       break;

                    //     default:
                    //       return <div className="py-4 default"> <PortableText value={ele.body} components = {components}/> </div>
                    //   }
                    
                    if (ele.sectionType == 'project-summary') {
                      return <>
                        <div className="flex flex-col-reverse items-center content-center justify-between my-20 lg:flex-row justify-items-center project-summary"> 
                          <div className="pr-8">
                            <div className="mb-20 project-info">
                              <BodyText className="py-8 text-lg leading-normal text-white">PROJECT SUMMARY</BodyText>
                              <Heading level="1" className="text-2xl text-white">{ele.projectSummaryHeading}</Heading>
                              <BodyText className="py-8 text-2xl leading-normal text-white">{ele.projectSummaryDescription}</BodyText>
                            </div>
                            <div className="flex year-industry gap-7">
                              <div className="project-year">
                                <BodyText className="py-4 text-lg leading-normal text-white">Year</BodyText>
                                <Heading level="2" className="text-2xl text-white">{ele.projectYear}</Heading>
                              </div>
                              <div className="project-industry">
                                <BodyText className="py-4 text-lg leading-normal text-white">Industry</BodyText>
                                <Heading level="2" className="text-2xl text-white">{ele.projectIndustry}</Heading>
                              </div>
                            </div>
                          </div>
                          <img className="object-cover w-[450px] lg:h-[450px] rounded-lg justify-self-end	" src={ele.image && ele.image.asset.url}/>


                        </div>
                      </>
                    } else if (ele.sectionType == 'centered-text') {
                      return <>
                        <div className="flex content-center justify-center my-8 flex-column">
                          <BodyText className="max-w-5xl py-8 text-3xl leading-normal text-center text-white">{ele.centeredText}</BodyText>
                        </div>
                      
                      </>
                    } else if (ele.sectionType == 'image-section') {

                      let classesOfParent = "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 py-8 gap-8 auto-rows-[minmax(400px,400px)]"
                      let classesOfImg = "object-cover w-full max-h-[400px] h-[400px] rounded-lg";

                      console.log(ele.imageSection.length % 3)

                      if(ele.imageSection.length == 1 ){
                        classesOfParent = "grid grid-cols-1 py-8 gap-8 auto-rows-[minmax(400px,400px)]"
                        classesOfImg = "object-cover w-full max-h-[400px] h-[400px] rounded-lg";

                      } else if(ele.imageSection.length == 2) {
                        classesOfParent = "grid grid-cols-1 lg:grid-cols-2 py-8 gap-8 auto-rows-[minmax(400px,400px)]"
                        classesOfImg = "object-cover w-full max-h-[400px] h-[400px] rounded-lg";
                      }
                      



                      console.log(ele.imageSection.length)
                      return <div className={classesOfParent}>
                        {ele.imageSection.map((e:any) => {
                          return <div className=""><img src={e.asset.url} className={classesOfImg} alt="" /></div>

                        })}
                      </div>
                    } else if(ele.sectionType == 'full-width-image') {
                      return <img className="w-full rounded-xl " src={ele.fullWidthImage.asset.url} alt="" />

                    } else {
                      return <div className="py-4 default"> <PortableText value={ele.body} components = {components}/> </div>
                    }
                })

                
              }
            </div>
          </div>








      </div>

      {/* <BlogPreviews/> */}

    </Layout>
  )
}
