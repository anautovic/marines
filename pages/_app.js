import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
//import { StaticKitProvider } from '@statickit/react'
 
//library.add(faBars, faUser, faTwitter, faFacebook)

function MyApp({ Component, pageProps }) {
  return( <Component {...pageProps} />)
}

export default MyApp
