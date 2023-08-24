import { GetStaticProps, NextPage } from 'next'
import { MainLayout } from '@/components/layouts'
import { Header } from '@/components/ui'
import styles from '@/styles/Home.module.css'
import { HeroCard } from '@/components/heroes'
import { marvelApi } from '@/api'
import { HeroesFullResponse, Hero } from '@/interfaces'
import { generatedHash, publicKey, limit, ts } from '@/api/keys'

interface HomeProps {
  heroes: Hero[]
}

const HomePage: NextPage<HomeProps> = ({ heroes }) => {
  console.log(heroes)
  return (
    <>
      <MainLayout 
        title='The non-official marvel heroes application' 
        author='Facundo Cáceres' 
        description="The Marvel heroes app: get all your heroes info of marvel's universe">
        <div className={`${styles.center}`}>
          <section className={`${styles.home}`}>
            <Header />
            <main className={`${styles.main}`}>
              {
                heroes.map((hero, index) => (
                  <HeroCard hero={ hero } index={ index } key={ hero.id }/>
                ))
              }
            </main>
          </section>
        </div>
      </MainLayout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async() => {

  const { data } = await marvelApi.get<HeroesFullResponse>(`characters?orderBy=-modified&limit=${limit}&ts=${ts}&apikey=${publicKey}&hash=${generatedHash}`);

  const unavailableImg = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available';
  // We filter those heroes without a description and a picture. 
  const heroes: Hero[] = data.data.results.filter(hero => hero.description !== '' && hero.thumbnail.path !== unavailableImg);
  return {
    props: { heroes }
  }
}

export default HomePage
