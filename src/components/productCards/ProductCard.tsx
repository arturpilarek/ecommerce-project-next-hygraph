import { Product } from '../../../types/Product'

type ProductCardProps = {
    product: Product
}

export default function ProductCard({ product } : ProductCardProps) {
  return (
    <div key={product.id} className="relative p-4 border-b border-r border-gray-200 group sm:p-6">
    <div className="overflow-hidden bg-gray-200 rounded-lg aspect-h-1 aspect-w-1 group-hover:opacity-75">
      <img
        src={product.images[0].url}
        alt={product.name}
        className="object-cover object-center w-full h-full"
      />
    </div>
    <div className="pt-10 pb-4 text-center">
      <h3 className="text-sm font-medium text-gray-900">
        <a href={`/products/${product.slug}`}>
          <span aria-hidden="true" className="absolute inset-0" />
          {product.name}
        </a>
      </h3>
      <p className="mt-4 text-base font-medium text-gray-900">{product.price}$</p>
    </div>
  </div>
  )
}
