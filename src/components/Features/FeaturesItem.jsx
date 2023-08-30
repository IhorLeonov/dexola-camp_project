import styles from "./Features.module.scss";
import { FeaturesImage } from "./FeaturesImage";
import { FiArrowUpRight } from "react-icons/fi";

export const FeaturesItem = ({ id, title, body }) => {
  const titleNumb = id.toString().padStart(2, "0");

  return (
    <li className={styles.features_item}>
      <FeaturesImage id={id} />
      <div className={styles.features_item_info}>
        <h4 className={"sub-title" + " " + styles.features_item_title}>
          <span>{titleNumb}</span>
          <span>{title}</span>
        </h4>
        <p className={styles.features_item_desc}>{body}</p>
        <button type="button" className={styles.features_btn}>
          <FiArrowUpRight size={18} />
          Discover now
        </button>
      </div>
    </li>
  );
};
