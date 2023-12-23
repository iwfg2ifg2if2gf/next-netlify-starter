import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Thunder X" />
        <p className="description">
        Check our discord server just made a amazing update<code> V1 TEST</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}

