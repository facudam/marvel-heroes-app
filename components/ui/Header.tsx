import { FC } from 'react'
import styles from '@/styles/Header.module.css'

export const Header: FC = () => {
    return(
        <header className={`${styles.header}`}>
            <h1 className={`${styles.textShadowPopBottom}`}>The <span>Marvel Heroes</span> application</h1>
            <p>Discover the gateway to explore a universe of iconic characters and captivating comics. Dive in, explore heroes, comics, and curate your favourites with ease.</p>
            <div className={ styles.btnContainer }>
                <button className={ styles.button }>Favourites</button>
            </div>
        </header>
    )
}