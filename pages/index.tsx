import { GetStaticProps, NextPage } from 'next'
import { MainLayout } from '@/components/layouts'
import { Header } from '@/components/ui'
import styles from '@/styles/Home.module.css'
import { CardHeroe } from '@/components/heroes'
import { marvelApi } from '@/api'
import { HeroesFullResponse } from '@/interfaces/heroes-full-data'
import { HeroesList } from '../interfaces/heroes-full-data';
import { generatedHash, publicKey } from '@/api/keys'

interface HomeProps {
  heroes: HeroesList[]
}

const HomePage: NextPage<HomeProps> = ({ heroes }) => {
  console.log(heroes)
  return (
    <>
      <MainLayout 
        title='The non-official marvel heroes application' 
        author='Facundo Cáceres' 
        description="The Marvel heroes app: get all your heroes info of marvel's universe">
        <>
          <section className={`${styles.home}`}>
            <Header />
            <main className={`${styles.main}`}>
              {/* {
                heroes.map(heroe => (
                  <CardHeroe key={heroe.id} name={heroe.name} />
                ))
              } */}
            </main>
          </section>
        </>
      </MainLayout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async() => {

  const { data } = await marvelApi.get<HeroesFullResponse>(`characters?ts=1&apikey=${ publicKey }&hash=${ generatedHash }`);

  const heroes: HeroesList[] = data.data.results;
  return {
    props: { heroes }
  }
}

export default HomePage
