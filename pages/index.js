import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Madhanraj - UX Designer</title>
        <meta name="description" content="Enjoy the Journey" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2 className={styles.main}>Madhanraj - UX Designer
        <q>Enjoy the journey</q>
      </h2>
      
      <footer className={styles.footer}>
       
          Powered by{' '}
          Harish
      
      </footer>
    </div>
  )
}
