import s from "./Footer.module.scss";
import { IconSelector } from "../../helpers/IconSelector";

export const Footer = () => {
  return (
    <footer
      className={"container" + " " + s["footer"]}
      style={{ paddingLeft: 0, paddingRight: 0 }}
    >
      <ul className={s["socials-list"] + " " + s["footer__item"]}>
        <li className={s["socials-list__item"]}>
          <IconSelector id="facebook" />
        </li>
        <li className={s["socials-list__item"]}>
          <IconSelector id="instagram" />
        </li>
        <li className={s["socials-list__item"]}>
          <IconSelector id="discord" />
        </li>
        <li className={s["socials-list__item"]}>
          <IconSelector id="telegram" />
        </li>
      </ul>
      <div className={s["text-wrapper"]}>
        <div className={s["designed"] + " " + s["footer__item"]}>
          <p>Designed by Dexola - 2023</p>
        </div>
        <div className={s["copyright"] + " " + s["footer__item"]}>
          <p>© All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};
