import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from '../components/navigation';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Navigation />
            <Component {...pageProps} />
        </>
    )
}
