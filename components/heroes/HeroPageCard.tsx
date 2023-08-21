import { FC } from 'react'
import Image from 'next/image';
import styles from '@/styles/HeroPageCard.module.css'

interface HeroPageCardProps {
    path: string,
    extension: string,
    name: string,
    description: string
}

export const HeroPageCard: FC<HeroPageCardProps> = ({ path, extension, name, description }) => {
    return(
        <div className={styles.heroCard}>
            <h1>{name}</h1>
            {
                (description !== '') &&
                    <p>{description}</p>
            }
            <Image src={`${path}.${extension}`} alt={`${name}` } width={500} height={500} />
        </div>
    )
}