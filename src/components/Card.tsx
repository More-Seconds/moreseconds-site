import { Heading } from './typography/Heading'

export function Card() {
  return (
    <div style={{backgroundColor: 'darkermid', color: 'white'}} className="max-w-xs pt-10 pb-10 rounded">
      <Heading level="3" className="text-center">Full Website & Web App Design</Heading>
      {/* <p className="px-8 text-lg">We provide full-service digital design services to create state-of-the-art web pages and full website design solutions.</p> */}
      
    </div>
  )
}
