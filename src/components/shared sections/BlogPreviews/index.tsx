import { PageBuilding, PageDesign, WebCare, FeatureFunction, AuditReport } from 'public/images'
import { Heading } from '../../typography/Heading'
// import { SingleBlogPreview } from './SingleBlogPreview'
// import { SmallTitle } from '../../typography/SmallTitle'
// import { BallPurple } from 'public/svgs'
import { BodyText } from 'components/typography/BodyText'
// import { Button } from 'components/Button'
import { Link } from 'react-router-dom'


import React, { useEffect, useState } from 'react'
import { PortableText } from '@portabletext/react'

import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: '1l0nc7l2',
  dataset: 'production',
  useCdn: true // this enables CDN-based querying for faster results
})

export function BlogPreviews() {

    const [posts, setPosts] = useState<any>([]);
    
    // function clickBlog(e:any) {
    //     e.preventDefault();
    //     console.log(e.currentTarget.id);
    //     location.href = location.href + "/" + e.currentTarget.id
    // }

    useEffect(() => {
    client.fetch(`
    *[_type == 'post'] {
        title,
        _id,
        mainImage {
        asset->{url}
        },
        slug
    }`)
    .then(results => {
        setPosts(results);
        console.log(posts)
    })
    }, [])




  return (
    <section className="flex flex-col flex-wrap content-center justify-center w-full mt-24 mb-40">
        <div className="grid grid-cols-1 px-10 gap-y-10 gap-x-16 md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
        {
            posts.map((ele:any) => {
                return <>
                    {/* <a href={'/blog/' + ele._id} id={ele._id} >
                        <div className="max-w-[20rem]">
                            <img src={ele.mainImage.asset.url} className="object-cover object-left h-48 rounded-lg w-80"></img>
                            <BodyText className="pt-2">BRAND MANAGEMENT</BodyText>
                            <Heading level="2">{(ele.title.length >= 50) ? ele.title.slice(0,45).trim() + '...' : ele.title}</Heading>
                        </div>
                    </a> */}

                    {console.log(ele.slug.current)}
                    <a href={`/blog/${ele.slug.current}`} id={ele.slug.current} >
                        <div className="max-w-[20rem]">
                            <img src={(ele.mainImage == null) ? 'https://via.placeholder.com/150' : ele.mainImage.asset.url} className="object-cover object-left h-48 rounded-lg w-80"></img>
                            <BodyText className="pt-2">BRAND MANAGEMENT</BodyText>
                            <Heading level="2">{(ele.title.length >= 50) ? ele.title.slice(0,45).trim() + '...' : ele.title}</Heading>
                        </div>
                    </a>
                </>
            })
        }
        </div>
    </section>

    
  )
}
