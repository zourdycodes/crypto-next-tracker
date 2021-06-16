import styles from "./styles/SearchBar.module.css";
import { useState } from "react";

const SearchList = ({ text, placeholder, onChange }) => {
  return (
    <div className="coin__wrap">
      <div className={styles.coin__search}>
        <input
          className={styles.coin__input}
          text={text}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default SearchList;

// export const getServerSideProps = async () => {
//   const res = await fetch(
//     "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"
//   );

//   const filtered = await res.json();

//   return {
//     props: {
//       filtered,
//     },
//   };
// };
