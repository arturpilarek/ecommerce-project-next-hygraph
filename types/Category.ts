import { Product } from "./Product"

export type Category = {
    id: string
    name: string
    categoryThumbnail: {
        url: string
    }
    description: {
        html: string
    }
    products: [Product]
}