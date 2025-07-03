import Head from 'next/head'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Timeline from '../components/Timeline'
import Members from '../components/Members'
import Gallery from '../components/Gallery'
import QA from '../components/QA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>DEMON TEAM</title>
        <meta name="description" content="Ethical Hacking • Cybersecurity Research" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Matrix Background */}
      <div className="matrix-bg"></div>

      {/* Components */}
      <Navigation />
      <Hero />
      
      <div className="main-content">
        <Timeline />
        <Members />
        <Gallery />
        <QA />
      </div>
      
      <Footer />
    </>
  )
}