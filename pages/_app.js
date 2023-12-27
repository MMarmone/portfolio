// `pages/_app.js`
import '../styles/global.css';
import '../styles/typingAnimation.css'
import '../styles/ScrollRevealImage.css';
import '../styles/goDownAnimation.css'


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
