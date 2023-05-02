import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/outline'
import FlytoutMenus from './FlytoutMenus'

import Image from 'next/image'
import Link from 'next/link'
import dogeLogo from '../../../public/doge-logo.jpg'

type BottomNavigationProps = {
categories: any,
openState: boolean,
changeOpenState: any
}

export default function BottomNavigation(props : BottomNavigationProps) {

    const changeOpenState = () => {
        props.changeOpenState(!props.openState)
    }
    
  return (
    <div className="bg-white">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="border-b border-gray-200">
        <div className="flex items-center justify-between h-16">
          {/* Logo (lg+) */}
          <div className="hidden lg:flex lg:flex-1 lg:items-center">
          <span className="sr-only">Meme-commerce logo</span>
            <Link href="/" className='flex'>
              <Image
            src={dogeLogo}
            width={40}
            height={40}
            alt="Meme store logo"
            className="w-auto h-8"
          />
            </Link>
          </div>
            <FlytoutMenus categories={props.categories} />

          {/* Mobile menu and search (lg-) */}
          <div className="flex items-center flex-1 lg:hidden">
            <button
              type="button"
              className="p-2 -ml-2 text-gray-400 bg-white rounded-md"
              onClick={changeOpenState}
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="w-6 h-6" aria-hidden="true" />
            </button>

            {/* Search */}
            <a href="#" className="p-2 ml-2 text-gray-400 hover:text-gray-500">
              <span className="sr-only">Search</span>
              <MagnifyingGlassIcon className="w-6 h-6" aria-hidden="true" />
            </a>
          </div>

          {/* Logo (lg-) */}
          <Link href="/" className="lg:hidden">
            <span className="sr-only">Meme-commerce logo</span>
          <Image
            src={dogeLogo}
            width={40}
            height={40}
            alt="Meme-commerce logo"
            className="w-auto h-8"
          />
          </Link>

          <div className="flex items-center justify-end flex-1">
            <div className="flex items-center lg:ml-8">
              {/* Cart */}
              <div className="flow-root ml-4 lg:ml-8">
                <a href="#" className="flex items-center p-2 -m-2 group">
                  <ShoppingBagIcon
                    className="flex-shrink-0 w-6 h-6 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                  <span className="sr-only">items in cart, view bag</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
