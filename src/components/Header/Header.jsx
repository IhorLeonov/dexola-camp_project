import styles from "./Header.module.scss";
import arrowIcon from "../../assets/icons/arrow-up-right.svg";
import { Icon } from "../../helpers/IconSelector";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <div className="logo">
          <Icon id="logo" />
        </div>
        <button className={styles.header_btn} type="button">
          <img src={arrowIcon} alt="Arrow" />
          Join Now
        </button>
      </div>
    </header>
  );
};
