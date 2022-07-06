import { Header } from './Header'
import { Footer } from './Footer'
import { FooterForm } from './Form'
import { FooterCTA } from './FooterCTA'

type Props = {
  children: JSX.Element
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
