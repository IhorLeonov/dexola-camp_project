import styles from "./SectionTitle.module.scss";

export const SectionTitle = ({ text, numb }) => {
  return (
    <h2 className={styles.title}>
      {text}
      <span className="title__numb">{numb}</span>
    </h2>
  );
};
