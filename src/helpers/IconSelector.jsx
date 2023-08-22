// import { ReactComponent as Discord } from "../assets/icons/socials/discord.svg";
// import { ReactComponent as Facebook } from "../assets/icons/socials/facebook.svg";
// import { ReactComponent as Instagram } from "../assets/icons/socials/instagram.svg";
// import { ReactComponent as Telegram } from "../assets/icons/socials/telegram.svg";
// import { ReactComponent as Logo } from "../assets/icons/logo.svg";

// второй способ это импортировать svg как реакт компонент, так даже немного проще и меньше кода,
// но есть нюнсы с ховером, по этому если ховер не нужен то можно использовать его

import styles from "./IconSelector.module.scss";
import sprite from "../assets/icons/icons.svg";

export const IconSelector = ({ id }) => {
  switch (id) {
    case "logo":
      return (
        <svg className={styles.svg} width={32} height={32}>
          <use href={sprite + "#logo"}></use>
        </svg>
      );
    // return <Logo />;
    case "discord":
      return (
        <svg className={styles.svg} width={32} height={32}>
          <use href={sprite + "#discord"}></use>
        </svg>
      );
    // return <Discord />;
    case "facebook":
      return (
        <svg className={styles.svg} width={32} height={32}>
          <use href={sprite + "#facebook"}></use>
        </svg>
      );
    // return <Facebook />;
    case "instagram":
      return (
        <svg className={styles.svg} width={32} height={32}>
          <use href={sprite + "#instagram"}></use>
        </svg>
      );
    // return <Instagram />;
    case "telegram":
      return (
        <svg className={styles.svg} width={32} height={32}>
          <use href={sprite + "#telegram"}></use>
        </svg>
      );
    // return <Telegram />;
    default:
      return;
  }
};
