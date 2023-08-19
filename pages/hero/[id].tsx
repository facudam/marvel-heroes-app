import { marvelApi } from "@/api"
import { generatedHash, publicKey } from "@/api/keys"
import { MainLayout } from "@/components/layouts"
import { Hero, HeroesFullResponse } from "@/interfaces"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import styles from '@/styles/HeroPageById.module.css'

interface CharacterPageProps{
    hero: Hero
}

const HeroPageById: NextPage<CharacterPageProps> = ({ hero }) => {

    console.log(hero)

    return(
        <MainLayout title={`${hero.name}: the super Marvel Hero`} description={`Get all the info you want to know about ${hero.name}`} author="Facundo Cáceres">
            <>
                <h1 className={styles.title}>{hero.name}</h1>
            </>
        </MainLayout>
    )
}

export const getStaticPaths: GetStaticPaths = async() => {
    const { data } = await marvelApi.get<HeroesFullResponse>(`characters?ts=1&apikey=${publicKey}&hash=${generatedHash}`);

    const heroes: string[] = data.data.results.map(hero => hero.id.toString())
    return {
        paths: heroes.map(id => ({
            params: { id }
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async({ params }) => {
    const { id } = params as { id: string }
    const { data } = await marvelApi.get<HeroesFullResponse>(`characters/${id}?ts=1&apikey=${publicKey}&hash=${generatedHash}`);
    let hero = data.data.results[0]
    return {
      props: { hero }
    }
  }

export default HeroPageById;