import '../styles/globals.css';
//import '../styles/fontV1.css';

//import '../styles/fontV2.css';


import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
