import { CheckIcon, ChevronDoubleDownIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { ShieldCheckIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useContext } from 'react'
import { Currency_Data } from '../../../context/CurrencyContext'
import { HygraphImageLoader } from '../../../helper/hygraphImageLoader'
import { Product } from '../../../types/Product'
import Breadcrumbs from '../common/Breadcrumbs'

type ProductOverviewProps = {
    product: Product
}

function classNames(...classes :string[]) {
    return classes.filter(Boolean).join(' ')
  }

export default function ProductOverview({ product } : ProductOverviewProps ) {

    const {currency} = useContext(Currency_Data);

    const breadcrumbs = [
        { name: 'Home', href: '/'},
        { name: product.categories[0].name, href: `/categories/${product.categories[0].slug}`},
        { name: product.name, href: `/products/${product.slug}`}
    ]

  return (
    <div className="bg-white">
      <div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
        {/* Product details */}
        <div className="lg:max-w-lg lg:self-end">
            <Breadcrumbs breadcrumbsArray={breadcrumbs} />
          <div className="mt-4">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{product.name}</h1>
          </div>

          <section aria-labelledby="information-heading" className="mt-4">

            <div className="flex items-center">
              { product.name === "Bonsai Lego Tree"
              ? <p className='text-lg text-gray-900 sm:text-xl'>Priceless</p> 
              : <p className="text-lg text-gray-900 sm:text-xl">{(product.price * currency.rate).toFixed()} {currency.symbol}</p>
            }
            </div>

            <div className="mt-4 space-y-6">
              <div className="text-base text-gray-500" dangerouslySetInnerHTML={{ __html: product.description.html }}/>
            </div>

            <div className="flex items-center mt-6">
                {
                    product.stock > 5 ? (
                        <>
                        <CheckIcon className="flex-shrink-0 w-5 h-5 text-green-500" aria-hidden="true" />
                        <p className="ml-2 text-sm text-gray-500">In stock</p>
                        </>
                    ) : product.stock > 0 ? (
                        <>
                        <ChevronDoubleDownIcon className="flex-shrink-0 w-5 h-5 text-yellow-500" aria-hidden="true" />
                        <p className="ml-2 text-sm text-gray-500">Only {product.stock} in stock</p>
                        </>
                    ) : (
                        <>
                        <XMarkIcon className="flex-shrink-0 w-5 h-5 text-red-500" aria-hidden="true" />
                        <p className="ml-2 text-sm text-gray-500">Out of stock</p>
                        </>
                    )
                }
            </div>
          </section>
        </div>

        {/* Product image */}
        <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
          <div className="overflow-hidden rounded-lg aspect-h-1 aspect-w-1">
            <Image loader={HygraphImageLoader} src={product.images[0].url} alt={product.name} width={600} height={600} className="object-cover object-center w-full h-full" />
          </div>
        </div>

        {/* Product form */}
        <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
          <section aria-labelledby="options-heading">
            <form>
              <div className="mt-10">
                <button
                  type="submit"
                    disabled={product.stock > 0 ? false : true}
                    className={classNames(
                        product.stock > 0 ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-500',
                        'flex items-center justify-center w-full px-8 py-3 mt-5 text-base font-medium text-white border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50'
                         )
                        }
                >
                  {product.stock > 0 ? 'Buy now' : 'Out of stock'}
                </button>
              </div>
              <div className="mt-6 text-center">
                <div className="inline-flex text-base font-medium group">
                  <ShieldCheckIcon
                    className="flex-shrink-0 w-6 h-6 mr-2 text-gray-500"
                    aria-hidden="true"
                  />
                  <span className="text-gray-600">Satisfaction Guarantee</span>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  )
}
