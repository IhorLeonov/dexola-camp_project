import styles from "./Footer.module.scss";
import { Icon } from "../IconSelector/IconSelector";

export const Footer = () => {
  return (
    <footer
      className={"container" + " " + styles["footer"]}
      style={{ paddingLeft: 0, paddingRight: 0 }}
    >
      <ul className={styles["socials-list"] + " " + styles["footer__item"]}>
        <li className={styles["socials-list__item"]}>
          <Icon id="facebook" />
        </li>
        <li className={styles["socials-list__item"]}>
          <Icon id="instagram" />
        </li>
        <li className={styles["socials-list__item"]}>
          <Icon id="discord" />
        </li>
        <li className={styles["socials-list__item"]}>
          <Icon id="telegram" />
        </li>
      </ul>
      <div className={styles["text-wrapper"]}>
        <div className={styles["designed"] + " " + styles["footer__item"]}>
          <p>Designed by Dexola - 2023</p>
        </div>
        <div className={styles["copyright"] + " " + styles["footer__item"]}>
          <p>© All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};
