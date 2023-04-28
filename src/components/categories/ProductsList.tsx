import { Product } from '../../../types/Product'
import ProductCard from '../productCards/ProductCard'

function classNames(...classes : string[]) {
  return classes.filter(Boolean).join(' ')
}

type ProductListProps = {
  products: Product[]
}

export default function ProductsList({ products } : ProductListProps) {
  return (
    <div className="bg-white">
      <div className="mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 -mx-px border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard product={product} key={product.id}/>
          ))}
        </div>
      </div>
    </div>
  )
}
