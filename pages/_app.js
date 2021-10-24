import '../styles/globals.css'
import Layout from './layout/layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout staticElements>
      <Component {...pageProps} />
    </Layout>
  )

}

export default MyApp
