import { PageBuilding, PageDesign, WebCare, FeatureFunction, AuditReport } from 'public/images'
import { Heading } from '../../typography/Heading'
import { Project } from './Project'
import { SmallTitle } from '../../typography/SmallTitle'
import { BallPurple } from 'public/svgs'
import { BodyText } from 'components/typography/BodyText'
import { Button } from 'components/Button'

export function Projects() {
  return (
    <section className="relative flex flex-col content-center self-center justify-center px-8 mb-20 md:my-32 flex-nowrap justify-items-center justify-self-center md:px-16">
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
