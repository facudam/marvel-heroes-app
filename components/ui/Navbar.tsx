import Link from "next/link"
import styles from '@/styles/Navbar.module.css'

export const Navbar = () => {
    return(
        <nav className={ styles.nav }>
            <Link className={` ${styles.link}`} href=''>listas</Link>
            <Link className={` ${styles.link} ${styles.logo}`} href=''>Marvel heroes app</Link>
            <Link className={` ${styles.link}`} href=''>Favourites</Link>
        </nav>
    )
}