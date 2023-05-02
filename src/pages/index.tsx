import Head from "next/head";

import PromoSection from "@/components/PromoSection";
import CategoryCards from "@/components/categories/CategoryCards";

import { gql } from "@apollo/client";
import { GetStaticProps } from "next";
import { getClient } from "../../lib/apolloClient";
import { Category } from "../../types/Category";

type HomeProps = {
  categories: Category[];
};


export default function Home({ categories } : HomeProps) {

  console.log(categories)
  
  return (
    <>
    <Head>
      <title>Meme-commerce</title>
      <meta name="description" content="Home page" />
    </Head>
    <section>
      <PromoSection />
      <CategoryCards categories={categories} />
    </section>
    </>
  )
}

export const getStaticProps : GetStaticProps = async () => {

  const client = getClient();
  
  const { data : categoryData } = await client.query({
      query: gql`
      query categories {
        categories {
          name
          categoryThumbnail {
            url
          }
          shortDescription
          slug
        }
      }
    `,
  })

  return {
      props: {
          categories: categoryData.categories
      }
  }
}
