import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Gabarito } from "next/font/google"

const gabarito = Gabarito({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-gabarito",
  display: "swap",
  preload: true,
  fallback: ["sans-serif"],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={gabarito.className}>
      <Component {...pageProps} />
    </main>
  )
}
