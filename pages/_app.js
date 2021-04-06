import { useEffect } from 'react'
import AOS from '../public/js/aos'

import '../public/styles/fonts.css'
import '../public/styles/app.css'
import '../public/styles/icons.css'
import '../public/styles/aos.css'

function MyApp({ Component, pageProps }) {
  useEffect(() =>{
    AOS.init({
      easing: 'ease-in-out-sine'
    })
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
