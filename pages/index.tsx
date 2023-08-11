
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { MainLayout } from '@/components/layouts'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <MainLayout 
        title='The marvel heroes application' 
        author='Facundo Cáceres' 
        description="The Marvel heroes app: get all your heroes info of marvel's universe">
        <>
          <h1>New application</h1>
        </>
      </MainLayout>
      {/* <main className={`${styles.main} ${inter.className}`}>
        <h1>Marvel Heroes APP</h1>
      </main> */}
    </>
  )
}
