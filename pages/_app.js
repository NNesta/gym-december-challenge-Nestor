import '../styles/globals.css';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';

export default function App({ Component, pageProps }) {
  return (
  <div>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
  </div>
  )
}
