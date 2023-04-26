import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
const Header = () => {
  return (
    <header className={styles.navbarWrapper}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Image
            src="/images/logo_avatown_manual_1_basi_inverse.png"
            alt="Logo"
            width={200}
            height={50}
          />
        </div>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link href="/market-page" className={styles.linkMarketPage}>
              Go to Marketpage
            </Link>
          </li>

          <div className={styles.searchContainer}>
            <input type="text" className={styles.searchInput} />
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
