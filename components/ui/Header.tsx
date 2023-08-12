import { FC } from 'react'
import styles from '@/styles/Header.module.css'

export const Header: FC = () => {
    return(
        <header className={`${styles.header}`}>
            <h1 className={`${styles.textShadowPopTop}`}>The Marvel Heroes Application</h1>
            <p>Discover your gateway to explore a universe of iconic characters and captivating comics. Dive in, explore heroes, comics, and curate your favourites with ease.</p>
        </header>
    )
}