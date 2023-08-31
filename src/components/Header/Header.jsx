import styles from "./Header.module.scss";
import { FiArrowUpRight } from "react-icons/fi";
import { Icon } from "../../helpers/IconSelector";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <div className="logo">
          <Icon id="logo" />
        </div>

        <button className={styles.header_btn} type="button">
          <FiArrowUpRight size={18} />
          Join Now
        </button>
      </div>
    </header>
  );
};
