import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

export default function App({ Component, pageProps }) {
    return (
        <div className="app">
            <Navigation />
            <Component {...pageProps} />
            <Footer />
        </div>
    )
}
