import { FC } from "react";
import { Hero } from "@/interfaces";
import Image from "next/image";

interface HeroCardProps {
    hero: Hero;
}

import styles from "@/styles/HeroCard.module.css"

export const HeroCard: FC<HeroCardProps> = ( { hero } ) => {

    const unavailableImg = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available';

    if (hero.thumbnail.path !== unavailableImg) 
      return(
        <div className={ styles.card }>
            <div className={ styles.imgCtn }>
                <Image className={ styles.imgCtnImg } src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt={`${hero.name}: marvel heroe`} width={200} height={200}/>
            </div>
            <div className={ styles.titleCtn }>
                <h2>{ hero.name }</h2>
            </div>
        </div>
    )
}