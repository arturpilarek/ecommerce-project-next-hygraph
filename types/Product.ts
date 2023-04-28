export type Product = {
    id: string
    name: string
    description: {
        html: string
    }
    shortDescription: string
    price: number
    featured: boolean
    stock: number
    slug: string
    images: {
        url: string
    }[]
    categories: {
        name: string
        slug: string
    }[]
}