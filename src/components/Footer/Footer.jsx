import styles from "./Footer.module.scss";
const { footer, socials__list, socials__item, designed, copyright } = styles;

export const Footer = () => {
  return (
    <footer className={footer} style={{ padding: 0 }}>
      <p className={designed}>Designed by Dexola - 2023</p>
      <ul className={socials__list}>
        <li className={socials__item}></li>
        <li className={socials__item}></li>
        <li className={socials__item}></li>
        <li className={socials__item}></li>
      </ul>
      <p className={copyright}>© All rights reserved</p>
    </footer>
  );
};
