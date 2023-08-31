import s from "./Features.module.scss";
import data from "../../assets/features.json";
import { FeaturesItem } from "./FeaturesItem";

export const FeaturesList = () => {
  return (
    <ul className={s.features_list}>
      {data.map(({ id, title, body }) => {
        return <FeaturesItem key={id} id={id} title={title} body={body} />;
      })}
    </ul>
  );
};
