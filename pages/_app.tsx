import "../styles/globals.css";
import Head from "next/head";
import Footer from "../components/Footer";

interface IProps {
  Component: React.FC;
  pageProps: {};
}

function MyApp({ Component, pageProps }: IProps): React.FunctionComponentElement<any> {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/qme3qcf.css"></link>
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
