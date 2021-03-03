import { GlobalStyles } from '../styles/global'
import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
      <GlobalStyles/>
    </Provider>
  )
}

export default MyApp
