import '../styles/global.css';

import { ChallengesProvider } from '../contexts/ChallangeContexts'

function MyApp({ Component, pageProps }) {
  return (
        <Component {...pageProps} />
  )
}

export default MyApp
