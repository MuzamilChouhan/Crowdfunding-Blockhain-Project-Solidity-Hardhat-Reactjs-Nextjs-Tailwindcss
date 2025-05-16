import Head from "next/head";
import "../styles/globals.css";
import { NavBar, Footer } from "../Components";
import { CrowdFundingProvider } from "../Context/CrowdFunding";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <title>FundFlow</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <CrowdFundingProvider>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </CrowdFundingProvider>
    </>
  );
}
