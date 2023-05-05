import { faBell } from "@fortawesome/free-regular-svg-icons";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";
const Header = () => {
  return (
    <div className="fixed-top">
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
            <div className="d-flex justify-content-between">
              <div>
                <li className={styles.li}>
                  <Link
                    href="/market-page"
                    className={`${styles.linkMarketPage} ${styles.customUnderLine}`}
                  >
                    Go to Marketpage
                  </Link>
                </li>
              </div>
              <div>
                <div className={styles.searchContainer}>
                  <input type="text" className={styles.searchInput} />
                  <span className={styles.customInputSearch}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </span>

                  <span className={styles.customNotificationIcon}>
                    <FontAwesomeIcon icon={faBell} />
                    <span className="position-absolute translate-middle badge rounded-pill bg-danger">
                      3
                    </span>
                  </span>

                  <span className={styles.customNotificationIcon}>
                    <FontAwesomeIcon icon={faCartShopping} />
                    <span className="position-absolute translate-middle badge rounded-pill bg-danger">
                      1
                    </span>
                  </span>

                  <span className={styles.customUserIcon}>
                    <Image
                      src="/images/userImg.png"
                      alt="Logo"
                      width={20}
                      height={24}
                    />
                  </span>
                </div>
              </div>
            </div>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
