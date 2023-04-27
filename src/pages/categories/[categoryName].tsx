import { gql } from '@apollo/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { getClient } from '../../../lib/apolloClient';
import { Category } from '../../../types/Category';

type CategoryPageProps = {
    category: Category
}

export default function CategoryPage({ category } : CategoryPageProps) {

  return (
    <div>
        <h2>Category name : {category && category.name}</h2>
    </div>
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
      fallback: 'blocking'
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