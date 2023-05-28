import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";
import logo from "./logo.svg"
import user from "./user.svg"

export default function Navbar() {

    return (
        <div className={styles.navbar_box}>
            <div className={styles.navbar_left}>
                <div className={styles.logo}>
                    <Image src={logo}/>
                </div>
                <div className={styles.options}>
                <ul className={styles.links_nav}>
                    <li><Link href="#">Home</Link></li>
                    <li><Link href="#">Quem somos</Link></li>
                    <li><Link href="#">Fale conosco</Link></li>
                </ul>
            </div>

            </div>
            <div className={styles.login}>
                <div className={styles.user}>
                </div>
                <Image src={user} />
                <div className={styles.user_text}>
                    <Link href="">Login</Link>
                </div>
                
            </div>
        </div>
    )
}