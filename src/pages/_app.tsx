import { Provider } from 'next-auth/client'
import { ThemeContextProvider } from '../hooks/StylesContext'

import { GlobalStyles } from '../styles/global'

function MyApp({ Component, pageProps }) { 
  return (
    <Provider session={pageProps.session}>
      <ThemeContextProvider>
        <Component {...pageProps} />
        <GlobalStyles/>
      </ThemeContextProvider>
    </Provider>
  )
}

export default MyApp
