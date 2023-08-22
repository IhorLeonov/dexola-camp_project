import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer
      className={"container" + " " + styles["footer"]}
      style={{ paddingLeft: 0, paddingRight: 0 }}
    >
      <ul className={styles["socials-list"] + " " + styles["footer__item"]}>
        <li className={styles["socials-list__item"]}></li>
        <li className={styles["socials-list__item"]}></li>
        <li className={styles["socials-list__item"]}></li>
        <li className={styles["socials-list__item"]}></li>
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
