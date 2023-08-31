import s from "./Footer.module.scss";
import { Icon } from "../../helpers/IconSelector";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footer_container}>
        <ul className={s.footer_socials + " " + s.footer_item}>
          <li className={s.socials_list_item}>
            <Icon id="facebook" />
          </li>
          <li className={s.socials_list_item}>
            <Icon id="instagram" />
          </li>
          <li className={s.socials_list_item}>
            <Icon id="discord" />
          </li>
          <li className={s.socials_list_item}>
            <Icon id="telegram" />
          </li>
        </ul>
        <div className={s.footer_company_info}>
          {/* <div className={s.footer_designed + " " + s.footer_item}> */}
          <p className={s.footer_designed + " " + s.footer_item}>
            Designed by Dexola - 2023
          </p>
          {/* </div> */}
          {/* <div className={s.footer_copyright + " " + s.footer_item}> */}
          <p className={s.footer_copyright + " " + s.footer_item}>
            © All rights reserved
          </p>
          {/* </div> */}
        </div>
      </div>
    </footer>
  );
};
