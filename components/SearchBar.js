import styles from "./styles/SearchBar.module.css";

const SearchBar = ({ data }) => {
  return (
    <div className={styles.coin__search}>
      <input
        className={styles.coin__input}
        type="text"
        placeholder="Search Crypto"
      />
    </div>
  );
};

export default SearchBar;
