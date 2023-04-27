import { Popover, Transition } from '@headlessui/react'
import Link from 'next/link'
import { Fragment } from 'react'
import SimpleProductCard from '../productCards/SimpleProductCard'


function classNames(...classes :string[]) {
    return classes.filter(Boolean).join(' ')
  }

  type FlytoutMenusProps = {
    categories: any
    }

export default function FlytoutMenus({ categories } : FlytoutMenusProps) {
  return (
    <div className="hidden h-full lg:flex">
    {/* Flyout menus */}
    <Popover.Group className="inset-x-0 bottom-0 z-30 px-4">
      <div className="flex justify-center h-full space-x-8">
        {categories && categories.map((category : any) => (
          <Popover key={category.name} className="flex">
            {({ open }) => (
              <>
                <div className="relative flex">
                  <Popover.Button
                    className={classNames(
                      open
                        ? 'border-indigo-600 text-indigo-600'
                        : 'border-transparent text-gray-700 hover:text-gray-800',
                      'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                    )}
                  >
                    {category.name}
                  </Popover.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Popover.Panel className="absolute inset-x-0 text-sm text-gray-500 top-full">
                    {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                    <div className="absolute inset-0 bg-white shadow top-1/2" aria-hidden="true" />

                    <div className="relative bg-white">
                      <div className="px-8 mx-auto max-w-7xl">
                        <div className="grid grid-cols-4 py-16 gap-x-8 gap-y-10">
                          {category.products && category.products.map((item: any) => (
                            item.featured &&
                            <SimpleProductCard key={item.name} item={item}  />
                          )
                          )}
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        ))}
        {/* Links from pages */}
        {/* {categories && categories.map((page : any) => (        ))} */}
          <Link
            href={"/categories/mugs"}
            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
          >
            Category - mugs
          </Link>
          <Link
            href={"/products/cat-i-are-programmer"}
            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
          >
            Product - cat
          </Link>
          <a
            href={"Stores"}
            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
          >
            Our Stores
          </a>
      </div>
    </Popover.Group>
  </div>
  )
}
