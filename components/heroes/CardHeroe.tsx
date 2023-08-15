import { FC } from "react";
import { Hero } from "@/interfaces";
import Image from "next/image";

interface CardHeroProps {
    hero: Hero;
}

export const CardHeroe: FC<CardHeroProps> = ( { hero } ) => {
    return(
        <div>
            <Image src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt={`${hero.name}: marvel heroe`} width={50} height={50}/>
            <div>
                <h2>{hero.name}</h2>
            </div>
        </div>
    )
}