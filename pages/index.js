import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container" style={{height:'1000vh'}}>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header/>
        <div>
          <h1>Teste de popup Gontijo</h1>
          <div height='100vh'></div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
