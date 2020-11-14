import '../styles/globals.css'

interface IProps {
  Component: React.FC;
  pageProps: {};
}

function MyApp({ Component, pageProps }: IProps): React.FunctionComponentElement<any> {
  return <Component {...pageProps} />
}

export default MyApp
