import s from "./TopNfts.module.scss";
import { Title } from "../Title/Title";
import { TopList } from "./TopNftsList";

export const TopNfts = () => {
  return (
    <section className={s.top_section}>
      <Title name="Top NFTs" numb="02" />
      <div className={s.top}>
        <TopList />
      </div>
    </section>
  );
};
