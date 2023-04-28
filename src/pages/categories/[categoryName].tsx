import ProductsList from '@/components/categories/ProductsList';
import { gql } from '@apollo/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import { getClient } from '../../../lib/apolloClient';
import { Category } from '../../../types/Category';

type CategoryPageProps = {
    category: Category
}

export default function CategoryPage({ category } : CategoryPageProps) {


  return (
    <main className="pb-24">
    <Head>
        <title>
        {`Meme-commerce - ${category.name}`}
        </title>
        <meta
        name="description"
        content={category.shortDescription}
        key="desc"
        />
    </Head>
        <div className="px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">{category.name}</h1>
          <div className="max-w-xl mx-auto mt-4 text-base text-gray-500" dangerouslySetInnerHTML={{ __html: category.description.html }}/>
        </div>
        <ProductsList products={category.products}/>
        </main>
    
  )
}

export const getStaticPaths : GetStaticPaths = async () => {
    const client = getClient();

    const { data: categoriesData } = await client.query({
        query: gql`
         query getCategories {
            categories {
                slug
                }
            }
        ` 
    });

    const categories : string[] = categoriesData.categories

    const paths = categories.map((categorySlug: any ) => ({
        params: {
            categoryName: categorySlug.slug.toString()
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

    const { categoryName: slug } = context.params as IParams
    const client = getClient();
    
    const { data : categoryBySlug } = await client.query({
        query: gql`
            query getCategory ($slug: String){
                categories(where: {slug: $slug}) {
                    id
                    name
                    categoryThumbnail {
                    url
                    }
                    description {
                    html
                    }
                    shortDescription
                    products {
                    ... on Product {
                        id
                        name
                        featured
                        description {
                        html
                        }
                        images {
                        url
                        }
                        slug
                        price
                    }
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
            category: categoryBySlug.categories[0]
        }
    }
}