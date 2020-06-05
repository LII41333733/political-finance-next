import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import Container from 'react-bootstrap/Container';
import Head from 'next/head'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />

            </Head>
            <Container className="text-center" fluid>
                <Navigation />
                <Component {...pageProps} />
                <Footer />
            </Container>
        </>
    )
}
