import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Marvel heroes app</title>
        <meta name="description" content="Marvel heroes app: get all the information about your favorite marvel heroes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ironman.png" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1>Marvel Heroes APP</h1>
      </main>
    </>
  )
}
