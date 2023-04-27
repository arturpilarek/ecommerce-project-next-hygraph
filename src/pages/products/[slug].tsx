import { gql } from '@apollo/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { getClient } from '../../../lib/apolloClient';

export default function ProductPage({ product} : any) {

    console.log(product)

  return (
    <div>
        <h2>Product name : {product && product.name}</h2>
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
      fallback: 'blocking'
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
                    price
                    featured
                    images {
                        url
                    }
                    categories {
                        name
                    }
                }
            }
      `,
        variables: {
            slug
        }
    })

    console.log(productBySlug)

    return {
        props: {
            product: productBySlug.products[0]
        }
    }
}