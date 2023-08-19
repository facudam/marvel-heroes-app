import { marvelApi } from "@/api"
import { generatedHash, publicKey } from "@/api/keys"
import { MainLayout } from "@/components/layouts"
import { Hero, HeroesFullResponse } from "@/interfaces"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"

interface CharacterPageProps{
    hero: Hero
}

const HeroPageByName: NextPage<CharacterPageProps> = ({ hero }) => {
    return(
        <MainLayout title={`${hero.name}: the super Marvel Hero`} description={`Get all the info you want to know about ${hero.name}`} author="Facundo Cáceres">
            <>
                <h1>{hero.name}</h1>
            </>
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

    console.log(params)
    const { data } = await marvelApi.get<HeroesFullResponse>(`characters?ts=1&apikey=${publicKey}&hash=${generatedHash}`);
  
    // const nombre = params?.name

    // const getCurrentHeroInfo = () => {
    //     data.data.results.map(hero => {
    //         if (hero.name == nombre) {
    //             return hero
    //         }
    //     })
    // }

    // const hero = getCurrentHeroInfo()
    // console.log(hero)

    return {
      props: { data }
    }
  }

export default HeroPageByName;