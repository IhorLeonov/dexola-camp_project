import styles from "./Header.module.scss";
import arrowIcon from "../../assets/icons/arrow-up-right.svg";
import { Icon } from "../../helpers/IconSelector";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <a href="https://dexola.com/" target="_blank" rel="noreferrer">
          <Icon id="logo" />
        </a>
        <a href="#join">
          <button className={styles.header_btn} type="button">
            <img src={arrowIcon} alt="Arrow" />
            Join Now
          </button>
        </a>
      </div>
    </header>
  );
};
