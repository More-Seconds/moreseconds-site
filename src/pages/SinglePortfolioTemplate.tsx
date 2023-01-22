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

  const [posts, setPosts] = useState<any>({});

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
              ...
          }
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
      <div className="px-20 my-20">
          {posts.body.map((ele:any) => {
            console.log(ele.body);
            return <PortableText value={ele.body}
            components = {components}/>
          })}








      </div>

      <BlogPreviews/>

    </Layout>
  )
}
