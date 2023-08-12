import Link from "next/link"
import styles from '@/styles/Navbar.module.css'
import Image from "next/image"

export const Navbar = () => {
    return(
        <nav className={ styles.nav }>
            <div className={ styles.navCntPrimary }>
                <Link className={`${styles.link}`} href=''>listas</Link>
                <Link className={`${styles.link} ${styles.logo}`} href=''>marvel heroes app</Link>
                <Link className={`${styles.link}`} href=''>Favourites</Link>
            </div>
            <div className={ `${styles.navCntPrimary} ${styles.navCntSecondary}` }>
                <Link className={`${styles.link}`} href=''>comics</Link>
                <Link className={`${styles.link}`} href=''>characters</Link>
                <Link className={`${styles.link}`} href=''>more</Link>
            </div>
        </nav>
    )
}