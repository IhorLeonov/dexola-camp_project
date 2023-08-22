import styles from "./Header.module.scss";
import { FiArrowUpRight } from "react-icons/fi";
import { Icon } from "../IconSelector/IconSelector";

export const Header = () => {
  return (
    <header className={styles["header"]}>
      <div className="logo">
        <Icon id="logo" />
      </div>

      <button className={styles["header-btn"]}>
        <FiArrowUpRight size={18} />
        Join Now
      </button>
    </header>
  );
};
