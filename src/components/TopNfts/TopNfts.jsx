import s from "./TopNfts.module.scss";
import { Title } from "../Title/Title";
// import { TopList } from "./TopNftsList";

export const TopNfts = () => {
  return (
    <section className={s.nfts_section}>
      <Title name="Top NFTs" numb="02" />
      <div className={s.nfts}>
        <div className={s.nfts_grid}>
          <div className={s.nfts_grid_header}>
            <div className={s.nfts_grid_void}></div>
            <div className={s.nfts_grid_name}>NFT Name</div>
            <div className={s.nfts_grid_rarity}>
              Rarity <span className={s.nfts_grid_rarity_level}>Level</span>
            </div>
            <div className={s.nfts_grid_total}>Total games</div>
            <div className={s.nfts_grid_won}>Games Won</div>
            <div className={s.nfts_grid_price}>Price (ETH)</div>
          </div>
          <div className={s.nfts_grid_body}>
            <div className={s.nfts_grid_image_box}>
              <div
                style={{
                  borderRadius: 50,
                  width: 64,
                  height: 64,
                  backgroundColor: "pink",
                }}
              />
            </div>
            <div className={s.nfts_grid_name_val}>Legendary Artifact</div>
            <div className={s.nfts_grid_rarity_val}>Legendary</div>
            <div className={s.nfts_grid_total_val}>189</div>
            <div className={s.nfts_grid_won_val}>125</div>
            <div className={s.nfts_grid_price_val}>
              2.5 <span className={s.nfts_grid_cur}>ETH</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// <table className={s.top_nfts_table}>
//   <thead className={s.top_nfts_thead}>
//     <tr>
//       <th></th>
//       <th>NFT Name</th>
//       <th>Rarity Level</th>
//       <th>Total games</th>
//       <th>Games Won</th>
//       <th>Price(ETH)</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>
//         <img className={s.top_nfts_table_img} src="" alt="" />
//       </td>
//       <td>Legendary Artifact</td>
//       <td>Legendary</td>
//       <td>189</td>
//       <td>125</td>
//       <td>2.5</td>
//     </tr>
//   </tbody>
// </table>
