// svg-sprite method.

import sprite from "../../assets/icons/sprite.svg";
import styles from "./IconSelector.module.scss";

export const Icon = ({ id }) => {
  switch (id) {
    case "logo":
      return (
        <svg className={styles.svg} width={34.5} height={19.5}>
          <use href={sprite + "#logo"}></use>
        </svg>
      );
    case "discord":
      return (
        <svg className={styles.svg} width={32} height={32}>
          <use href={sprite + "#discord"}></use>
        </svg>
      );
    case "facebook":
      return (
        <svg className={styles.svg} width={32} height={32}>
          <use href={sprite + "#facebook"}></use>
        </svg>
      );
    case "instagram":
      return (
        <svg className={styles.svg} width={32} height={32}>
          <use href={sprite + "#instagram"}></use>
        </svg>
      );
    case "telegram":
      return (
        <svg className={styles.svg} width={32} height={32}>
          <use href={sprite + "#telegram"}></use>
        </svg>
      );
    default:
      return;
  }
};

// Import svg as ReactComponent method.
// Esier, less code, but has some problems with svg styling.
// If you needn't hover you shuold use it.

// import { ReactComponent as Discord } from "../../assets/icons/socials/discord.svg";
// import { ReactComponent as Facebook } from "../../assets/icons/socials/facebook.svg";
// import { ReactComponent as Instagram } from "../../assets/icons/socials/instagram.svg";
// import { ReactComponent as Telegram } from "../../assets/icons/socials/telegram.svg";
// import { ReactComponent as Logo } from "../../assets/icons/logo.svg";

// export const IconSelector = ({ id }) => {
//   switch (id) {
//     case "logo":
//       return <Logo />;
//     case "discord":
//       return <Discord />;
//     case "facebook":
//       return <Facebook />;
//     case "instagram":
//       return <Instagram />;
//     case "telegram":
//       return <Telegram />;
//     default:
//       return;
//   }
// };
