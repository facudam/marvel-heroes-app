import { FC } from "react";
import { Hero } from "@/interfaces";
import Image from "next/image";

interface HeroCardProps {
    hero: Hero,
    index: number
}

import styles from "@/styles/HeroCard.module.css"
import { useRouter } from "next/router";

export const HeroCard: FC<HeroCardProps> = ( { hero, index } ) => {
    const router = useRouter()
      return(
        <div onClick={() => router.push(`/hero/${ hero.name }`) }
            className={`${styles.card}`}>
            <div className={ styles.imgCtn }>
                <Image className={ styles.imgCtnImg } src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt={`${hero.name}: marvel heroe`} width={200} height={200}/>
            </div>
            <div className={ styles.titleCtn }>
                <h2>{ hero.name }</h2>
            </div>
        </div>
    )
}