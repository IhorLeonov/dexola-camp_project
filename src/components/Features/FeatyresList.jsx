import data from "../../helpers/features.json";
import styles from "./Features.module.scss";
import { FeaturesItem } from "./FeaturesItem";

export const FeaturesList = () => {
  return (
    <ul className={styles.features_list}>
      {data.map(({ id, title, body }) => {
        return <FeaturesItem key={id} id={id} title={title} body={body} />;
      })}
    </ul>
  );
};
