import { PageBuilding, PageDesign, WebCare, FeatureFunction, AuditReport } from 'public/images'
import { Heading } from '../../typography/Heading'
import { Project } from './Project'
import { SmallTitle } from '../../typography/SmallTitle'
import { BallPurple } from 'public/svgs'
import { BodyText } from 'components/typography/BodyText'
import { Button } from 'components/Button'
// import { createClient } from 'contentful'

// const client = createClient({
//   space: 'bca1sb6nivz6',
//   accessToken: 'q2TJeu5SPVSrviAaRjnU_6Nm9wuHqG2ERVR1YGPc8v0'
// })


// client.getEntries({
//   content_type: 'blogPost'
// }).then(response => {
//   const posts = response.items
//   posts.forEach(post => {
//     console.log(post.fields.title)
//   })
// })

import sanityClient from '@sanity/client'


const client = sanityClient({
  projectId: '1l0nc7l2',
  dataset: 'production',
  useCdn: true // this enables CDN-based querying for faster results
})

client.fetch(`
*[_type == 'post'] {
  title
}`)
  .then(results => {
    console.log(results)
  })



export function Projects() {
  return (
    <section className="relative flex flex-col content-center self-center justify-center px-8 mb-20 md:my-32 flex-nowrap justify-items-center justify-self-center md:px-16">
      {/* <SmallTitle className="mb-2 text-center">Our Services</SmallTitle>
      <Heading
        level="2"
        className="max-w-xl mx-auto mb-20 text-center xl:text-[56px] xl:leading-[56px] xl:max-w-4xl"
      >
        Access a broad slate of services and innovative solutions
      </Heading> */}

      {/* <div className=" pt-4 pb-8 overflow-hidden sm:px-[25px] sm:flex sm:flex-col sm:items-start sm:mb-4 sm:gap-6 md:grid md:grid-cols-2 md:gap-3 md:pt-[88px] md:grid-cols-2 md:px-[45px]  lg:px-[64px]  xl:grid-cols-2  xl:pt-32 3xl:pt-60 xl:mx-auto xl:max-w-[1400px] xl:px-[45px]">
        <div className="2xl:w-fit 2xl:self-start">
          <SmallTitle className="mb-4">
            Our Services
          </SmallTitle>
          <Heading
            level="2"
            className="mb-6 md:text-[2.5rem] md:leading-[1] xl:text-5xl xl:mr-0 xl:min-w-[20ch]"
          >
            {[<>Access a broad slate of services and <span className="text-accent">innovative solutions.</span></>]}
            
          </Heading>
          <BodyText className="mb-2 xl:text-5xl xl:mr-0 xl:min-w-[20ch] xl:text-lg">
          Transform your marketing, creative, and management teams into digital superheroes—literally. Whether it’s an eye-catching site redesign, a couple of landing page builds, an api integration, or a unique problem, you can rest easy knowing that we’re on top of everything and then some.
          </BodyText>
        </div>

        <div className="content-end justify-self-center md:justify-self-end xl:justify-self-end 2xl:w-fit 2xl:self-start">
          <Button href="/case-studies">View our work</Button>
        </div>
      </div> */}

      {/* grid-template-rows: repeat(2,minmax(0,0.5fr)) */}
      {/* xl:max-w-[1600px] */}
      <Heading level="1" className="self-center w-full mb-10 max-w-7xl ">
        I want to see All capabilities
      </Heading>
      <ul className="grid self-center gap-4 mb-20 sm:grid-cols-2 md:grid-cols-3 auto-rows-fr max-w-7xl">
        <Project
          title="Page Building"
          className="col-start-1 col-end-3 md:col-start-1 md:col-end-3"
          image={FeatureFunction}
          slug={'/web-development'}
        />
        <Project
          title="Features & Functionality"
          className="md:col-start-3 md:col-end-4"
          image={FeatureFunction}
          slug={'/web-development'}
        />
        <Project
          title="Features & Functionality"
          className="md:col-start-1 md:col-end-2"
          image={FeatureFunction}
          slug={'/web-development'}
        />
        <Project
          title="Features & Functionality"
          className="col-start-1 col-end-3 md:col-start-2 md:col-end-3"
          image={FeatureFunction}
          slug={'/web-development'}
        />

        <Project
          title="Features & Functionality"
          className="md:col-start-3 md:col-end-4"
          image={FeatureFunction}
          slug={'/web-development'}
        />

        <Project
          title="Features & Functionality"
          className="md:col-start-1 md:col-end-2"
          image={FeatureFunction}
          slug={'/web-development'}
        />
        
        <Project
          title="Features & Functionality"
          className="col-start-1 col-end-3 md:col-start-1 md:col-end-2"
          image={FeatureFunction}
          slug={'/web-development'}
        />

        <Project
          title="Features & Functionality"
          className="col-start-1 col-end-3 md:col-start-2 md:col-end-4 md:row-start-3 md:row-end-5"
          image={FeatureFunction}
          slug={'/web-development'}
        />

        <div>

        </div>

        

      </ul>

      
      
      <BallPurple className="absolute top-0 scale-50 right-20" />
    </section>
  )
}
