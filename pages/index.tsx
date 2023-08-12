import { Inter } from 'next/font/google'
import { MainLayout } from '@/components/layouts'
import { Header } from '@/components/ui'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <MainLayout 
        title='The non-official marvel heroes application' 
        author='Facundo Cáceres' 
        description="The Marvel heroes app: get all your heroes info of marvel's universe">
        <>
          <section className={`${styles.home}`}>
            <Header />
            <main className={`${styles.main}`}></main>
          </section>
        </>
      </MainLayout>
    </>
  )
}
