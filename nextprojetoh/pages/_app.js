
import '../styles/globals.css'
import Head from 'next/head'
import Header from '../Components/Header'
function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>Portifólio</title>
      </Head>
      <Header>
        <Component {...pageProps} />
      </Header>
      
    </>
  ) 
    
  
}

export default MyApp
