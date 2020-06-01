import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import Container from 'react-bootstrap/Container';

export default function App({ Component, pageProps }) {
    return (
        <Container className="text-center" fluid>
            <Navigation />
            <Component {...pageProps} />
            <Footer />
        </Container>
    )
}
