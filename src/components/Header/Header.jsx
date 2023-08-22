import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles["header"]}>
      <div className="logo">Logo</div>
      <button className={styles["header__btn"]}>Join Now</button>
    </header>
  );
};
