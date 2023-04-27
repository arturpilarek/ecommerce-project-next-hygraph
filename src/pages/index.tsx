import PromoSection from "@/components/PromoSection";
import Head from "next/head";

export default function Home() {

  return (
    <>
    <Head>
      <title>Meme-commerce</title>
      <meta name="description" content="Home page" />
    </Head>
    <section>
      <PromoSection />
    </section>
    </>
  )
}
