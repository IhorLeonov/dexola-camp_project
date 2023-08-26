import styles from "./Footer.module.scss";
import { Icon } from "../IconSelector/IconSelector";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <ul className={styles.socials_list + " " + styles.footer_item}>
          <li className={styles.socials_list__item}>
            <Icon id="facebook" />
          </li>
          <li className={styles.socials_list__item}>
            <Icon id="instagram" />
          </li>
          <li className={styles.socials_list__item}>
            <Icon id="discord" />
          </li>
          <li className={styles.socials_list__item}>
            <Icon id="telegram" />
          </li>
        </ul>
        <div className={styles.text_wrapper}>
          <div className={styles.designed + " " + styles.footer_item}>
            <p>Designed by Dexola - 2023</p>
          </div>
          <div className={styles.copyright + " " + styles.footer_item}>
            <p>© All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
