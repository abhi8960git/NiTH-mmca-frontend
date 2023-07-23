import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from './Components/SideBar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Sidebar>
        <Component {...pageProps} />
    </Sidebar>
  )
}
