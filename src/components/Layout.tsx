import { Header } from './Header';
import { Footer } from './Footer';

type Props = {
    children: JSX.Element
}

export function Layout(props: Props) {
    return (
        <>
            <Header />
                {props.children}
            <Footer />
        </>
    )
}