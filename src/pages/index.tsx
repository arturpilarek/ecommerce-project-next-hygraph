import PromoSection from "@/components/PromoSection";
import Head from "next/head";
import { useContext, useEffect } from "react";
import { Currency_Data } from "../../context/CurrencyContext";
import { Currency } from "../../types/Currency";


export default function Home() {
  const {currency, setCurrency} = useContext(Currency_Data);

  return (
    <>
    <Head>
      <title>Meme-commerce</title>
      <meta name="description" content="Home page" />
    </Head>
    <section>
      <p>{currency.code}</p>
      <PromoSection />
    </section>
    </>
  )
}
