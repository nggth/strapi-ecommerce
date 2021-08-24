import '../styles/globals.css'
import Header from '../components/Header'
import { AuthProvider } from '../context/AuthContext'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <content>
        <Header />
        <Component {...pageProps} />
      </content>
    </AuthProvider>
  )
}

export default MyApp
