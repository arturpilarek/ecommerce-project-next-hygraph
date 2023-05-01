import { Product } from "./Product"

export type Category = {
    id: string
    name: string
    slug: string
    categoryThumbnail: {
        url: string
    }
    description: {
        html: string
    }
    shortDescription: string
    products: [Product]
}