import Link from 'next/link'
import styles from './Navbar.module.scss'

const Navbar = () => {
    return (
        <nav className={styles.Nav}>
            <div className='container'>
                <div className={styles.NavbarItem}>
                    <Link className={styles.Logo} href='/'>
                        NEXT | BLOG
                    </Link>
                    <button className={styles.AddPostBtn}>Добавить пост</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
