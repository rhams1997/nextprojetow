import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
          <title>Portifólio</title>
      </Head>
      <Component {...pageProps} />
    </>  
    
  )
}

export default MyApp
