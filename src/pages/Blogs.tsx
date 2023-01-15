import { Clients } from '../components/shared sections/Clients'
import { Layout } from '../containers/layout/Layout'
import { Hero } from 'containers/shared/Hero'
import { Team } from 'components/shared sections/Team'
import { MDash } from 'components/shared sections/MDash'
import { SectionBlur } from 'components/SectionBlur'
import { Partners } from 'components/shared sections/Partners'
import { Services } from 'components/shared sections/Services'

import { Button } from 'components/Button'
import { Heading } from 'components/typography/Heading'
import { BodyText } from 'components/typography/BodyText'
import { SmallTitle } from '../components/typography/SmallTitle'
import { HomeHeroBG, NoMaintenance } from 'public/svgs'
import { Testimonials } from 'components/shared sections/Testimonials'
import { CenteredCTA } from 'components/shared sections/CenteredCta'
import { BlogPreviews } from 'components/shared sections/BlogPreviews'
import { HeroCentered } from 'containers/shared/HeroCentered'
import { Signup } from 'components/forms/Signup'

import {
  AboutHero,
  BallOrange,
  Cloud,
  CloudFull,
  CloudOpaque,
  Star,
  Smoke,
  Planet,
  ManArtist,
  BallBlue,
  BallPurple,
  StarOutline,
  BigSaturn,
  HollowStar
} from 'public/svgs'



import React, { useEffect, useState } from 'react'
import { PortableText } from '@portabletext/react'

import sanityClient from '@sanity/client'

export function Blogs() {
  return (
    <Layout footerVariant="delivers">
      <section className="z-10 flex flex-col items-center justify-center w-min">
        <HeroCentered className="py-0">
          <SmallTitle className="mx-auto text-center">Our Work</SmallTitle>
          <Heading level="1" className="max-w-4xl mx-auto text-center">
          See Why You Should Use More Seconds
          </Heading>
          <BodyText className="px-5 mx-auto text-center sm:max-w-4xl sm:px-10 xl:text-lg">
          Our astronomical design teams have helped some of the world’s top brands leverage a full range of conceptual and production expertise to execute sensational campaigns and scale at the speed of light.
          </BodyText>
          <Button
            href="#contact"
            className="block max-w-xs px-8 py-3 mx-auto mt-6 text-center"
          >
            Get More Seconds
          </Button>
          <Planet className="absolute scale-50 -top-4 -right-8 xl:scale-75 xl:right-32" />
          <BallOrange className="absolute right-0 scale-[25%] top-56 xl:scale-75 xl:right-16 xl:top-96" />
          <BallBlue className="absolute top-0 scale-50 left-4 xl:scale-75 xl:left-32 xl:top-16" />
          <Cloud className="hidden rotate-180 xl:-scale-y-100 xl:scale-x-100 xl:left-0" />
          <BlogPreviews/>
        </HeroCentered>
        
      </section>
      
      
    </Layout>
  )
}
