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
        <Header title="The home for all my shortcuts" />
        <p className="description">
          With shortcuts like iCuts, your experience is bound to be better than ever!
        </p>
      </main>

      <Footer />
    </div>
  )
}
