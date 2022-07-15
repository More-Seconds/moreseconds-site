import { Dedicated } from 'components/Dedicated'
import { Testimonials } from 'components/shared sections/Testimonials'
import { Testimonial } from 'components/shared sections/Testimonials/Testimonial'
import { BodyText } from 'components/typography/BodyText'
import { Heading } from 'components/typography/Heading'
import { Layout } from 'containers/layout/Layout'
import { Request1, RequestAvatar1, Results1 } from 'public/images'
import { Request } from '../Request'
import { Results } from '../Results'
import { Stats } from '../Stats'
export function CaseStudyAlgorithm() {
  return (
    <Layout footerVariant="delivers">
      <Request image={Request1} avatar={RequestAvatar1}>
        Algorithm Agency came to More Seconds because they needed a dedicated
        technical resource that was able to integrate into their digital
        operation as seamlessly as their in-house marketing team members.
      </Request>
      <Results image={Results1}>
        {[
          'Extended in-house development and technical operations knowledge base',
          'Provided a suite of on-demand web services including research &#38; analysis, live web troubleshooting, web development expertise, project management, and much more',
          'Increased month-to-month ROI by expanding their premium client web service offerings',
          'Enabled marketing team to focus on their core competencies without worrying about the technical details'
        ]}
      </Results>
      <section>
        <Heading level="2" className="mb-5 text-4xl text-center">
          Bistro Boudin
        </Heading>
        <Heading level="3" className="mb-5 text-lg text-center uppercase">
          <span>bistro boudin </span>
          <span className="text-[#3939FA]">in partnership</span>
          <span> with algorithm agency</span>
        </Heading>
        <BodyText className="mx-4 text-sm text-center sm:mx-16 lg:mx-32">
          Bistro Boudin is a nationally recognized San Francisco Bakery,
          Restaurant, and Catering Company. More Seconds was contracted by
          Algorithm Agency to redesign the Bistro Boudin Flagship website,
          develop a customized dedicated web server, and handle the ongoing
          maintenance &#38; upgrade needs the client presented. This site uses
          Bridge + Elementor to provide a clean and easy way to create and
          update its frontend. It also includes customized PHP page templates,
          custom javascript for animating and rendering, as well as a host of
          custom features and functionality to improve their ADA compliance,
          page load time, and user experience.
        </BodyText>
      </section>
      <section>
        <Heading level="2" className="mb-5 text-4xl text-center">
          State Fair Entertainment
        </Heading>
        <Heading
          level="3"
          className="mx-2 mb-5 text-lg font-normal text-center uppercase"
        >
          <span>State Fair Entertainment </span>
          <span className="text-accent">in partnership</span>
          <span> with algorithm agency</span>
        </Heading>
        <BodyText className="mx-4 text-center sm:mx-16 lg:mx-32">
          State Fair Entertainment, producer of the Official Summer Fair of
          L.A., was created around the idea that a large-scale, high quality
          entertainment venue can promote positivity, be eco &#38; family
          friendly and be an asset to the community in which it is held. More
          Seconds received an urgent request from Algorithm Agency to build a
          custom website for their new client State Fair Entertainment. By
          working with More Seconds for all of their development and web
          consulting needs, Algorithm Agency managed to generate over $4M+ in
          ticket &#38; accessory sales for State Fair Entertainment for their
          inaugural event.
        </BodyText>
      </section>
      <Stats />
      <Testimonials title="Generate millions in revenue with  the right website" />
      <Dedicated />
    </Layout>
  )
}
