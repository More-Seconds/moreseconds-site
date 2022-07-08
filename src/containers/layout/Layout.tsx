import { Header } from './Header'
import { Footer } from './Footer'
import { FooterCTA } from './FooterCTA'

type Props = {
  children: JSX.Element | JSX.Element[]
}

export function Layout(props: Props) {
  return (
    <>
      <Header />
      {props.children}
      <FooterCTA />
      <Footer />
    </>
  )
}