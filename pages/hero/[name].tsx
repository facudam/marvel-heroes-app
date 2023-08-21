import { marvelApi } from "@/api"
import { generatedHash, publicKey } from "@/api/keys"
import { MainLayout } from "@/components/layouts"
import { Hero, HeroesFullResponse } from "@/interfaces"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import styles from '@/styles/HeroPageByName.module.css'
import { HeroPageCard } from "@/components/heroes/HeroPageCard"

interface CharacterPageProps{
    hero: Hero
}

const HeroPageByName: NextPage<CharacterPageProps> = ({ hero }) => {

    console.log(hero)

    return(
        <MainLayout 
            title={`${hero.name}: the super Marvel Hero`} 
            description={`Get all the info you want to know about ${hero.name}`} author="Facundo Cáceres">
            <div className={styles.heroPage}>
                <section className={styles.heroPageSection}>
                    <HeroPageCard
                        path={hero.thumbnail.path}
                        extension={hero.thumbnail.extension}
                        name={hero.name}
                        description={hero.description}
                    />
                </section>
            </div>
            
        </MainLayout>
    )
}

export const getStaticPaths: GetStaticPaths = async() => {
    const { data } = await marvelApi.get<HeroesFullResponse>(`characters?ts=1&apikey=${publicKey}&hash=${generatedHash}`);

    const heroes: string[] = data.data.results.map(hero => hero.name)
    return {
        paths: heroes.map(name => ({
            params: { name }
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async({ params }) => {
    const { data } = await marvelApi.get<HeroesFullResponse>(`characters?ts=1&apikey=${publicKey}&hash=${generatedHash}`);

    //We get only the current hero path information, and we pass it to props.
    let hero = data.data.results.find((hero) => hero.name == params?.name)
    return {
      props: { hero }
    }
  }

export default HeroPageByName;