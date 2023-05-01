import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import { Currency_Data } from '../../../context/CurrencyContext'
import { HygraphImageLoader } from '../../../helper/hygraphImageLoader'
import { Product } from '../../../types/Product'

type ProductCardProps = {
    product: Product
}

export default function ProductCard({ product } : ProductCardProps) {
  const {currency} = useContext(Currency_Data);

  return (
    <div key={product.id} className="relative p-4 border-b border-r border-gray-200 group sm:p-6">
    <div className="overflow-hidden bg-gray-200 rounded-lg aspect-h-1 aspect-w-1 group-hover:opacity-75">
          <Image
            loader={HygraphImageLoader}
            src={product.images[0].url}
            width={255}
            height={255}
            alt={product.name}
            className="object-cover object-center w-full h-full"
          />
    </div>
    <div className="flex flex-col flex-1 p-4 space-y-2">
        <h3 className="text-sm font-medium text-gray-900">
            <Link href={`/products/${product.slug}`}>
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
            </Link>
        </h3>
        <p className="text-sm text-gray-500">{product.shortDescription}</p>
        <div className="flex flex-col justify-end flex-1">
            <p className="text-base font-medium text-gray-900">{(product.price * currency.rate).toFixed()} {currency.symbol}</p>
        </div>
        </div>
  </div>
  )
}
