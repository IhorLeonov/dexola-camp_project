import s from "./Features.module.scss";
import { FeaturesImage } from "./FeaturesImage";
import arrowIcon from "../../assets/icons/arrow-up-right.svg";

export const FeaturesItem = ({ id, title, body }) => {
  const titleNumb = id.toString().padStart(2, "0");

  return (
    <li className={s.features_item}>
      <FeaturesImage id={id} />
      <div className={s.features_item_info}>
        <h4 className={s.features_item_title}>
          <span>{titleNumb}</span>
          <span>{title}</span>
        </h4>
        <p className={s.features_item_desc}>{body}</p>
        <button type="button" className={s.features_btn}>
          <img src={arrowIcon} alt="Arrow" />
          Discover now
        </button>
      </div>
    </li>
  );
};
