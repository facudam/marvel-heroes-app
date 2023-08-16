import { FC } from "react";
import { Hero } from "@/interfaces";
import Image from "next/image";

interface HeroCardProps {
    hero: Hero;
}

import styles from "@/styles/HeroCard.module.css"

export const HeroCard: FC<HeroCardProps> = ( { hero } ) => {
    return(
        <div className={ styles.card }>
            <div className={ styles.imgCtn }>
                <Image src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt={`${hero.name}: marvel heroe`} width={200} height={200}/>
            </div>
            <div className={ styles.titleCtn }>
                <h2>{ hero.name }</h2>
            </div>
        </div>
    )
}