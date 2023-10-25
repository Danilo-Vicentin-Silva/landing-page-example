import Header from "@/components/Header"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import Head from "next/head"
import SectionServices from "@/components/SectionServices"
import SectionHero from "@/components/SectionHero"

const Home = () => {
  return (
    <>
      <Head>
        <title>Landing Page</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
      </Head>
      <>
        <Header />
        <Nav />
        <SectionHero />
        <SectionServices />
        <Footer />
      </>
    </>
  )
}

export default Home
