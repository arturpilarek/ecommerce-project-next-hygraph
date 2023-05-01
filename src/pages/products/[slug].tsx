import { gql } from '@apollo/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import { getClient } from '../../../lib/apolloClient';

import ProductOverview from '@/components/productCards/ProductOverview';

export default function ProductPage({ product} : any) {

  return (
    <div>
    <Head>
        <title>
        {`Meme-commerce - ${product.name}`}
        </title>
        <meta
        name="description"
        content={product.shortDescription}
        key="desc"
        />
    </Head>
        <ProductOverview product={product}/>
    </div>
  )
}

export const getStaticPaths : GetStaticPaths = async () => {
    const client = getClient();

    const { data: productsData } = await client.query({
        query: gql`
         query getProductsSlug {
            products {
                slug
                }
            }
        ` 
    });

    const products : string[] = productsData.products

    const paths = products.map((product: any ) => ({
        params: {
            slug: product.slug.toString()
        }
    }))

    return {
      paths: paths,
      fallback: false
    };
  }

  interface IParams extends ParsedUrlQuery {
    slug: string
}

  export const getStaticProps : GetStaticProps = async (context) => {

    const { slug } = context.params as IParams
    const client = getClient();
    
    const { data : productBySlug } = await client.query({
        query: gql`
            query getProductBySlug ($slug: String)  {
                products(where: {slug: $slug}) {
                    id
                    name
                    description {
                        html
                    }
                    shortDescription
                    price
                    featured
                    stock
                    slug
                    images {
                        url
                    }
                    categories {
                        name
                        slug
                    }
                }
            }
      `,
        variables: {
            slug
        }
    })

    return {
        props: {
            product: productBySlug.products[0]
        }
    }
}