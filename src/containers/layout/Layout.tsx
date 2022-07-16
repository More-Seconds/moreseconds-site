import { Header } from './Header'
import { Footer } from './Footer'
import { FooterCTA } from './FooterCTA'

type Props = {
  children: JSX.Element | JSX.Element[]
  footerVariant: string
}

export function Layout(props: Props) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <FooterCTA variant={props.footerVariant} />
      <Footer />
    </>
  )
}
