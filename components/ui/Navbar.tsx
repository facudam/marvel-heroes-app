import { FC } from 'react'
import Link from "next/link"
import styles from '@/styles/Navbar.module.css'


export const Navbar: FC = () => {
    return(
        <nav className={ styles.nav }>
            <ul className={ styles.navCntPrimary }>
                <li>
                    <Link className={`${styles.link} ${styles.linkPrincipal}`} href=''>listas</Link>
                </li>
                <li>
                    <Link className={`${styles.link} ${styles.logo}`} href='/'>marvel heroes app</Link>
                </li>
                <li>
                    <Link className={`${styles.link} ${styles.linkPrincipal}`} href=''>Favourites</Link>
                </li>
            </ul>
            <ul className={ `${styles.navCntPrimary} ${styles.navCntSecondary}` }>
                <li>
                    <Link className={`${styles.link} ${styles.linkSecondary}`} href=''>comics</Link>
                </li>
                <li>
                    <Link className={`${styles.link} ${styles.linkSecondary}`} href=''>characters</Link>
                </li>
                <li>
                    <Link className={`${styles.link} ${styles.linkSecondary}`} href=''>creators</Link>
                </li>
            </ul>
        </nav>
    )
}