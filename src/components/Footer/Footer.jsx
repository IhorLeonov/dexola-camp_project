import s from "./Footer.module.scss";
import { Icon } from "../../helpers/IconSelector";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footer_container}>
        <ul className={s.footer_socials + " " + s.footer_item}>
          <li className={s.socials_list_item}>
            <a
              href="https://www.facebook.com/trinetix"
              target="_blank"
              rel="noreferrer"
            >
              <Icon id="facebook" />
            </a>
          </li>
          <li className={s.socials_list_item}>
            <a
              href="https://www.instagram.com/trinetix_inc/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon id="instagram" />
            </a>
          </li>
          <li className={s.socials_list_item}>
            <a href="https://dexola.com/" target="_blank" rel="noreferrer">
              <Icon id="discord" />
            </a>
          </li>
          <li className={s.socials_list_item}>
            <a href="https://dexola.com/" target="_blank" rel="noreferrer">
              <Icon id="telegram" />
            </a>
          </li>
        </ul>
        <div className={s.footer_company_info}>
          <p className={s.footer_designed + " " + s.footer_item}>
            Designed by Dexola - 2023
          </p>
          <p className={s.footer_copyright + " " + s.footer_item}>
            © All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
