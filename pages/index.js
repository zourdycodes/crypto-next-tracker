import Head from "next/head";
import Image from "next/image";
import SearchList from "../components/SearchList";
import CoinList from "../components/CoinList";
import Layout from "../components/Layout";
import { useState } from "react";

export default function Home({ data }) {
  console.log(data);
  const [search, setSearch] = useState("");

  const filterCoin = data.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
  };
  return (
    <Layout>
      <div className="coin_app">
        <SearchList type="text" placeholder="Search" onChange={handleChange} />
        <CoinList data={filterCoin} />
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );

  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
