import '../styles/globals.css'
import "../styles/index.css";
import Layout from '../src/layouts/index';
import Head from "next/head";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css" />
    </Head>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default MyApp
