import styles from "./Title.module.scss";

export const Title = ({ text, numb }) => {
  return (
    <>
      <h2 className={styles.title}>
        <span>{text}</span>
        <span>{numb}</span>
      </h2>
      <hr className={styles.title_underline} />
    </>
  );
};
