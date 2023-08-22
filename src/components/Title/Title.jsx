import styles from "./Title.module.scss";

export const Title = ({ text, numb }) => {
  return (
    <div className={styles["title-box"]}>
      <h2 className={styles["title"]}>
        <span>{text}</span>
        <span>{numb}</span>
      </h2>
    </div>
  );
};
