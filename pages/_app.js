import { useEffect } from 'react'
import AOS from 'aos';

import '../styles/globals.css'
import 'aos/dist/aos.css'; 


function MyApp({ Component, pageProps }) {
    useEffect(() => {
      setTimeout(() => {
          AOS.init({
              duration: 800
          })
      }, 0)
  },[])

  return <Component {...pageProps} />
}

export default MyApp
